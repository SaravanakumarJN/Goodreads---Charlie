import React from 'react'
import styles from "./MyBooksCard.module.css"
import Rating from '@material-ui/lab/Rating';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';


const MyBooksCard = (props) => {
    let thumbnail;
    "imageLinks" in props.volumeInfo ?  thumbnail = props.volumeInfo.imageLinks.thumbnail : thumbnail = "https://via.placeholder.com/140x200"
    const {title, authors, description, averageRating, ratingsCount, publishedDate} = props.volumeInfo;

    const [rating, setRating] = React.useState(2);
    return (
        <div className={styles.card__cont}>
            <img src={thumbnail} alt=""/>
            <div className={styles.img__popup}>
                <h4><b>{title}</b></h4>
                <h4>by {authors[0]}</h4>
                <p>{averageRating} avg rating - {ratingsCount} ratings - published {publishedDate.slice(0, 4)}</p>
                <p>{description}</p>
                {/* <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="want-to-read">
                        <em>Want to Read</em>
                    </MenuItem>
                    <MenuItem value="currently-reading">Currently Reading</MenuItem>
                    <MenuItem value="read">Read</MenuItem>
                </Select> */}
                <select name="bookshelfActions">
                    <option value="want-to-read">Want to Read</option>
                    <option value="currently-reading">Currently Reading</option>
                    <option value="read">Read</option>
                </select>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}

export {MyBooksCard}
