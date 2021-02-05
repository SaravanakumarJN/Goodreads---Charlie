import React from 'react'
import styles from "./CurrentlyReading.module.css"
import {Button} from "@material-ui/core"


const CurrentlyReading = ({title, image, author}) => {
    return (
        <div className={styles.currently_reading_card}>
            <div className={styles.currently_reading_card_img}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.currently_reading_card_content}>
                <h4>{title}</h4>
                <p>by {author}</p>
                <Button variant="outlined" color="default" size="small">
                    Update Progress
                </Button>
            </div>
        </div>
    )
}

export {CurrentlyReading}
