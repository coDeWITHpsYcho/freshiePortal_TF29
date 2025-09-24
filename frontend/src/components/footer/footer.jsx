// import React from 'react'
// import styles from './footer.module.css';

// import fb from "./social media/fb1.png";
// import insta from "./social media/insta1.png";
// import linkedin from "./social media/linkedin1.png";
// import x from "./social media/x1.png";
// import yt from "./social media/yt1.png";
// import arrow from './social media/arrow-right-long-solid.svg';
import fb1 from "./social media/fb_blue.png";
import insta1 from "./social media/insta_blue.png";
import yt1 from "./social media/yt_blue.png";
import x1 from "./social media/X_blue.png";
import linkedin1 from './social media/linkedin_blue.png';

// const Footer = () => {

//     return(
//         <div className={styles.Footer}>
//             {/* <div className={styles.footerLeft}> */}
//               {/* <div className={styles.footerText}>Where can you find us?</div> */}
//               {/* <img src={arrow} className={styles.arrow}></img> */}
//             {/* </div> */}
//             <div className={styles.socialMedia}>
//               <div className={styles.footerText}>Where can you find us?</div>
//               <img src={arrow} className={styles.arrow}></img>
//               <a className={styles.Insta} href="https://www.instagram.com/techfest_iitbombay/?hl=en">
//                 <img className={styles.icon} src={insta} alt='' />
//               </a>
//               <a className={styles.Fb} href="https://www.facebook.com/iitbombaytechfest/">
//                 <img src={fb} className={styles.icon} alt=''></img>
//               </a>
//               <a className={styles.Twitter} href="https://twitter.com/Techfest_IITB">
//                 <img src={x} className={styles.icon} alt=''></img>
//               </a>
//               <a className={styles.YT} href="https://www.youtube.com/user/techfestiitbombay">
//                 <img src={yt} className={styles.icon} alt='' ></img>
//               </a>
//               <a className={styles.Linkedin} href="https://in.linkedin.com/company/techfest">
//                 <img src={linkedin} className={styles.icon} alt=''></img>
//               </a>
//             </div>
//         </div>
//     )
// }

// export default Footer



import React, { useState, useEffect, useRef } from 'react';
import styles from './footer.module.css';

import fb from "./social media/fb1.png";
import insta from "./social media/insta1.png";
import linkedin from "./social media/linkedin1.png";
import x from "./social media/x1.png";
import yt from "./social media/yt1.png";
import arrow from './social media/arrow.svg';

const Footer = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null); // Track which icon is being hovered by the arrow
    const arrowRef = useRef(null);
    const iconsRef = useRef([]);

    useEffect(() => {
        const moveArrow = () => {
            let arrowEl = arrowRef.current;
            let iconElements = iconsRef.current;

            if (!arrowEl || iconElements.length === 0) return;

            let arrowPosition = arrowEl.getBoundingClientRect();

            iconElements.forEach((iconEl, index) => {
                let iconPosition = iconEl.getBoundingClientRect();

                // Check if the arrow is close enough to the icon
                if (
                    arrowPosition.right >= iconPosition.left - 5 && // Allow some buffer (-5)
                    arrowPosition.left <= iconPosition.right + 5 && // Allow some buffer (+5)
                    arrowPosition.top >= iconPosition.top - 5 && // Allow buffer (-5)
                    arrowPosition.bottom <= iconPosition.bottom + 5 // Allow buffer (+5)
                ) {
                    setHoveredIcon(index); // Highlight the icon when the arrow is over it
                } else if (hoveredIcon === index) {
                    setHoveredIcon(null); // Remove highlight when arrow moves away
                }
            });
        };

        const interval = setInterval(moveArrow, 100); // Move arrow every 100ms
        return () => clearInterval(interval);
    }, [hoveredIcon]);

    return (
        <div className={styles.Footer}>
            <div className={styles.socialMedia}>
                <div className={styles.footerText}>Follow us at</div>
                <img ref={arrowRef} src={arrow} className={styles.arrow} alt="arrow" />
                <a className={`${styles.Insta} ${hoveredIcon === 0 ? styles.hovered : ''}`} href="https://www.instagram.com/techfest_iitbombay/?hl=en" ref={el => (iconsRef.current[0] = el)}>
                    <img className={styles.icon} src={`${hoveredIcon === 0 ? insta1 : insta}`} alt='' />
                </a>
                <a className={`${styles.Fb} ${hoveredIcon === 1 ? styles.hovered : ''}`} href="https://www.facebook.com/iitbombaytechfest/" ref={el => (iconsRef.current[1] = el)}>
                    <img src={`${hoveredIcon === 1 ? fb1 : fb}`} className={styles.icon} alt='' />
                </a>
                <a className={`${styles.Twitter} ${hoveredIcon === 2 ? styles.hovered : ''}`} href="https://twitter.com/Techfest_IITB" ref={el => (iconsRef.current[2] = el)}>
                    <img src={`${hoveredIcon === 2 ? x1 : x}`} className={styles.icon} alt='' />
                </a>
                <a className={`${styles.YT} ${hoveredIcon === 3 ? styles.hovered : ''}`} href="https://www.youtube.com/user/techfestiitbombay" ref={el => (iconsRef.current[3] = el)}>
                    <img src={`${hoveredIcon === 3 ? yt1 : yt}`} className={styles.icon} alt='' />
                </a>
                <a className={`${styles.Linkedin} ${hoveredIcon === 4 ? styles.hovered : ''}`} href="https://in.linkedin.com/company/techfest" ref={el => (iconsRef.current[4] = el)}>
                    <img src={`${hoveredIcon === 4 ? linkedin1 : linkedin}`} className={styles.icon} alt='' />
                </a>
            </div>
        </div>
    );
}

export default Footer;

