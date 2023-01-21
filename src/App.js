import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const [starWarsData, setStartWarsData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://swapi.py4e.com/api/people", {
        params: {
          page: count,
        },
      })
      .then(({ data: { results } }) => {
        setStartWarsData(results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

  return (
    <>
      <div className="start_wars">
        <div className="fetch_btn">
          <button onClick={() => setCount((prev) => ++prev)}>
            Fetch last movies
          </button>
        </div>

        <div className="start_cards">
          {loading && <p className="no_content">Loading ...</p>}
          {!starWarsData.length && !loading && (
            <p className="no_content">No Content</p>
          )}
          {!loading &&
            starWarsData.map((item) => (
              <div className="start_card">
                <h2>{item.name}</h2>

                <p>{item.films.join(",")}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
