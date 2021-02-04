import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../../../components/Footer/Footer";
import { Navbar } from "../../../components/MyBooksCard/Navbar/Navbar";
import { GetGroupData } from "../../../redux/allOptions/action";
import style from "./Group.module.css";
import {v4 as uuid} from "uuid"

const init =[{
    name:"manish",
    message:"hello everyone",
    replay:[{r:"hello manish"},{r:"hello manish"}],
    id:"1"
}]


export const Group = () => {
  let { q, g } = useParams();
  const[message,setMsg] = React.useState("")
  const [chat,setChat] = React.useState(init)
  const [num, setNum] = React.useState(4);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.group_reducer.group_data);
  React.useEffect(() => {
    dispatch(GetGroupData(q, num));
  }, []);

  const hanldeAddChat =(name)=>{
        const payload={
            name:name,
            message:message,
            id:uuid()
        }
        setChat([...chat,payload])
        setMsg("")
  }

  
  const [replay,setReplay] = React.useState("")

  const [replayMsg ,SetReplayMsg] = React.useState([])
  const hanldeAddReplay =(id)=>{
      const payload = [id,replay]
      SetReplayMsg([...replayMsg,payload])
    }
    
    console.log(replayMsg)
  return (
    <div>
      <Navbar />
      <div className={style.box}>
        <img src={data[0]?.volumeInfo.imageLinks.smallThumbnail} alt="alt" />
        <h1 className={style.groupName}>{g}</h1>
        <br/>
        <p>
          When anyone on the TODAY team's looking for a book recommendation,
          there's only one person to turn to: Jenna Bush Hager.<br/><br/> Jenna will
          select a book and as you read along, we'll be posting updates right
          here with thought-provoking conversation starters. We hope you'll
          engage with the rest of the #ReadWithJenna community to make this book
          club your own.
        </p>
        <br/>
        <p style={{opacity:"0.3"}}>tags -- book-club, book-clubs, book-group, fiction, jenna-bush-hager, literature, today, and women-authors</p>
        <br/>
        <p style={{opacity:"0.3"}}>group -- typeThis is a public group. Anyone can join and invite others to join.</p>
        <br />
        <h2 style={{opacity:"0.5"}}>#Read with the group books</h2>
        <div className={style.bookBox}>
        {data?.map((item) => {
            return (
                <>
              <div>
                <img
                  src={
                      item.volumeInfo.imageLinks.smallThumbnail === undefined
                      ? "https://via.placeholder.com/150"
                      : item.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt=""
                    />
              </div>
            </>
          );
        })}
      </div>
        <button>Join Group</button>
      </div>     
      <div className={style.box1}>
          <p style={{borderBottom:"1px solid grey"}}>Announcement</p>
          <div className={style.aBox}>
            <p>Book Club Q&A with Author</p>
            <p style={{fontSize:"13px",opacity:"0.3"}}>By Bryan · 7 posts <h style={{color:"red"}}>(7 new) </h>· 158 views
            <span style={{marginLeft:"60px"}}>last updated Feb 02, 2021 06:00PM</span></p>
          </div>
          <div className={style.aBox}>
            <p>Our December book pick is The Bluest Eye by Toni Morrison</p>
            <p style={{fontSize:"13px",opacity:"0.3"}}>By Bryan · 7 posts <h style={{color:"red"}}>(7 new) </h>· 158 views
            <span style={{marginLeft:"60px"}}>last updated Feb 02, 2021 06:00PM</span></p>
          </div>
          <div className={style.aBox}>
            <p>Our January 2021 book pick is Black Buck by Mateo Askaripour</p>
            <p style={{fontSize:"13px",opacity:"0.3"}}>By Bryan · 7 posts <h style={{color:"red"}}>(7 new) </h>· 158 views
            <span style={{marginLeft:"60px"}}>last updated Feb 02, 2021 06:00PM</span></p>
          </div>
          <div className={style.aBox}>
            <p>Our July book club pick is Evvie Drake Starts Over</p>
            <p style={{fontSize:"13px",opacity:"0.3"}}>By Bryan · 7 posts <h style={{color:"red"}}>(7 new) </h>· 158 views
            <span style={{marginLeft:"60px"}}>last updated Feb 02, 2021 06:00PM</span></p>
          </div>
          <div className={style.aBox}>
            <p>Share your thoughts about Black Buck</p>
            <p style={{fontSize:"13px",opacity:"0.3"}}>By Bryan · 7 posts <h style={{color:"red"}}>(7 new) </h>· 158 views
            <span style={{marginLeft:"60px"}}>last updated Feb 02, 2021 06:00PM</span></p>
          </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Group Discussion</h1>
      <div className={style.chatContainer}>
      {
          chat.map(item=>{
            return <>
              <div key={item.id} className={style.chat}>
        <p className={style.message}><h style={{opacity:"0.5",color:"#4e5545"}}>{item.name}</h> {item.message}</p>
            <div className={style.replaySection}>
                {
                    replayMsg.map(i=> item.id ===i[0]? 
                         <p> {i[1]} <h style={{opacity:"0.5",color:"#4e5545",marginLeft:"20px",fontSize:"10px"}}>replay by {item.name}</h></p>
                    :null)
                    }
            </div>
            <input className={style.replayInput} onChange={(e)=>setReplay(e.target.value)} type="text" placeholder="replay here" />
            <button onClick={()=>hanldeAddReplay(item.id)} style={{marginLeft:"10px", marginBottom: "10px",marginTop:"20px",}} className={style.replay}>Replay</button>
        </div>
            </>})
      }
      </div>
      <div className={style.chatInputBox}>
        <input className={style.sendInput}  value={message} onChange={(e)=>setMsg(e.target.value)} type="text" placeholder="type here" />
        <button onClick={()=>hanldeAddChat("saravana")} className={style.send} >Send</button>
      </div>
      <Footer />
    </div>
  );
};
