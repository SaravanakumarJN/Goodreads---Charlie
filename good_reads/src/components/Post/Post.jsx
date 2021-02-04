import React from 'react'
import styles from "./Post.module.css"
import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"


const Post = (props) => {

    const {type_of_post, name, image_url, rating, review, likes, comments, id, handleComment} = props;

    const {comment, user, commenterImg} = comments;

    const {authors, title, description} = props.book_data.volumeInfo;

    const commentObj = {
        id: 99,
        user: "John Doe",
        comment: "Added comment",
        commenterImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.q85HUE21WMuwJaks82FqdAHaHW%26pid%3DApi&f=1"
    }

    let thumbnail;
    "imageLinks" in props.book_data.volumeInfo ?  thumbnail = props.book_data.volumeInfo.imageLinks.thumbnail : thumbnail = "https://via.placeholder.com/140x200"

    console.log(props);

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
                        <h3>{title}</h3>
                        <p>by {authors[0]}</p>
                        <button>Want to Read</button>
                        <p>{description}</p>
                        {/* <Link to="#">... Continue reading</Link> */}
                    </div>
                </div>
                <div className={styles.like_comment}>
                    <button>{likes !== 0 ? likes : 0} - Likes</button><span> . </span>
                    <button>{comments.length !== 0 ? comments.length : 0} - Comments</button>
                </div>
            </div>
            <div className={styles.post__bottom}>
                <div style={{borderBottom : "1px solid #D8D8D8"}}>
                    {
                        comments?.map(item => 
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
                <div>
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Write a comment..."/>
                </div>
                <button onClick={() =>  handleComment(id, commentObj)}>Comment</button>
            </div>
        </div>
        // <div className={styles.post}>
        //     <div className={styles.post_profile}>
        //         <i class="fas fa-user"></i>
        //     </div>
        //     <div className={styles.post__cont}>
        //         <div className={styles.post__top}>
        //             <p className={styles.name_action}><b>Mandar Satam</b> has reviewed</p>
        //             <p>Rating:</p>
        //             <Rating name="read-only" value="3" readOnly />
        //             <p>Whatever the review is. Lorem ipsum golem lavda lasun</p>
        //             {/* <p className={styles.time_stamp}>Just Now</p> */}
        //         </div>
        //         <div className={styles.post__main}>
        //             <div>
        //                 <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420i/11870085._SY180_.jpg"/>
        //             </div>
        //             <div className={styles.main__content}>
        //                 <h3>The Fault in Our Stars</h3>
        //                 <p>by John Green</p>
        //                 <button>Want to Read</button>
        //                 <p>Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a…Continue reading</p>
        //             </div>
        //         </div>
        //         <div className={styles.like_comment}>
        //             <button>Like</button><span> . </span>
        //             <button>Comment</button>
        //         </div>
        //     </div>
        //     <div className={styles.post__bottom}>
        //         <i class="fas fa-user"></i>
        //         <input type="text" placeholder="Write a comment..."/>
        //     </div>
        // </div>
    )
}

export {Post}
