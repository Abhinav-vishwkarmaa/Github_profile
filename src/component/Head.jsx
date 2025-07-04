// import React, { use } from "react";
import { useState ,useEffect} from "react";

const Head = () => {
  async function searchProfile() {
    
    const profile = await fetch(
      `https://api.github.com/users?since=${num}&per_page=${Number}`
    );
    const data = await profile.json();
    setData(data);
  }
useEffect(() => {
    searchProfile();
  }, []);
const [Number, setNumber] = useState(10);
const [data, setData] = useState([]);  
const num = Math.floor(Math.random()*10000) + 1;
  return (
    <>
      <div className="head">
        <h1>GITHUB PROFILE</h1>
        <input
          type="number"
          value={Number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            searchProfile();
          }}
        >
          Search
        </button>
      </div>
      <hr />
      <div>
        <h2> Result</h2>
        <div className="card-container">
            {data.map((profile) => {
                return (
                    <div key={profile.id} className="card">
                        <img src={profile.avatar_url} alt="Profile"  className="image"/>
                        <h3>{profile.login}</h3>
                        <p>ID: {profile.id}</p>
                        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                    </div>
                );
            })}
        </div>
      </div>
    </>
  );
};

export default Head;
