import { Link } from 'react-router-dom';
const Str = () => {
    return (
        <nav className="my-link">
         <Route path="/" element={<About />} />
          <Route path="/zhanri" element={<Home />} />
        </nav>
    )
}

export {Str}