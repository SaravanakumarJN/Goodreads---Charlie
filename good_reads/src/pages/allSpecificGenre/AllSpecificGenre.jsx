import React from 'react'
import styles from './AllSpecificGenre.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {ShelfBookCard} from '../../components/shelfBookCard/ShelfBookCard'
import { genreSearchPerformer } from '../../redux/genres/action'

const AllSpecificGenre = () => {
    const genreItems = useSelector(state => state.genre.genreItems)
    const {genreType} = useParams()
    const dispatch = useDispatch()
    let endpoint = genreType.replace(/%20/g, " ")

    React.useEffect(() => {
        dispatch(genreSearchPerformer(endpoint))
    }, [])

    return (
        <div className = {styles.container}>
            <h3>{endpoint.toUpperCase()} BOOKS</h3>
            {
                genreItems?.map((item) => {
                    return(
                        <ShelfBookCard
                            key = {item.id}
                            item = {item}
                        ></ShelfBookCard>
                    )
                })
            }
        </div>
    )
}

export {AllSpecificGenre}
