import React from "react";
import style from "./landing.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { name,sendAuthLogin,sendAuthRegister } from "../../redux/landingPage/action";
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  btn: {
    color: "white",
    background: "#333333",
    marginTop: "5px",
    marginLeft: "10px",
    "&:hover": {
      background: "#424242",
    },
  },
  btn2: {
    color: "white",
    background: "#FFD767",
    marginTop: "55px",
    marginLeft: "10px",
    "&:hover": {
      background: "#ffde82",
    },
  },
}));
export const LandingPage = () => {
  const classes = useStyles();
  const [email,setEmail] = React.useState()
  const [email2,setEmail2] = React.useState()
  const [username,setUsername] = React.useState()
  const [password,setPassword] = React.useState()
  const [password2,setPassword2] = React.useState()
  const signin = useSelector(state=>state.signin.login)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleRegister =()=>{
      let payload ={
        email:email,
        password:password
      }
      dispatch(name(username))
      dispatch(sendAuthRegister(payload))
      setEmail("")
      setPassword("")
      setUsername("")
  }
  const handleLogin =()=>{
    let payload ={
      email:email2,
      password:password2
    }
    localStorage.setItem("isLogin", JSON.stringify(true))
    dispatch(sendAuthLogin(payload))
    setEmail("")
    setPassword("")
  }

  const isLogin = JSON.parse(localStorage.getItem("isLogin"))
  React.useEffect(() => {

  }, [signin])

  if(isLogin === true){
    history.push("/")
  }

  return (
    <>
      <div className={style.navBar}>
        <img
          className={style.logo}
          src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"
          alt="logo"
        />
        <div className={style.loginContainer}>
          <input onChange={(e)=>setEmail2(e.target.value)}  type="email" placeholder="email" />
          <input onChange={(e)=>setPassword2(e.target.value)}   type="password" placeholder="password" />
          <Button onClick={handleLogin}  className={classes.btn} variant="contained" color="primary">
            sign in
          </Button>
          <p>Forget it ?</p>
        </div>
      </div>
      <div className={style.banner}>
        <div className={style.bannerImg}>
          <p>Announcing the</p>
          <h1>
            Best Book
            <br />
            of 2021
          </h1>
          <p id={style.bannerImg_p}>
            See the winners in our community of readers
          </p>
        </div>
        <div className={style.signUpContainer}>
          <p>New here? Create a free account!</p>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} type="name" placeholder="username" />
          <br />
          <input onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="email" />
          <br />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
          <br />
          <Button onClick={handleRegister} className={classes.btn} variant="contained" color="primary">
            sign up
          </Button>
          <p>
            By clicking “Sign up” I agree to the Goodreads Terms of Service and
            confirm that I am at least 13 years old.
          </p>
        </div>
        {/* <img className={style.bookpng} src="https://freepngimg.com/thumb/categories/2299.png" alt="alt"/> */}
      </div>
      <div className={style.banner2}>
        <div className={style.banner2_container1}>
          <h2 id={style.banner2_container1_h2}>
            12th Annual Goodreads Choice Awards
          </h2>
          <p>
            See the winners in the only major book awards decided by readers.
          </p>
          <div className={style.list}>
            <li>Best Fiction</li>
            <li>Best Romance</li>
            <li>Best Action</li>
            <li>Best Non-Fiction</li>
          </div>
          <div className={style.list}>
            <li>Best Humor</li>
            <li>Best Fantasy</li>
            <li>Best Love</li>
            <li>Best Drama</li>
          </div>
          <div className={style.list}>
            <li>Best Mentor-Books</li>
            <li>Best Historical-Fiction</li>
            <li>Best Action</li>
            <li>Best Young adult</li>
          </div>
          <Button className={classes.btn2} variant="contained" color="primary">
            see for the winners
          </Button>
        </div>
        <div className={style.books }>
            <p style={{fontSize: "18px"}}>News & Interviews</p>
            <br/>
            <p>7 greater books hitting shelves This Week</p>
            <div className={style.bookshelves}>
                <img src="https://images.gr-assets.com/blogs/1611614949p7/1998.jpg" alt="img"/>
            </div>
            <br/>
            <br/>
            <p style={{fontSize: "13px",opacity:"0.5"}}>15 likes - <span>11 comments</span></p>
        </div>
      </div>
    </>
  );
};
