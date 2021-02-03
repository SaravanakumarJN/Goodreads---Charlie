import React from 'react'
import styles from './Search.module.css'
import {FaSearch} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { bookSearchPerformer } from '../../redux/search/action'
import { SearchResultCard } from '../searchResultCard/SearchResultCard'
import {useHistory} from 'react-router-dom'

const Search = () => {
    const [query, setQuery] = React.useState("")
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state.book.searchItems)
    const history = useHistory()
    
    const handleQuery = (e) => {
        const {value} = e.target 
        setQuery(value)

        if(value !== ""){
            dispatch(bookSearchPerformer(value))
        }
    }

    const handleResultsPage = () => {
        history.push(`/search/${query}`)
        setQuery("")
    }

    return (
        <div className = {styles.container}>
            <span className = {styles.inputLabel}>
                <input
                    type = "text"
                    value = {query}
                    onChange = {(e) => handleQuery(e)}
                    placeholder = "Search books"
                ></input>
                <FaSearch className = {styles.icon} onClick = {handleResultsPage}/>
            </span>
            {
                query === "" 
                ? null
                : searchResults.length === 0
                ? <div className = {styles.results}>
                    <h5>No search results</h5>
                </div>
                : <div className = {styles.results}>
                    {
                        searchResults?.map((item, i) => {
                            const {title, authors, imageLinks} = item.volumeInfo
                            const src = imageLinks === undefined ? "https://via.placeholder.com/60x55.png?text=No+image" : imageLinks.smallThumbnail
                            if(i < 5){
                                return(
                                    <SearchResultCard
                                        key = {item.id}
                                        id = {item.id}
                                        src = {src}
                                        title = {title}
                                        authors = {authors}
                                        handleQuery = {setQuery}
                                    ></SearchResultCard>
                                )
                            }
                            else{
                                return null
                            }
                        })
                    }
                    <div 
                        className = {styles.bottom}
                        onClick = {handleResultsPage}
                    >
                        See all results for "{query}"
                    </div>
                </div>
            }
        </div>
    )
}

export {Search}
