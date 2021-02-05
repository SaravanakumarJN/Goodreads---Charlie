import React from 'react'
import styles from './ShelfBookCard.module.css'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setSelectedBook } from '../../redux/genres/action'
import { ReadButton } from '../readButton/ReadButton'

const ShelfBookCard = ({item}) => {
    const {volumeInfo, id} = item
    const {title, authors, averageRating, categories,ratingsCount, imageLinks, publishedDate } = volumeInfo
    const src = imageLinks === undefined ? "https://via.placeholder.com/60x100.png?text=No+image" : imageLinks.smallThumbnail
    const history = useHistory()
    const dispatch = useDispatch()

    const handlePage = () => {
        dispatch(setSelectedBook(id))
        history.push(`/book/show/${id}`)
    }

    return (
        <div className = {styles.card}>
            <div className = {styles.left}>
                <img src = {src} alt = "img"></img>
            </div>
            <div className = {styles.middle}>
                <h3 onClick = {handlePage}>{title}</h3>
                <div className = {styles.grey}>
                    <strong>by {authors?.map((item, i) => <span key = {i}>{item}</span>)}{" "}</strong> 
                    ({categories?.map((item, i) => <span key = {i}>{item}</span>)})
                </div>
                <div className = {styles.grey}>
                    {`Avg rating ${averageRating || 0} - ${ratingsCount || 0} ratings - published ${publishedDate}`}
                </div>
            </div>
            <div className = {styles.right}>
                <ReadButton selectedBook = {item} ></ReadButton>
            </div>
        </div>
    )
}

export {ShelfBookCard}
