import React from 'react'
import styles from './Genres.module.css'
// import { genreRequestPerformer } from '../../redux/genres/action'
// import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Genres = () => {
    const [query, setQuery] = React.useState("")
    // const dispatch = useDispatch()
    const history = useHistory()

    const handleFind = () => {
        history.push(`/genre/${query}`)
    }

    return (
        <div className = {styles.container}>
            <h2>Genres</h2>
            <div className = {styles.inputField}>
                <input
                    type = "text"
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    placeholder = "Find a genre by name"
                >
                </input>
                <br/>
                <button
                    onClick = {handleFind}
                >
                    Find Genre
                </button>
            </div>
        </div>
    )
}

export {Genres}
