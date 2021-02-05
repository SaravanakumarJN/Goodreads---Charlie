import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { getPeopleData } from "../../redux/peoplePage/action";
import { num } from "./people";
import style from "./people.module.css";
export const People = () => {
  const [follow,setFollow] = React.useState(false)
  const data = useSelector(state=>state.peopleData)
  const dispatch = useDispatch()
  React.useEffect(()=>{
      dispatch(getPeopleData())
  },[dispatch])

  const handlefollow =()=>{
    setFollow(!follow)
  }
  return (
    <div>
    <>
      <div className={style.box1}>
        <br />
        <h2>Most popular 100 reviewers this week</h2>
        <br />
        <p>
          this week{" "}
          <h style={{ opacity: "0.5" }}>(generated Jan 27, 2021 12:29PM)</h>
        </p>
        <br />
        <p style={{ fontSize: "13px" }}>
          <h>this week</h> | <h>this month</h> | <h>last 12 months</h> |{" "}
          <h>all</h>{" "}
        </p>
        <br />
      </div>
      <div className={style.profileBox}>
       {
         data.userdata?.map(item =>{
          return  <>
        <div className={style.container}>
        <div className={style.numberbox}>
          <p>1.</p>
        </div>
        <div className={style.imgContainer}>
          <img src={item.image_url} alt="alt" />
        </div>
        <div className={style.detailsContainer}>
          <p style={{ color: "#00635d" }}><Link to={`people/show/${item.id}`}>{item.name}</Link></p>
          <p>city</p>
          <p style={{ color: "#00635d" }}>{item.private_shelf.length} books | {item.following.length} friends</p>
        </div>
        <div
          style={{ marginLeft: "50px" }}
          className={style.detailsContainer}
        >
          <p style={{ color: "#00635d" }}> {num()} votes this week</p>
          <p style={{ color: "#00635d" }} onClick={handlefollow}>{follow?"Unfollow reviews":"Follow reviews"}</p>
        </div>
      </div>
    </>
         })
       }
        
      </div>
      <div className={style.meetpeoplebox}>
        <p>Meet People</p>
        <p style={{ fontSize: "13px", color: "#00635d" }}>
          top readers
          <br /> top reviewers <br />
          most popular reviewers
          <br /> most followed top librarians
          <br /> recent reviews
        </p>
      </div>
      </>
    </div>
    
  );
};
