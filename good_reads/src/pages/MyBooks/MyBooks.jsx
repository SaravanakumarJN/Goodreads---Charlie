import React from 'react'
import {MyBooksCard} from "../../components/MyBooksCard/MyBooksCard"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { getBooks } from '../../redux/myBooks/action'
import styles from "./MyBooks.module.css"

const MyBooks = () => {

    const {books, wantToRead, currentlyReading, read} = useSelector(state => state.myBooks, shallowEqual)

    const [data, setData] = React.useState([]);
    const [sortOpt, setSortOpt] = React.useState("title")
    const [checked, setChecked] = React.useState("asc")

    const dispatch = useDispatch();

    React.useEffect(()=> {
        dispatch(getBooks());
    }, [dispatch])

    React.useEffect(() => {
        setData(books[0])
    }, [books])


    const handleChange = (value) => {
        if(value ==="all"){
            setData(books[0])
        }else if(value === "read"){
            const tempData = books[0].filter(item => {
                for(let i in read[0][0]){
                    if(read[0][0][i].id === item.id){
                        return item;
                    }
                }
            })
            setData(tempData);
        }else if(value === "currently_reading"){
            const tempData = books[0].filter(item => {
                for(let i in currentlyReading[0][0]){
                    if(currentlyReading[0][0][i].id === item.id){
                        return item;
                    }
                }
            })
            setData(tempData);
        }
        else if(value === "want_to_read"){
            const tempData = books[0].filter(item => {
                for(let i in wantToRead[0][0]){
                    if(wantToRead[0][0][i].id === item.id){
                        return item;
                    }
                }
            })
            setData(tempData);
        }
    }

    const handleSort = (value) => {
        setSortOpt(value)
        let tempData1 = data.sort((a, b) => {
            const title1= a.volumeInfo[value];
            const title2 = b.volumeInfo[value];
            if(checked === "asc"){
                if (title1 < title2) {
                    return -1;
                }
                if (title1 > title2) {
                    return 1;
                }
                return 0;   
            }
            else{
                if (title1 < title2) {
                    return 1;
                }
                if (title1 > title2) {
                    return -1;
                }
                return 0; 
            }
        })
        setData(tempData1)
    }

    const handleSortDetail = (value) => {
        setChecked(value);
        handleSort(sortOpt)
    }
    

    // const handleCheck = (value) => {
    //     if(checked === value){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }



    return (
        <div className={styles.cont}>
            <h2>My Books</h2>
            <hr className={styles.horizontal_rule}/>
            <div className={styles.cont__flex}>
                <div className={styles.cont__filter}>
                    <p style={{marginBottom:"10px"}}><b>Bookshelf</b></p>
                        <button value="all" className={styles.filter_btn} onClick={e => handleChange(e.target.value)}>All</button><br/>
                        <button value="read" className={styles.filter_btn}  onClick={e => handleChange(e.target.value)}>Read</button><br/>
                        <button value="currently_reading" className={styles.filter_btn}  onClick={e => handleChange(e.target.value)}>Currently Reading</button><br/>
                        <button value="want_to_read" className={styles.filter_btn}  onClick={e => handleChange(e.target.value)}>Want to Read</button><br/>
                        <hr className={styles.horizontal_rule}/>
                        <p style={{marginBottom:"10px"}}><b>Sort</b></p>
                        <div className={styles.cont__sort}>
                            <select name="sort" value={sortOpt} onChange={e => handleSort(e.target.value)} style={{marginBottom:"10px"}}>
                                <option value="title">Title</option>
                                <option value="averageRating">Rating</option>
                                <option value="publishedDate">Publised Date</option>
                            </select>
                            <div>
                                <span>
                                    <input type="radio" id="asc" name="sort" value="asc" checked={checked==="asc" ? true: false} onChange={e => handleSortDetail(e.target.value)}/>
                                    <label for="asc">Asc</label>
                                </span>
                                <span>
                                    <input type="radio" id="asc" name="sort" value="dsc" checked={checked==="dsc" ? true: false} onChange={e => handleSortDetail(e.target.value)}/>
                                    <label for="asc">Dsc</label>
                                </span>
                            </div>
                        </div> 
                </div>
                <div className={styles.cont__main}>
                    {
                        data?.length !== 0 ? data?.map(item =>
                            <MyBooksCard {...item} key={item.id}/>   
                        ): books.length !== 0 ? books[0].map(item =>  <MyBooksCard {...item} key={item.id}/> ): <div></div>
                    }  
                </div>
            </div>
        </div>
    )
}

export {MyBooks}
