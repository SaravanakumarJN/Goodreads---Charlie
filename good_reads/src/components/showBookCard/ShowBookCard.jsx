import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import styles from './ShowBookCard.module.css'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { bookSearchPerformerByID } from '../../redux/search/action';
import { useParams } from 'react-router-dom';

const ShowBookCard = () => {
    const {bookId} = useParams()
    const dispatch = useDispatch()
    const {selectedBook} = useSelector(state => state.book, shallowEqual)

    React.useEffect(() => {
        dispatch(bookSearchPerformerByID(bookId))
    }, [selectedBook])

    if(selectedBook !== null){
        const {volumeInfo} = selectedBook
        const {title, authors, description, publisher, publishedDate, pageCount, averageRating, ratingsCount, imageLinks, infoLink} = volumeInfo
        const src = imageLinks === "undefined" ? "https://via.placeholder.com/150x220.png?text=No+image" : imageLinks.smallThumbnail

        const handlePage = () => {
            window.open(infoLink, "_blank")
        }

        return (
            <div className = {styles.container}>
                <div className = {styles.left}>
                    <img src = {src} alt = "img"></img>
                </div>
                <div className = {styles.right}>
                    <h2>{title}</h2>
                    <div>by {authors?.map((item, i) => <strong key = {i}>{item}</strong>)}</div>
                    <div>{averageRating || 0} Rating details ▪ {ratingsCount || "No ratings"}</div>
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"more"}
                        readLessText={"(less)"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {description}
                    </ReactReadMoreReadLess>
                    <div>{pageCount} pages</div>
                    <div>
                        <button onClick = {handlePage}>Get Book</button>
                    </div>
                    <div>{`Published ${publishedDate} by ${publisher}`}</div>
                </div>
            </div>
        )
    }
    return null
}

export {ShowBookCard}
