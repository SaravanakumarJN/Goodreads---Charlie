import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Box}>
          <br />
          <br />
          <br />
          <p style={{ fontSize: "18px", color: "#767676" }}>COMPANY</p>
          <br />
          <p>About us</p>
          <p>Careers</p>
          <p>Terms</p>
          <p>Privicy</p>
          <p>Ad Preference</p>
          <p>Help</p>
        </div>
        <div className={styles.Box}>
          <br />
          <br />
          <br />
          <p style={{ fontSize: "18px", color: "#767676" }}>WORK WITH US</p>
          <br />
          <p>Authors</p>
          <p>Advertise</p>
          <p>Authors & ads blog</p>
          <p>api</p>
        </div>
        <div className={styles.Box}>
          <br />
          <br />
          <br />
          <p style={{ fontSize: "18px", color: "#767676" }}>CONNECT</p>
          <br />
          <a href="https://www.goodreads.com/amazon">connect with amazon</a>
        </div>
        <div className={styles.Box}>
            <br/>
            <br/>
            <br/>
            <img src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" alt="alt"/>
            <img src="https://s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png" alt="alt"/>
            <p>© 2021 Goodreads, Inc.</p>
            <p>Mobile version</p>
        </div>
      </div>
    </>
  );
};
