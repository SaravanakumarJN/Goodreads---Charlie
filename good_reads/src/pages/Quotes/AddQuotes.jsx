import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/Quotes/actionadd";
import { postQuotes, getData } from "../../redux/Quotes/action";
const AddQuotes = () => {
  const [quotes, setQuotes] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.quotes.data);
  console.log("daadda", data);
  const handleAdd = () => {
    const img1 = data.find((ele) => ele.author === author);
    // console.log("img", img1.img);
    const data1 = {
      author: author,
      quote: quotes,
      img: img1.img,
    };
    dispatch(add(data1));
    dispatch(postQuotes(data1));
  };
  const handleSearch = () => {
    dispatch(
      getData({
        q: search,
      })
    );
    history.push("/quotes");
  };
  return (
    <div
      style={{
        width: "75%",
        // border: "1px solid black",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "6%",
      }}
    >
      <div style={{ width: "67%", marginTop: "-70px" }}>
        <Link to="/quotes">
          <span style={{ fontSize: "25px" }}>Quotes</span>
        </Link>
        <span style={{ fontSize: "20px", fontWeight: "600" }}> >Add</span>
        <p style={{ marginLeft: "10px", marginTop: "10px", fontSize: "14px" }}>
          Before adding a new quote please first do a search and make sure it
          doesn't already exist in the database.
        </p>
        <label htmlFor="">
          <p style={{ marginTop: "13px", marginLeft: "11px" }}>Quote</p>
          <textarea
            name="quotes"
            value={quotes}
            cols="40"
            rows="7"
            style={{ marginLeft: "11px" }}
            onChange={(e) => setQuotes(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label htmlFor="">
          <p style={{ marginTop: "15px", marginLeft: "13px" }}>Author</p>
          <input
            type="text"
            style={{ marginTop: "1px", marginLeft: "13px", width: "140px" }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name"
          />
        </label>
        <br />
        <button
          style={{
            marginLeft: "13px",
            width: "80px",
            height: "31px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={handleAdd}
        >
          SAVE
        </button>
        <Link to="/myQuotes">
          <span style={{ marginLeft: "30px" }}>My quotes</span>
        </Link>
      </div>
      <div style={{ width: "30%", marginTop: "-34px" }}>
        <input
          type="text"
          name=""
          style={{ width: "180px", height: "23px" }}
          placeholder="Find quotes by author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ width: "70px", height: "28px", cursor: "pointer" }}
          onClick={handleSearch}
        >
          Search
        </button>
        <div>
          <p style={{ marginTop: "17px", marginLeft: "5px" }}>
            Quote Guidelines
          </p>
          <ul>
            <li
              style={{
                marginTop: "10px",
                marginLeft: "7px",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Only enter quotes from notable people. Generally, a person is
              notable if they have been the subject of published secondary
              source material which is reliable, intellectually independent, and
              independent of the subject.
            </li>
            <li
              style={{
                marginTop: "10px",
                marginLeft: "7px",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Quotes can be from any source (books, spoken words, news articles,
              etc) as long as they pass the above criteria.
            </li>
            <li
              style={{
                marginTop: "10px",
                marginLeft: "7px",
                fontSize: "13px",
                marginLeft: "10px",
              }}
            >
              Only enter the author's name in the author field (not their
              birthdate or which book the quote is from).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { AddQuotes };
