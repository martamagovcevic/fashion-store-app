import { useState } from "react"

const SearchBar = ({onSearch}) => {
    const[query,setQuery]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        onSearch(query);
    }

  return (
   <form  className="flex items-center gap-2">

    <input type='text' value={query} onChange={(event)=>setQuery(event.target.value)} placeholder='Search products...'  className="border rounded px-3 py-1" /> 
     <button
        type="submit"
        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
      >Search</button>
   </form>
  )
}

export default SearchBar
