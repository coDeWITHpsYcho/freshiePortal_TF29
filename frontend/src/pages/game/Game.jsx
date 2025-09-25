import React, { useState, useEffect, useRef } from 'react';
import './Game.css';
import spaceship from './assets/spaceship.png';

// Game constants
const BIRD_SIZE = 35;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
const GRAVITY = 0.5;
const JUMP_VELOCITY = -7;
const JUMP_HEIGHT = 72;
const PIPE_EXTRA_HEIGHT = 300;
const PIPE_WIDTH = 60;
const PIPE_GAP = 120;
const OBSTACLE_SPEED = 2;
const OBSTACLE_RANGE = 50;

const Game = ({ onScoreUpdate, onGameOver }) => {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Refs for stable mutable values used by RAF / intervals
  const velocityRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isGameOverRef = useRef(isGameOver);

  useEffect(() => {
    isGameOverRef.current = isGameOver;
  }, [isGameOver]);

  // Pipes & pipe movement (keeps your existing interval-based pipe logic)
  useEffect(() => {
    let pipeGeneratorInterval;
    let pipeMovementInterval;

    if (isGameStarted && !isGameOver) {
      // Move pipes and update score every 24ms (kept from original)
      pipeMovementInterval = setInterval(() => {
        setPipes(currentPipes => {
          let newScore = score;
          const newPipes = currentPipes
            .map(pipe => {
              const newPipe = { ...pipe };

              if (newPipe.left + PIPE_WIDTH < (GAME_WIDTH / 2) && !newPipe.passed) {
                newScore++;
                newPipe.passed = true;
              }

              if (newPipe.isObstacle) {
                newPipe.verticalShift += newPipe.verticalDirection * OBSTACLE_SPEED;
                if (Math.abs(newPipe.verticalShift) >= OBSTACLE_RANGE) {
                  newPipe.verticalDirection *= -1;
                }
              }

              newPipe.left -= 3.5;
              return newPipe;
            })
            .filter(pipe => pipe.left > -PIPE_WIDTH);

          if (newScore !== score) {
            setScore(newScore);
            onScoreUpdate(newScore);
          }

          return newPipes;
        });
      }, 24);

      // Generator for new pipes
      pipeGeneratorInterval = setInterval(() => {
        if (!isGameOverRef.current) {
          const topPipeHeight = Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP));
          const isObstacle = Math.random() > 0.8;
          setPipes(prevPipes => [
            ...prevPipes,
            {
              left: GAME_WIDTH,
              topPipeHeight: topPipeHeight,
              bottomPipeHeight: GAME_HEIGHT - topPipeHeight - PIPE_GAP,
              passed: false,
              isObstacle: isObstacle,
              verticalShift: 0,
              verticalDirection: 1,
            },
          ]);
        }
      }, 1600);
    }

    return () => {
      clearInterval(pipeMovementInterval);
      clearInterval(pipeGeneratorInterval);
    };
  }, [isGameStarted, isGameOver, score, onScoreUpdate]);

  // Collision detection and ground check — keep this effect but remove bird movement from it
  useEffect(() => {
    if (!isGameStarted || isGameOver) return;

    // ground collision
    if (birdPosition > GAME_HEIGHT - BIRD_SIZE) {
      handleGameOver();
      return;
    }

    for (let pipe of pipes) {
      const topPipeBottom = pipe.topPipeHeight + pipe.verticalShift;
      const bottomPipeTop = GAME_HEIGHT - pipe.bottomPipeHeight + pipe.verticalShift;
      const birdIsAtPipeX = pipe.left < (GAME_WIDTH / 2) + BIRD_SIZE && pipe.left + PIPE_WIDTH > (GAME_WIDTH / 2);
      const birdHitsTopPipe = birdPosition < topPipeBottom;
      const birdHitsBottomPipe = birdPosition + BIRD_SIZE > bottomPipeTop;
      if (birdIsAtPipeX && (birdHitsTopPipe || birdHitsBottomPipe)) {
        handleGameOver();
        return;
      }
    }
  }, [birdPosition, pipes, isGameStarted, isGameOver]);

  // Physics loop for smooth bird movement using requestAnimationFrame
  useEffect(() => {
    if (!isGameStarted || isGameOver) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        lastTimeRef.current = null;
      }
      return;
    }

    const loop = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current; // ms since last frame
      lastTimeRef.current = time;

      // scale dt to original 24ms tick so old constants work similarly
      const scale = dt / 24;

      // accelerate
      velocityRef.current += GRAVITY * scale;

      setBirdPosition(prev => {
        let next = prev + velocityRef.current * scale;

        // clamp top
        if (next < 0) {
          next = 0;
          velocityRef.current = 0;
        }

        // ground check — call game over here to ensure immediate stop
        if (next > GAME_HEIGHT - BIRD_SIZE) {
          // place on ground and trigger game over
          next = GAME_HEIGHT - BIRD_SIZE;
          velocityRef.current = 0;
          handleGameOver();
        }

        return next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };

    // Intentionally do NOT include velocityRef or lastTimeRef in deps
  }, [isGameStarted, isGameOver]);

  const startGame = () => {
    setBirdPosition(GAME_HEIGHT / 2);
    setPipes([]);
    setScore(0);
    onScoreUpdate(0);
    setIsGameOver(false);
    setIsGameStarted(true);
    velocityRef.current = 0;
  };

  const handleGameOver = () => {
    // avoid double-calling
    if (isGameOverRef.current) return;
    setIsGameOver(true);
    setIsGameStarted(false);
    const newHighScore = Math.max(score, highScore);
    setHighScore(newHighScore);
    onGameOver(newHighScore);
  };

  const handleJump = () => {
    if (isGameOver) return;
    if (!isGameStarted) {
      startGame();
    }

    // instead of teleporting the bird, give it an upward velocity
    // this creates a smooth arc that requestAnimationFrame will render
    velocityRef.current = JUMP_VELOCITY;
  };

  // Keep a ref to the latest handleJump so the keydown listener (attached once)
  // always calls the current function without reattaching listeners on every render.
  const handleJumpRef = useRef(handleJump);
  useEffect(() => {
    handleJumpRef.current = handleJump;
  }, [handleJump]);

  // Keyboard controls: space bar to jump (also ignores typing in inputs)
  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

      if (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32) {
        e.preventDefault(); // prevent page from scrolling
        if (handleJumpRef.current) handleJumpRef.current();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="game-area" onClick={handleJump}>
      <div className="score-display">
        Score: <strong>{score}</strong> | High Score: <strong>{highScore}</strong>
      </div>

      {/* Use transform translateY for better performance (GPU) — kept top for compatibility with your CSS */}
      <img src={spaceship} alt='spaceship' className="bird" style={{ top: `${birdPosition}px`, left: `${GAME_WIDTH / 2}px` }} />

      {pipes.map((pipe, index) => (
        <div key={index}>
          <div className="pipe top" style={{ left: `${pipe.left}px`,
                                            height: `${pipe.topPipeHeight + PIPE_EXTRA_HEIGHT}px`, 
                                            top: `-${PIPE_EXTRA_HEIGHT}px`,
                                            transform: `translateY(${pipe.verticalShift}px)` }} />
          <div className="pipe bottom" style={{ left: `${pipe.left}px`,
                                               height: `${pipe.bottomPipeHeight + PIPE_EXTRA_HEIGHT}px`,
                                               bottom: `-${PIPE_EXTRA_HEIGHT}px`,
                                               transform: `translateY(${pipe.verticalShift}px)` }} />
        </div>
      ))}

      {!isGameStarted && !isGameOver && (
        <div className="start-screen">
          <h2>Flappy Bird</h2>
          <p>Click anywhere to Start</p>
        </div>
      )}

      {isGameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Your Score: {score}</p>
          <p>High Score: {highScore}</p>
          <button onClick={startGame}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default Game;