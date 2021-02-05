import React from 'react'
import styles from "./CurrentlyReading.module.css"
import {Button} from "@material-ui/core"


const CurrentlyReading = () => {
    return (
        <div className={styles.currently_reading_card}>
            <div className={styles.currently_reading_card_img}>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590._SY180_.jpg" alt=""/>
            </div>
            <div className={styles.currently_reading_card_content}>
                <h4>The Alchemist</h4>
                <p>by Paulo Coelho</p>
                <Button variant="outlined" color="default" size="small">
                    Update Progress
                </Button>
            </div>
        </div>
    )
}

export {CurrentlyReading}
