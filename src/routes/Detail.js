import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>title : {movie.title}</h1>
          <p>
            url : <a href={movie.url}>{movie.url}</a>
          </p>
          <p>title_long : {movie.title_long}</p>
          <p>year: {movie.year}</p>
          <p>ratig: {movie.rating}</p>
          <div>
            <h3>Genres</h3>
            <ul>
              {movie.genres &&
                movie.genres.map((g, idx) => <li key={idx}>{g}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
