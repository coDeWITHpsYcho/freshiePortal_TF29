import React from 'react'
import styles from './testimonials.module.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.png'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import Footer from '../../components/footer/footer.jsx'
import vyas from '../../assets/home/vyas.jpg'
import bgdt from '../../assets/home/bgdt.png'


const Testimonials = () => {
    const bgHaiJi = {
        backgroundImage: `url(${bgdt})`, // Dark overlay + background image
          // backgroundColor: "lightblue",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          // backgroundColor:'#e3e3ed',
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-1",
          backgroundAttachment: "fixed",
          // Filter:'grayscale(400%)',
          
      };
    return (
        <>
        <div className={styles.container} style={bgHaiJi} >
            <div className={styles.track}>
                <div className={styles.content}>
                    <img src={img1} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Vedant Abhangrao</h3>
                        <p>The journey of Techfest was filled with learning, growth, and unforgettable experiences! Organising and managing workshops. If you're ready for a laugh and a lesson or two, buckle up and join this wild ride through the Techfest universe!
                        </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <img src={img2} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Atharva Lele</h3>
                        <p>My experience in Techfest was an invaluable one. I honed my communication and leadership skills by interacting with everyone. This role also fostered my professional development by introducing me to event management and public relations.
                        </p>
                    </div>
                </div><div className={styles.content}>
                    <img src={img3} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Ganesh Chandan</h3>
                        <p>Being a Techfest team member was transformative. It bolstered my professional skills in communication, public speaking, and social media marketing. Most importantly, Techfest fostered a passion for innovation through collaboration with like-minded peers.
                        </p>
                    </div>
                </div><div className={styles.content}>
                    <img src={img4} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Vishwajeet Natu</h3>
                        <p>As a part of Techfest team, I gained great skills in communication, event management and networking. Additionally, representing Techfest allowed me to interact with a different audience and learn from their perspectives, which helps my personal development.
                        </p>
                    </div>
                </div><div className={styles.content}>
                    <img src={img5} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Arnav Kumar</h3>
                        <p>It was an overwhelming experience with lots of learning, networking and working with like-minded people. It boosted my never- give-up attitude and taught me to manage side commitments alongside academics. My sincere thanks to my mentor and the whole Techfest Team.
                        </p>
                    </div>
                </div><div className={styles.content}>
                    <img src={img6} alt="" />
                    <div className={styles.imgcontent}>
                        <h3>Aditya Raj Ji Chauhan</h3>
                        <p>As a team member of Techfest, I gained great skills in communication, event management and networking. Additionally, representing Techfest allows me to interact with a different audience and learn from their perspectives, which helps my personal development.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
            <Footer/>
            </div>
            
        </div>
        </>
    )
}

export default Testimonials
