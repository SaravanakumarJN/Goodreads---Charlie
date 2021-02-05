import React from 'react'
import { Post } from '../../components/Post/Post'
import styles from "./Home.module.css"
import {useSelector, useDispatch} from "react-redux"
import { updatePosts } from '../../redux/Post/action';
import { getPosts } from '../../redux/Post/action'


const Home = () => {

    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    React.useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch])

    const handleComment = (id, commentObj) => {
        dispatch(updatePosts(id, commentObj))
    }

    console.log(posts);

    return (
        <div className={styles.home__cont}>
            <div className={styles.home__left}>
                <h3>Currently Reading</h3>
            </div>
            <div className={styles.home__mid}>
                <h3>Updates</h3>
                {
                    posts[0]?.map(item => 
                        <Post {...item} key={item.id} handleComment={handleComment}/>
                        )
                }
            </div>
            <div className={styles.home__right}>
                <h3>News and Interviews</h3>
            </div>
        </div>
    )
}

export {Home}
