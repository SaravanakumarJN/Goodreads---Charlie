import React from "react";
import styles from "./DiscussionPost.module.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/Discussion/action";
const DiscussionPost = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = React.useState({
    bookName: "",
    topic: "",
    comment: "",
    name: "",
  });
  const handleAdd = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleSubmit = () => {
    const payload = {
      bookName,
      topic,
      comment,
      name,
    };
    dispatch(getData(payload));
    setDetails({
      ...details,
      bookName: "",
      author: "",
      topic: "",
      name: "",
    });
  };
  const { bookName, name, topic, comment } = details;
  return (
    <div>
      <div className={styles.cont}>
        <p className={styles.p1}>Post a New Discussion Topic</p>
        <label htmlFor="" className={styles.p2}>
          Book this topic is about{" "}
          <input
            className={styles.input1}
            type="text"
            placeholder="Start typing the new book name...."
            name="bookName"
            value={bookName}
            onChange={handleAdd}
          />
        </label>
        <br />
        <br />
        <label className={styles.p3}>
          topic
          <br />
          <input
            className={styles.input2}
            type="text"
            name="topic"
            value={topic}
            onChange={handleAdd}
          />
        </label>
        <br />
        <br />
        <input type="checkbox" />{" "}
        <label htmlFor="" className={styles.p2}>
          this is a discussion question
        </label>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={styles.p3}>commet</p>
          <Link>
            <p>add book/author</p>
          </Link>
        </div>
        <textarea
          name=""
          cols="58"
          rows="7"
          style={{ marginTop: "-15px" }}
          name="comment"
          value={comment}
          onChange={handleAdd}
        ></textarea>
        <br />
        <Link to="/discussion/area">
          <button onClick={handleSubmit}>Post</button>
        </Link>
        <br />
        <br />
        <Link>
          <p>cancel</p>
        </Link>
      </div>
    </div>
  );
};

export { DiscussionPost };
