import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { genreSearchPerformer} from '../../redux/genres/action'
import styles from './SpecificGenre.module.css'

const SpecificGenre = () => {
    const {genreItems} = useSelector(state => state.genre, shallowEqual)
    const {type} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
        dispatch(genreSearchPerformer(type))
    }, [])

    const handleBook = (bookId) => {
        history.push(`/book/show/${bookId}`)
    }

    return (
        <div className = {styles.container}>
            <h3>{type.toUpperCase()} BOOKS</h3>
            <div className = {styles.bookContainer}>
                {
                    genreItems?.map((item, i) => {
                        if(i < 15){
                            const {imageLinks, title} = item.volumeInfo
                            const src = imageLinks === undefined ? "https://via.placeholder.com/110x180.png?text=No+image" : imageLinks.smallThumbnail
                            return(
                                <img
                                    onClick = {() => handleBook(item.id)}
                                    key = {item.id}
                                    className = {styles.img}
                                    src =  {src}
                                    alt = {title}
                                ></img>
                            )
                        }
                        else{
                            return null
                        } 
                    })
                }
                {
                    genreItems?.length > 15 
                    ? <div>
                        <Link to = {`/shelf/show/${type}`}>{`More ${type} books`}</Link>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export {SpecificGenre}



