import React from 'react'
import styles from "./WantToRead.module.css"


const WantToRead = ({image}) => {
    return ( 
        <div className={styles.image}>
            <img src={image} className={styles.center_cropped} />
        </div>
    
    )
}

export {WantToRead}
