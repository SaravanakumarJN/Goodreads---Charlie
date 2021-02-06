import React from 'react'
import styles from "./PostStyle.module.css"
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { updatePosts } from '../../redux/Post/action';
import {v4 as uuid} from "uuid"
import {ReadButton} from "../readButton/ReadButton"
import ReactReadMoreReadLess from "react-read-more-read-less";


const Post = (props) => {

    const {type_of_post, name, image_url, rating, review, likes, comments, id} = props;
    const {authors, title, description} = props.book_data.volumeInfo;

    const [commentInput, setCommentInput] = React.useState("")
    const [commentData, setCommentData] = React.useState([])
    const [likesData, setLikesData] = React.useState(0);

    const dispatch = useDispatch()

    React.useEffect(() => {
        setCommentData(comments);
        setLikesData(likes)
    }, [])

    const currUserProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasBNP1Wz6ilTqpSe5av3iyqJhSqp44fkKeg&usqp=CAU"
    const currentUser ="Gokhu";

    const commentObj = {
        id: uuid(),
        user: currentUser,
        comment: commentInput,
        commenterImg: currUserProfile
    }

    const handleComment = (id, e) => {
        e.preventDefault();
        dispatch(updatePosts(id, commentObj))
        setCommentInput("");
        setCommentData([...commentData, commentObj])
    }

    const handleLike = (id) => {
        dispatch(updatePosts(id, null))
        let tempLikes = likesData;
        tempLikes++;
        setLikesData(tempLikes)
    }

    const ref = React.useRef()

    const handleFocus = () => {
        ref.current.focus()
    }

    let thumbnail;
    "imageLinks" in props.book_data.volumeInfo ?  thumbnail = props.book_data.volumeInfo.imageLinks.thumbnail : thumbnail = "https://via.placeholder.com/140x200"

    return (
        <div className={styles.post}>
            <div className={styles.post_profile}>
                <img src={image_url}/>
            </div>
            <div className={styles.post__cont}>
                <div className={styles.post__top}>
                    <p className={styles.name_action}><b>{name}</b>{
                        type_of_post === "read"? " has read ": type_of_post === "reading" ? " is reading" : type_of_post === "wantToRead" ? " wants to read" : type_of_post === "rating" ? " has rated" : type_of_post === "review" ? " has reviewed" : ""
                    }</p>
                    {
                        rating !== "" && 
                        <>
                        <p>Rating:</p>
                        <Rating name="read-only" value={rating} readOnly />
                        </>
                    }
                    {
                        review !== "" && 
                        <p>{review}</p>
                    }
                    {/* <p className={styles.time_stamp}>Just Now</p> */}
                </div>
                <div className={styles.post__main}>
                    <div>
                        <img src={thumbnail}/>
                    </div>
                    <div className={styles.main__content}>
                        <h3 style={{marginBottom:"10px"}}>{title}</h3>
                        <p>by {authors[0]}</p>
                        {/* <ReadButton/> */}
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
                </div>
                <div className={styles.like_comment}>
                    <button onClick={() => handleLike(id)}>{likesData !== 0 ? likesData : 0} - Likes</button><span> . </span>
                    <button onClick={() => handleFocus(id)}>{comments.length !== 0 ? comments.length : 0} - Comments</button>
                </div>
            </div>
            <div className={styles.post__bottom}>
                <div style={{borderBottom : "1px solid #D8D8D8"}}>
                    {
                        commentData?.map(item => 
                            <>
                            <div className={styles.comment_user}>
                                <div className={styles.comment_user_profile}>
                                    <img src={item.commenterImg}/>
                                </div>
                                <div className={styles.comment_comment}>
                                    <p><b>{item.user}</b></p>
                                    <p>{item.comment}</p>
                                </div>                           
                            </div>
                            </>
                        )
                    }
                
                </div>
                <div className={styles.current_comment}>
                    <div className={styles.comment_current_profile}>
                        <img src={currUserProfile}/>
                    </div>
                    <div className={styles.comment_current_input}>
                        <form onSubmit={(e) => handleComment(id , e)}>
                            <input type="text" ref={ref} placeholder="Write a comment..." onChange={e => setCommentInput(e.target.value)}/>
                        </form>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export {Post}
