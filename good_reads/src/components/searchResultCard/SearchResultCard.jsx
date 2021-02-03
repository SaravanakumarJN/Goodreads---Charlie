import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './SearchResultCard.module.css'

const SearchResultCard = ({src, title, authors, id, handleQuery}) => {
    const history = useHistory()

    const handlePage = () => {
        history.push(`/book/show/${id}`)
        handleQuery("")
    }
    
    return (
        <div 
            className = {styles.card}
            onClick = {handlePage}
        >
            <div className = {styles.left}>
                <img src = {src} alt = "img"></img>
            </div>
            <div className = {styles.right}>
                <h5>{title}</h5>
                {
                    authors !== undefined
                    ?  <div>
                        by {authors?.map((item, i) => <span key = {i}>{item}</span>)}
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export {SearchResultCard}
