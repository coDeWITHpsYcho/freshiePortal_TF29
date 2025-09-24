import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './home.module.css';
import vyas from '../../assets/home/vyas.jpg';
import BG from '../../assets/home/BG.JPG';
import Footer from '../../components/footer/footer';

const Home = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     console.log(scrollY);

  //     const heading = document.getElementById("heading");
  //     heading.style.transform = `translateX(${-scrollY}%)`
  //   }
  //   window.addEventListener("scroll",handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // },[])
  const {ref: active1, inView : active1Visible} = useInView();
  const {ref: active2, inView : active2Visible} = useInView();
  const {ref: active3, inView : active3Visible} = useInView();

  const bgHaiJi = {
    backgroundImage: `url(${BG})`, // Dark overlay + background image
      // backgroundColor: "lightblue",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      // backgroundColor:'#e3e3ed',
      width: "100vw",
      position: "absolute",
      top: "0",
      zIndex: "-1",
      backgroundAttachment: "fixed",
      // Filter:'grayscale(400%)',
      
  };

  return (
    <div className={styles.home} style={bgHaiJi}>
    <div className={styles.container}>
    <div className={styles.section1}ref={active1}>
        <div className={`${styles.heading1} ${active1Visible ? styles.active1 : " "}`} id="heading">Techfest's Freshers Portal</div>
        <div className={`${styles.description1} ${active1Visible ? styles.active1 : " "}`} >This platform is your gateway to Techfest, designed for freshers to connect with coordinators, explore interests, and join the vibrant community. Discover departments like exhibitions, competitions, and lectures, or enjoy fun at Ozone and TechX. Whether you're into tech, music, or meeting new people, this portal is your starting point for an unforgettable Techfest journey!</div>
        <div className={styles.int}></div>
      </div>
      <div className={styles.section2}ref={active2} >
        <div className={`${styles.heading2} ${active2Visible ? styles.active2 : " "}`}>
          Why Techfest?
        </div>
        <div className={`${styles.description2} ${active2Visible ? styles.active2 : " "}`}>
        Techfest IIT Bombay is a transformative experience and Asia's largest science and tech festival. It's your chance to hone skills, network with industry leaders, and gain global exposure. Meet peers and professionals from around the world, enjoy Ozone activities, and witness electrifying TechX performances. Whether you're passionate about tech, innovation, or making connections, Techfest opens doors to endless possibilities. Join us and be part of something extraordinary!
        </div>
      </div>
      <div className={styles.section3} ref={active3}>
        <div className={`${styles.heading3} ${active3Visible ? styles.active3 : " "}`}>
          Pre-requisites
        </div>
        <div className={`${styles.description3} ${active3Visible ? styles.active3 : " "}`}>
        Bring your passion, curiosity, and bold spirit to Techfest! It’s all about pushing boundaries, embracing challenges, and stepping out of your comfort zone. Whether you're a tech expert or just eager to learn, all you need is the courage to explore. Get ready to innovate, connect, and create lasting memories. Techfest is calling—gear up and shine!        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home