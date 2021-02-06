import React from 'react'
import styles from "./MyBooksCard.module.css"
import Rating from '@material-ui/lab/Rating';
import {ReadButton} from "../readButton/ReadButton"
import ReactReadMoreReadLess from "react-read-more-read-less";
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';


const MyBooksCard = (props) => {
    let thumbnail;
    "imageLinks" in props.volumeInfo ?  thumbnail = props.volumeInfo.imageLinks.thumbnail : thumbnail = "https://via.placeholder.com/140x200"
    const {title, authors, description, averageRating, ratingsCount, publishedDate} = props.volumeInfo;

    const [rating, setRating] = React.useState(averageRating);
    return (
        <div className={styles.card__cont}>
            <img src={thumbnail} alt=""/>
            <div className={styles.img__popup}>
                <h4><b>{title}</b></h4>
                <h4 className={styles.author_name}>by {authors[0]}</h4>
                <Rating
                    name="read-only"
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                />
                <p className={styles.rating_text}>{averageRating} avg rating -- {ratingsCount} ratings -- published {publishedDate.slice(0, 4)}</p>
                <p>
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"more"}
                        readLessText={"(less)"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {description!== undefined ? description : "No Description"}
                    </ReactReadMoreReadLess>
                </p>
                <ReadButton selectedBook={props}/>
                
            </div>
        </div>
    )
}

export {MyBooksCard}
