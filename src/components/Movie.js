import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    const [smry, setSmry] = useState("");
    
    useEffect(() => {
        setSmry({summary});
    }, []);

    return (
        <div id={id}>
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={{
                    pathname: `/movie/${id}`,
                    //location 객체의 state가 null로 전달됨
                    state: {
                        summary: {smry}
                    }
                }}>
                    {title}
                </Link>
            </h2>
            <p>{summary.length <= 250 ? summary : `${summary.slice(0, 250)}...`}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;