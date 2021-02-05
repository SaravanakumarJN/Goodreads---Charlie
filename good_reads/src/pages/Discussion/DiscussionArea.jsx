import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DiscussionArea.module.css";
import { Link } from "react-router-dom";
import {
  getDataPost,
  Post1Dis,
  getDataPost1,
} from "../../redux/Discussion/action";
const DiscussionArea = () => {
  const data = useSelector((state) => state.disPost.data);
  const isLoading1 = useSelector((state) => state.disPost.isLoading1);
  const isLoading2 = useSelector((state) => state.disPost.isLoading2);
  const comments = useSelector((state) => state.disPost.comments);
  console.log("comme", comments);
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(getDataPost());
  // }, []);
  const [post, setPost] = React.useState("");
  const handlePost = () => {
    const payload = {
      post,
    };
    dispatch(Post1Dis(payload));
  };

  return (
    <div>
      {!isLoading1 ? (
        <div>.....isLoading</div>
      ) : (
        <div className={styles.cont}>
          <h1>
            <Link>{data.bookname}</Link> discussion
          </h1>
          <h3>topic:{data.topic}</h3>
          <label htmlFor="">
            comment
            <br />
            <textarea
              name="post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              cols="60"
              rows="5"
            ></textarea>
          </label>
          <br />
          <button onClick={handlePost}>Post</button>
          <div>
            <br />
            <br />
            <div>
              <span>Comments (showing 1-1)</span>
              <div>
                <div className={styles.divPostHeading}>
                  <p>
                    message 1:by <span style={{ color: "blue" }}> Hkg</span>{" "}
                  </p>
                </div>
                <p>{data.comment}</p>
              </div>
              <div>
                <div className={styles.divPostHeading}>
                  <p>
                    message 1:by <span style={{ color: "blue" }}> Hkg</span>{" "}
                  </p>
                </div>
                <p>{comments.comment}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionArea;
