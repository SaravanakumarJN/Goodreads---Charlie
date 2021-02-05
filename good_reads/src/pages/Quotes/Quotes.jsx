import React from "react";
import styles from "./Quotes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/Quotes/action";
import { Link } from "react-router-dom";
import { add } from "../../redux/Quotes/actionadd";
const Quotes = () => {
  const [author, setAuthor] = React.useState("");
  const data = useSelector((state) => state.quotes.data);
  const isLoading = useSelector((state) => state.quotes.isLoading);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      getData({
        _page: 1,
        _limit: 8,
      })
    );
  }, []);
  const handleSearch = () => {
    dispatch(
      getData({
        _page: 1,
        _limit: 5,
        q: author,
      })
    );
    setAuthor("");
  };
  const handleUsers = (e, _page = 1, _limit = 8) => {
    dispatch(
      getData({
        _page,
        _limit,
      })
    );
  };
  const handleLikes = (e) => {
    const newData = data.find((ele) => ele.id === e);
    dispatch(add(newData));
  };
  return (
    <div className={styles.cont}>
      <div className={styles.cont__left}>
        <p style={{ fontWeight: "700", fontSize: "22px" }}>Popular Quotes</p>
        <input
          style={{
            width: "64%",
            height: "20px",
            marginLeft: "10px",
            marginTop: "13px",
          }}
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Find the quotes by author"
        />
        <button
          style={{ width: "80px", height: "25px", cursor: "pointer" }}
          onClick={handleSearch}
        >
          Search
        </button>
        <hr
          style={{
            width: "95%",
            marginLeft: "12px",
            marginTop: "15px",
            color: "lightgray",
            backgroundColor: "black",
          }}
        />
        <p style={{ marginTop: "10px", marginLeft: "12px", fontSize: "14px" }}>
          Quotes popular among Goodreads members
        </p>
        {isLoading ? (
          <div style={{ marginLeft: "12px" }}>great things is coming...</div>
        ) : (
          <div>
            {data.map((ele) => (
              <div className={styles.quotesBox} key={ele.id}>
                <div className={styles.quotesBoxImg}>
                  <img src={ele.img} alt="img" />
                </div>
                <div style={{ width: "80%" }}>
                  <p>"{ele.quote}"</p>
                  <p style={{ fontWeight: "700", marginTop: "10px" }}>
                    -{ele.author}
                  </p>
                  <Link>
                    <p
                      style={{
                        marginLeft: "85%",
                        fontSize: "13px",
                        color: "#12645E",
                      }}
                    >
                      {Math.floor(Math.random() * 1001)} likes
                    </p>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => handleLikes(ele.id)}
                    style={{
                      width: "35px",
                      height: "20px",
                      cursor: "pointer",
                      title: "add to my quotes",
                      marginLeft: "15px",
                      fontSize: "11px",
                    }}
                  >
                    ADD
                  </button>
                  <span className={styles.span}>add to my quotes</span>
                </div>
              </div>
            ))}
            <div style={{ marginLeft: "78%" }}>
              {new Array(10).fill(0).map((_, index) => (
                <button
                  onClick={(e) => handleUsers(e, index + 1)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.cont__right}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/myQuotes">
            {" "}
            <p style={{ fontSize: "12px" }}>My Quotes</p>
          </Link>
          <p>|</p>
          <Link to="/addQuotes">
            <p style={{ fontSize: "12px" }}>Add a Quote</p>
          </Link>
        </div>
        <div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "13px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            BROWSE BY TAG
          </p>
          <hr style={{ width: "90%", marginLeft: "10px", marginTop: "3px" }} />
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Love Quotes <span style={{ color: "grey" }}>81.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Buddha Quotes<span style={{ color: "grey" }}>83k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Peaky Blinders Quotes <span style={{ color: "grey" }}>97.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Truth Quotes <span style={{ color: "grey" }}>12.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Demon Quotes <span style={{ color: "grey" }}>811.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              God Quotes <span style={{ color: "grey" }}>911.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Humor Quotes <span style={{ color: "grey" }}>811.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Motivational Quotes <span style={{ color: "grey" }}>71.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Death Quotes <span style={{ color: "grey" }}>8121.5k</span>
            </p>
          </Link>
          <Link>
            <p
              style={{ fontSize: "10px", marginLeft: "10px", marginTop: "9px" }}
            >
              Hope Quotes <span style={{ color: "grey" }}>5121.5k</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Quotes };
