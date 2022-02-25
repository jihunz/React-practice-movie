import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>Detail</h1>
                {loading ? <h2>loading...</h2> : null}
                <img src={movie.large_cover_image}></img>
                <h3>{movie.title_long}</h3>
                <p>{
                    movie.genres && movie.genres.map(g => (
                        <span key={g}>{g} </span>
                    ))}
                </p>
        </div>
    );
}

export default Detail;