import React from "react";
import styles from "./Trivia.module.css";
import { Link } from "react-router-dom";

const TriviaQuestuion = ({
  data: { question, correct_answer, incorrect_answers },
  handleAnswer,
  handleSkip,
  images,
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <div className={styles.quiz_container}>
        <p>{question}</p>
        <img src={images} alt="image_author" width="120px" height="120px" />
        <div className={styles.quiz_container__buttons}>
          <p className={styles.correct}>Choose the correct answer:</p>
          {shuffledAnswer.map((answer) => (
            <button
              className={styles.quiz_container__buttons__button}
              onClick={() => handleAnswer(answer)}
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className={styles.quiz_container__last}>
          <Link to="/askFreind">
            <p>ask Freind</p>
          </Link>
          <button
            style={{
              width: "60px",
              height: "30px",
              paddingTop: "10px 10px",
              fontSize: "15px",
              cursor: "pointer",
            }}
            onClick={() => handleSkip(1)}
          >
            skip >
          </button>
        </div>
      </div>
    </div>
  );
};

export default TriviaQuestuion;
