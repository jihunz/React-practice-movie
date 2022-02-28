import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div id={id}>
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                        smry: summary
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