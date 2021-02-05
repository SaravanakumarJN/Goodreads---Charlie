import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import styles from './ShowBookCard.module.css'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { bookSearchPerformerByID } from '../../redux/search/action';
import { useParams } from 'react-router-dom';
import {GoGraph} from 'react-icons/go'
import StarRatings from 'react-star-ratings';
import { ReadButton } from '../readButton/ReadButton'

const ShowBookCard = () => {
    const {bookId} = useParams()
    const dispatch = useDispatch()
    const {selectedBook} = useSelector(state => state.book, shallowEqual)

    React.useEffect(() => {
        dispatch(bookSearchPerformerByID(bookId))
    }, [bookId])

    if(selectedBook !== null){
        const {volumeInfo} = selectedBook
        const {title, authors, description, publisher, publishedDate, pageCount, averageRating, ratingsCount, imageLinks, infoLink} = volumeInfo
        const src = imageLinks === undefined ? "https://via.placeholder.com/150x220.png?text=No+image" : imageLinks.smallThumbnail

        const handlePage = () => {
            window.open(infoLink, "_blank")
        }

        return (
            <div className = {styles.container}>
                <div className = {styles.left}>
                    <img src = {src} alt = "img"></img>
                    <ReadButton selectedBook = {selectedBook}></ReadButton>
                </div>
                <div className = {styles.right}>
                    <h2>{title}</h2>
                    <strong>by {authors?.map((item, i) => <span key = {i}>{item}</span>)}</strong>
                    <div className = {styles.rating}>
                        <StarRatings
                            rating={averageRating || 0}
                            starDimension="14px"
                            starSpacing="1px"
                            starRatedColor="#FA604A"
                        />
                        {` ${averageRating || 0}`} ▪ <GoGraph className = {styles.icon}></GoGraph> Rating details ▪ {ratingsCount || "No ratings"} ratings
                    </div>
                    <div  className = {styles.description}>
                        <ReactReadMoreReadLess
                            charLimit={200}
                            readMoreText={"more"}
                            readLessText={"(less)"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                        >
                            {description}
                        </ReactReadMoreReadLess>
                    </div>
                    <div className = {styles.getBook}>
                        <h5>GET A BOOK</h5>
                        <button onClick = {handlePage}>Google Books</button>
                    </div>
                    <div className = {styles.moreDetails}>
                        <div>{pageCount} pages</div>
                        <div>{`Published ${publishedDate} by ${publisher}`}</div>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export {ShowBookCard}
