import React from 'react';
import styles from './departments.module.css';
import { DiJavascript } from "react-icons/di";
import { MdHome } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi"
import { BsRobot } from "react-icons/bs";
import { PiFrameCorners } from "react-icons/pi";
import { GiLaurelsTrophy } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import vyas from '../../assets/home/vyas.jpg';
import bgdt from '../../assets/home/bgdt.png'
import { MdOutlineWbIncandescent } from "react-icons/md";
import { RiSparkling2Line } from "react-icons/ri";
import { ImTv } from "react-icons/im";
import { RxLightningBolt } from "react-icons/rx";
import { IoIosConstruct } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import Footer from '../../components/footer/footer.jsx';

const Departments = () => {

  const bgHaiJi = {
    backgroundImage: `url(${bgdt})`, // Dark overlay + background image
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

  return (<>
    <div className={styles.container} style={bgHaiJi}>
      <div className={styles.Heading}>
        <h1 style={{fontFamily:'Montserrat',fontWeight:'700'}}>DEPARTMENTS</h1>
      </div>
       <div className={styles.card}>
        <div className={styles.dept}>
          <h1><DiJavascript className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Web Department</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>The Web Department at Techfest develops and maintains all the websites, ensuring seamless user experience and dynamic content to effectively communicate event details and updates</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Divyanshu Sahu</li>
        </div>
       </div>
       
       <div className={styles.card}>
        <div className={styles.dept}>
          <h1><RiSparkling2Line className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Creatives</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>The Creatives team at Techfest designs visually engaging graphics and promotional materials, enhancing the event's identity and capturing the audience's attention through innovative visual storytelling</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Jaskaran Singh</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><GiMoneyStack className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Marketing</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Our dynamic marketing strategies encompass impactful collaborations with leading companies, strategic corporate sponsorships, and innovative brand partnerships that elevate the Techfest experience.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Sanjay Motwani</li>
            <li>Armaan Khatri</li>
        </div>
      </div><div className={styles.card}>
        <div className={styles.dept}>
          <h1><MdHome className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Hospitality</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Techfest IIT Bombay's hospitality ensures a seamless experience for guests, providing top-notch services, accommodation, and support for participants, speakers, and dignitaries.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Himanshu Tanania</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><BsRobot className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Robowars</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Robowars at Techfest IIT Bombay brings the ultimate showdown of combat robots, where cutting-edge engineering and fierce competition collide in thrilling, high-intensity battles.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Ishan Patni</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><ImVideoCamera className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Media</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Media at Techfest IIT Bombay amplifies the festival’s impact by partnering with news outlets to share groundbreaking events, innovations, and performances with a global audience.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Aaditya Patil</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><FaChalkboardTeacher className={styles.img} /> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Lectures</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Lectures at Techfest IIT Bombay feature renowned experts sharing insights on cutting-edge innovations, inspiring audiences with their experiences and breakthroughs</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Divyansh Ranjan</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><MdOutlineWbIncandescent className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Ozone</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Ozone at Techfest IIT Bombay features an exciting array of activities, including fire rings, freestyle performances, and various engaging experiences, all while maintaining a vibrant atmosphere</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Ayush Bangar</li>
            <li>Ankit Raj</li>
        </div>
      </div><div className={styles.card}>
        <div className={styles.dept}>
          <h1><ImTv className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Publicity</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Publicity at Techfest IIT Bombay showcases innovative promotional strategies, creating buzz and engaging audiences through various channels to enhance event visibility</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Vicky Yadav</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><GiLaurelsTrophy className={styles.img} /> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Competitions</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Techfest IIT Bombay hosts national and international competitions in robotics, coding, and innovation, offering participants a platform to showcase skills and solve real-world challenges.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Rishabh Bharadwaj</li>
            <li>Basil Faruqui</li>
            <li>Mrutyunjaya Sahu</li>
        </div>
       </div>
       <div className={styles.card}>
        <div className={styles.dept}>
          <h1><PiFrameCorners className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Exhibitions</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Techfest IIT Bombay hosts international exhibitions, where innovators and organizations display advanced technologies, fostering learning and collaboration in science and engineering</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Aleem Rayeen</li>
            <li>Tarun Kumar</li>
            <li>Utkarsh Jain</li>
        </div>
       </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><IoIosConstruct className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Infrastructure</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>The Infrastructure team at Techfest IIT Bombay facilitates smooth event execution by managing logistics, setting up venues, and maintaining facilities for participants and attendees</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Akash Joshi</li>
            <li>Aditya Vyas</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><RxLightningBolt className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Technoholix</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>The ultimate fusion of glamour and technology featuring EDM nights, laser shows, acrobatics, and 3D holographic displays, concluding Asia's largest Sci-Tech festival with unforgettable entertainment.</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Hardik Gupta</li>
            <li>Monank Vijayvargiya</li>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.dept}>
          <h1><IoFastFood className={styles.img}/> </h1>
          <h2 style={{color:"1E262A",fontFamily:'Montserrat'}}>Food & Beverages</h2>
          <div className={styles.line}></div>
          <p style={{padding:'10px'}}>Our team offers a variety of nourishing options to keep participants energized, catering to all dietary preferences during the technical fest</p>
        </div>
        <div className={styles.managers}>
          <h2>Know your Manager</h2>
            <li>Akshit Singhal</li>
        </div>
      </div>
      <Footer />
    </div>
  </>
  )
}

export default Departments