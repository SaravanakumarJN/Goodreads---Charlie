import React from 'react'
import styles from "./WantToRead.module.css"


const WantToRead = ({image}) => {
    return (
        <div className={styles.want_to_read}>
            <div>
                <img src={image} className={styles.center_cropped} />
            </div>
        </div>
    )
}

export {WantToRead}
