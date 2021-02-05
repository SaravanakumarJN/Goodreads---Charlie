import React, { useState } from "react";
import styles from "./Trivia.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuesData } from "../../redux/Trivia/action";
import TriviaQuestuion from "./TriviaQuestuion";
import axios from "axios";
import { Search } from "../../components/searchBar/Search";
const Trivia = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.trivia.question);
  const isLoading = useSelector((state) => state.trivia.isLoading);
  const [currentIndex, setCurrentIndex] = useState(0);
  React.useEffect(() => {
    dispatch(getQuesData());
  }, []);
  React.useEffect(() => {
    getImages();
  }, [currentIndex]);
  const [images, setImages] = React.useState("");
  const [prevImages, setPrevImages] = React.useState("");
  const getImages = () => {
    return axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=fantasy&AIzaSyB8wyhDZVXdQlGutVzyqQfsCA9dVhe0b4I"
      )
      .then((res) => {
        console.log(
          "goglebook",
          res.data.items[currentIndex].volumeInfo.imageLinks.smallThumbnail
        );
        setImages(
          res.data.items[currentIndex].volumeInfo.imageLinks.smallThumbnail
        );
        setPrevImages(
          res.data.items[currentIndex - 1].volumeInfo.imageLinks.smallThumbnail
        );
      })
      .catch((err) => {
        console.log("err in google book api");
      });
  };
  const [recentQues, setRecentQues] = useState([]);

  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState("");
  const [quesans, setQuesAns] = React.useState(0);
  const [skipped, setSkipped] = React.useState(0);
  const handleAnswer = (answer) => {
    setCurrentIndex((prev) => prev + 1);
    if (answer === data[currentIndex].correct_answer) {
      setScore((prev) => prev + 1);
      setCorrect(true);
      setQuesAns((prev) => prev + 1);
    }
    if (answer !== data[currentIndex].correct_answer) {
      setCorrect(false);
      setQuesAns((prev) => prev + 1);
    }
    setRecentQues([data[currentIndex]]);
  };
  const handleSkip = (one) => {
    setCurrentIndex((prev) => prev + 1);
    setSkipped((prev) => prev + 1);
  };
  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.outer__left}>
          <p className={styles.outer__left__heading}>Never-Ending Book Quiz</p>
          <div className={styles.outer__left__recentQues}>
            <p
              style={{
                marginBottom: "5px",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              LAST ANWER
            </p>
            <hr />
            <div className={styles.outer__left__recentQues1}>
              {recentQues.length > 0 ? (
                <div>
                  <p style={{ fontSize: "15px" }}>{recentQues[0].question}</p>
                  <img
                    src={prevImages}
                    alt="images"
                    width="70px"
                    height="70px"
                  />
                  <h3>Answer Res</h3>
                  <p>
                    {correct === true ? (
                      <p style={{ color: "green", fontSize: "19px" }}>
                        "You got it Right!"
                      </p>
                    ) : (
                      <p style={{ color: "red", fontSize: "19px" }}>
                        {" "}
                        "You got it Wrong!"
                      </p>
                    )}
                  </p>
                  <p style={{ color: "green" }}>
                    a.{recentQues[0].correct_answer}
                  </p>
                  <p style={{ color: "red" }}>
                    b.{recentQues[0].incorrect_answers[0]}
                  </p>
                  <p style={{ color: "red" }}>
                    c.{recentQues[0].incorrect_answers[1]}
                  </p>
                  <p style={{ color: "red" }}>
                    d.{recentQues[0].incorrect_answers[2]}
                  </p>
                </div>
              ) : (
                <div>
                  <p className={styles.outer__left__loadingParts}>
                    Answer the question to the right to see the results!
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.myStats}>
            <p
              style={{
                marginBottom: "5px",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              MY STATS
            </p>
            <hr />
            <p className={styles.static}>question answerd:{quesans}</p>
            <p className={styles.static}>correct:{score}</p>
            <p className={styles.static}>skipped:{skipped}</p>
          </div>
        </div>
        <div className={styles.outer__right}>
          <div className={styles.outer__right__search}>
            <Link to="/trivia">
              <p>All Trivia</p>
            </Link>
            |
            <Link to="/booksection">
              <p>My Books</p>
            </Link>
            |
            <Link to="/homePage">
              <p>Browse</p>
            </Link>
            <input type="text" placeholder="Find the books....." />
            <button>Search</button>
          </div>
          <div className={styles.outer__right__quiz__heading}>
            <p style={{ fontWeight: "700", fontSize: "13px" }}>
              TRIVIA QUESTIONS
            </p>
            <Link to="/addQuestion">
              <p style={{ fontSize: "10px" }}>Add a questions</p>
            </Link>
          </div>
          <div className={styles.outer__right__quiz}>
            {isLoading ? (
              <div>
                <h1>Quiz is Loading guys.......</h1>
              </div>
            ) : (
              <TriviaQuestuion
                data={data[currentIndex]}
                handleAnswer={handleAnswer}
                handleSkip={handleSkip}
                images={images}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Trivia };
