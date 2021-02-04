import { Button } from "@material-ui/core";
import React from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import style from "./main.module.css";
import {num} from "../../people/people"
import {Footer} from "../../../components/Footer/Footer"
import {  useRouteMatch,Link, Route,useHistory } from "react-router-dom";
const init = [
  {
    group_name: "Finction stars",
    genre: "fiction",
  },
  {
    group_name: "Action pack",
    genre: "Action",
  },
];

export const Main = () => {
  const [group_name, setName] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [group, setgroup] = React.useState(init);
    const history = useHistory()
  const handleCreate = () => {
    const payload = {
      group_name: group_name,
      genre: genre,
    };
    return setgroup([...group, payload]);
  };

  const handleExplore=(q,g)=>{
     return history.push(`/group/${g}/${q}`)
  }



  return (
    <>
        Join your groups
      <div className={style.box}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="group name"
        />
        <input
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          placeholder="genre"
        />
        <Button
          onClick={handleCreate}
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="primary"
        >
          create group
        </Button>
        {group?.map((item) => {
          return (
            <>
              <div className={style.groupBox}>
                  <div className={style.pBox}>
                  <p style={{ color: "#32362D" }}>
                  {item.group_name}<br />
                  {item.genre} <br />
                  {num()} members{" "}
                </p>
                  </div>
                  <div className={style.btnBox}>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg?crop=0.668xw:1.00xh;0,0&resize=480:*" alt="alt"/>
                  </div>
                <Button 
                onClick={()=>handleExplore(item.genre,item.group_name)}
                  style={{
                    marginLeft: "50px",
                    height: "50px",
                    marginTop: "20px",
                    background: "brown",
                  }}
                  variant="contained"
                  color="primary"
                >
                  Explore the group
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
