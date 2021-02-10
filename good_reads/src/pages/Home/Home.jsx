import React from 'react'
import { Post } from '../../components/Post/Post'
import styles from "./Home.module.css"
import {useSelector, useDispatch, shallowEqual} from "react-redux"
import { updatePosts } from '../../redux/Post/action';
import { getPosts } from '../../redux/Post/action'
import { getBooks } from '../../redux/myBooks/action'
import { Link } from 'react-router-dom';
import { CurrentlyReading } from '../../components/CurrentlyReading/CurrentlyReading';
import { WantToRead } from '../../components/WantToRead/WantToRead';


const Home = () => {

    const posts = useSelector(state => state.posts.posts);
    const {books, wantToRead, currentlyReading, read} = useSelector(state => state.myBooks, shallowEqual)
    const dispatch = useDispatch();
    const [wantToReadData, setWantToReadData] = React.useState([]);
    const [currentlyReadingData, setCurrentlyReadingData] = React.useState([]);

    React.useEffect(()=> {
        dispatch(getPosts());
        dispatch(getBooks());
        // getCurrentlyReading();
        // getWantToRead();
    }, [dispatch])

    React.useEffect(() => {
        getCurrentlyReading();
        getWantToRead();
    }, [books])


    const getWantToRead = () => {
        if(books[0] !== undefined){
            const tempData = books[0].filter(item => {
                for(let i in wantToRead[0][0]){
                    if(wantToRead[0][0][i].id === item.id){
                        return item;
                    }
                }
            })
            setWantToReadData(tempData);
        }
    }

    const getCurrentlyReading = () => {
        if(books[0] !== undefined){
            const tempData = books[0].filter(item => {
                for(let i in currentlyReading[0][0]){
                    if(currentlyReading[0][0][i].id === item.id){
                        return item;
                    }
                }
            })
            setCurrentlyReadingData(tempData);
        }
    }

 

    // React.useEffect(() => {
        
    // }, [])



    return (
        <div className={styles.home__cont}>
            <div className={styles.home__left}>
                <h4>CURRENTLY READING</h4>
                {        
                    currentlyReadingData?.map(item => 
                        <CurrentlyReading key={item.id} 
                        title={item.volumeInfo.title} 
                        author={item.volumeInfo.authors[0]}
                        image={item.volumeInfo.imageLinks !== undefined ? item.volumeInfo.imageLinks.smallThumbnail: "https://via.placeholder.com/100x100"}/>
                    )
                }
                <hr className={styles.horizontal_rule}/>
                <h4>WANT TO READ</h4>
                <div className={styles.want_to_read}>
                {
                    wantToReadData?.map(item => 
                        <WantToRead key={item.id} image={item.volumeInfo.imageLinks!== undefined ? item.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/100x100"}/>
                    )
                }
                </div>
                <Link to="/mybooks">View all books</Link>
                <hr className={styles.horizontal_rule}/>
                <div className={styles.bookshelves}>
                    <h4>BOOKSHELF</h4>
                    <div>
                        <Link to="/mybooks">{wantToReadData.length} Want to Read</Link>
                    </div>
                    <div>
                        <Link to="/mybooks">{currentlyReadingData.length} Currently Reading</Link>
                    </div>
                    <div>
                        <Link to="/mybooks">{read[0] !== undefined? read[0][0].length : "-"} Read</Link>
                    </div>
                </div>
            </div>
            <div className={styles.home__mid}>
                <h4>UPDATES</h4>
                {
                    posts[0]?.slice(0).reverse()?.map(item => 
                        <Post {...item} key={item.id}/>
                        )
                }
            </div>
            <div className={styles.home__right}>
                <div className={styles.right__cards}>
                    <h4 style={{marginBottom: "10px"}}>NEWS AND INTERVIEWS</h4>
                    <h4 style={{marginBottom: "10px"}}>February's Most Anticipated Young Adult Books</h4>
                    <img src="https://images.gr-assets.com/blogs/1611274039p7/2005.jpg" alt=""/>
                    <p style={{fontSize:"13px", color:"#8E8A81"}}>31 likes . 2 comments</p>
                </div>
                <hr className={styles.horizontal_rule}/>
                <div className={styles.right__cards}>
                    <h4 style={{marginBottom: "10px"}}>RECOMMENDATIONS</h4>
                    <h4 style={{marginBottom: "10px"}}>February's Most Anticipated Young Adult Books</h4>
                    <img src="https://images.gr-assets.com/blogs/1611273545p7/2004.jpg" alt=""/>
                    <p style={{fontSize:"13px", color:"#8E8A81"}}>31 likes . 2 comments</p>
                </div>
                <hr className={styles.horizontal_rule}/>
                <div className={styles.footer}>
                    <div className={styles.footer__cont}>
                        <div className={styles.cont__left}>
                            <h4 style={{margin: "10px 0"}}>COMPANY</h4>
                            <p>About Us</p>
                            <p>Career</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                            <p>Interest Based Ads</p>
                            <p>Ad Prefernces</p>
                            <p>Help</p>
                        </div>
                        <div className={styles.cont__right}>
                            <h4 style={{margin: "10px 0"}}>WORK WITH US</h4>
                            <p>Authors</p>
                            <p>Advice</p>
                            <p>Authord and Ad Blogs</p>
                            <p>API</p>
                        </div>
                    </div>
                    <hr className={styles.horizontal_rule}/>
                    <h4 style={{margin: "10px 0"}}>CONNECT</h4>
                    <div className={styles.socials}>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
                <hr className={styles.horizontal_rule}/>
                <div style={{marginBottom: "10px"}}>
                    <img src="https://s.gr-assets.com/assets/app/badge-ios-desktop-homepage-6ac7ae16eabce57f6c855361656a7540.svg" alt=""/>
                    <img src="https://s.gr-assets.com/assets/app/badge-android-desktop-home-0f517cbae4d56c88a128d27a7bea1118.png" alt=""/>
                </div>
                <p style={{marginBottom: "10px"}}>Mobile Version</p>
                <p style={{fontSize:"13px", color:"#8E8A81"}}>© 2021, GoodReadsClone</p>
            </div>
        </div>
    )
}

export {Home}
