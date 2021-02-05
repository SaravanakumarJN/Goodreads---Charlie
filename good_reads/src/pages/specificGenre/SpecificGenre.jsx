import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { genreSearchPerformer } from "../../redux/genres/action";
import styles from "./SpecificGenre.module.css";

const SpecificGenre = () => {
  const { genreItems } = useSelector((state) => state.genre, shallowEqual);
  const { type } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(genreSearchPerformer(type));
  }, []);

  const handleBook = (bookId) => {
    history.push(`/book/show/${bookId}`);
  };

  return (
    <div className={styles.container}>
      <h3 style={{ marginTop: "60px", marginLeft: "13%" }}>
        {type.toUpperCase()}
      </h3>
      {type === "adventure" ? (
        <p style={{ marginTop: "10px", marginLeft: "13%", width: "640px" }}>
          Adventure fiction is a genre of fiction in which an adventure, an
          exciting undertaking involving risk and physical danger, forms the
          main storyline. Adventure novels and short stories were popular
          subjects for American pulp magazines, which dominated American popular
          fiction between the Progressive Era and the 1950s. Adventure fiction
          often overlaps with other genres, notably war novels, crime novels,
          sea stories, Robinsonades, spy stories (as in the works of John
          Buchan.
        </p>
      ) : (
        <p></p>
      )}
      <p style={{ fontWeight: "600", marginLeft: "13%", marginTop: "20px" }}>
        NEW RELEASES TAGGED "{type.toUpperCase()}"
        <hr style={{ width: "620px" }} />
      </p>
      <div className={styles.bookContainer}>
        {genreItems?.map((item, i) => {
          if (i < 15) {
            const { imageLinks, title } = item.volumeInfo;
            const src =
              imageLinks === undefined
                ? "https://via.placeholder.com/110x180.png?text=No+image"
                : imageLinks.smallThumbnail;
            return (
              <img
                onClick={() => handleBook(item.id)}
                key={item.id}
                className={styles.img}
                src={src}
                alt={title}
              ></img>
            );
          } else {
            return null;
          }
        })}
        {genreItems?.length > 15 ? (
          <div style={{ marginLeft: "70%" }}>
            <Link to={`/shelf/show/${type}`}>{`More ${type} books`}</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { SpecificGenre };
