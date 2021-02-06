import axios from 'axios'
import React from 'react'
import style from "./chat.module.css"
import {v4 as uuid} from "uuid"
export const Chat = () => {
    const [person1,setPerson1] = React.useState("")
    const [person2,setPerson2] = React.useState("")
    const [time,setTime] = React.useState("")

    const [chat,setChat]= React.useState(null)
    const[Chatmessage,setMessage] =React.useState("")
    
    React.useEffect(()=>{
        const t = new Date()
        setPerson1("Gokhu")
        let tym = t.getHours()+":"+ t.getMinutes()+" "
        let a =t.getHours()>12?"pm":"am"
        setTime(tym+a)
    },[])
    React.useEffect(()=>{
        const interval =setInterval(() => {
            return   axios.get("https://manish-chat-api.herokuapp.com/posts").then(res=>setChat(res.data)).catch(err=>console.log(err))
        }, 1000);
        return ()=>clearInterval(interval)
    },[])
    
    const handlePostChat = ()=>{
        const payload ={
            person1:person1,
            person2:person2,
            message:Chatmessage,
            time:time,
            id:uuid()
        }
        setMessage("")
        return axios.post("https://manish-chat-api.herokuapp.com/posts",payload)
    }

    return (
        <div>
        <div className={style.heading}>
        <h2 ><h className={style.colorBlue}>Messages </h>{">"} Compose new message</h2>
        <p>from : {person1}</p>
        <p>to :  <input onChange={(e)=>setPerson2(e.target.value)} type="text"></input></p>
        </div>
        
        <div className={style.ChatMainBox}>
            <div className={style.dummy}></div>
            {
                chat?.map(item=>{
                    return <>
                    {item.person1 === person1?    <div className={style.chatbox2}>
                <div className={style.contentBox2}>
                    <p className={style.personName2}>{item.person1}</p>
                    <p className={style.time2}>{item.time}</p>
                    <p className={style.message}>{item.message}</p>
                </div>
                <div className={style.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasBNP1Wz6ilTqpSe5av3iyqJhSqp44fkKeg&usqp=CAU" alt="alt"/>
                </div>
            </div>:item.person2===person1? 
                <div className={style.chatbox}>
                <div className={style.imgBox}>
                    <img src="https://fitindia.gov.in/wp-content/uploads/2020/08/pexels-photo-771742.jpeg" alt="alt"/>
                </div>
                <div className={style.contentBox}>
                    <p className={style.personName}>{item.person1}</p>
                    <p className={style.time}>{item.time}</p>
                    <p className={style.message}>{item.message}</p>
                </div>
            </div>:null}
                    </>
                })
            }
            {/* -------chat main */}
            {/* <div className={style.chatbox}>
                <div className={style.imgBox}>
                    <img src="https://i.pinimg.com/originals/f2/0b/d3/f20bd31d1b96a0ab86b75029da6a87ca.jpg" alt="alt"/>
                </div>
                <div className={style.contentBox}>
                    <p className={style.personName}>{person1}</p>
                    <p className={style.time}>{time}</p>
                    <p className={style.message}>hello how are you</p>
                </div>
            </div> */}
                   {/* -------chat main */}

         
        </div>
        <div className={style.inputBox}>
            <input onChange={(e)=>setMessage(e.target.value)} value={Chatmessage} type="text" placeholder="Enter your message"/>
            <button onClick={handlePostChat}>send</button>
        </div>

        </div>
    )
}
