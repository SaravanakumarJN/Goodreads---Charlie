import React from 'react'
import styles from './AllSearch.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import {ShelfBookCard} from '../../components/shelfBookCard/ShelfBookCard'
import { bookSearchPerformer } from '../../redux/search/action'

const AllSearch = () => {
    const searchItems = useSelector(state => state.book.searchItems)
    const {query} = useParams()
    const dispatch = useDispatch()
    let endpoint = query.replace(/%20/g, " ")

    React.useEffect(() => {
        dispatch(bookSearchPerformer(endpoint))
    }, [])

    return (
        <div className = {styles.container}>
            <h3>{endpoint.toUpperCase()} BOOKS</h3>
            {
                searchItems?.map((item) => {
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

export {AllSearch}
