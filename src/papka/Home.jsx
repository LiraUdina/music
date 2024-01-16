import { useState, useEffect } from "react";

const API = () => {
  const [data, setData] = useState([]);


  return (
    <div>
      <h1>Музыкальный плейлист</h1>
      <div className="cat">
        <ul>
          {data.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
      </div>
  );
}

const Home = () => {
  return (
    <div>
      <API />
    </div>
  );
}

export default Home;