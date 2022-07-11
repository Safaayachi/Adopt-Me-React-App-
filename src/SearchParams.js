import { useState } from "react";

const ANIMALS=["birds","cat","dog","dog","rabbit","reptile"];

const SearchParams = () => {
 // const location = "Seattle, WA";

  const [location, setLocation]=useState(""); //"" default location
 
 
 console.log(location);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location {location}
          
          <input id="location" value={location} placeholder="Location" onChange={(e)=>setLocation(e.target.value)} />
        </label>
        <label for="animal">
          Animal
          <select id="animal" value={animal} onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }} 
          onBlur={(e)=> {
            setAnimal(e.target.value);
            setBreed("");
          }}
          >
            
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;