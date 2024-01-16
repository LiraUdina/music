import { Link } from 'react-router-dom';
const Str = () => {
    return (
        <nav className="my-link">
        <Link to="/">Музыкальный плейист</Link>
        <Link to="/About">Музыкальные жанры</Link>
        </nav>
    )
}

export {Str}