import { useState } from 'react';
import Input from './Input.jsx';
import { useEffect } from 'react';
function App() {
   const [hint,setHint]=useState("");
   const [suggestions,setSuggestions]=useState(["shiraz"]);
   const [query,setQuery]=useState("");


useEffect(() => {
   
  fetch('/cities.json')
  .then(res=>res.json())
  .then(data=>setSuggestions(data));


}, [])







   const handleChange=(e)=>{
      
      const input=e.target.value.trim();
      
      const hnt=suggestions.filter(s=>s.startsWith(input))[0] || "";
      setHint(input ? hnt :'');
      setQuery(input);
      
      
   }
   return(
      <main>
         <label htmlFor="input">Cities: </label>
         <Input handleChange={handleChange} value={query} hint={hint}/>
      </main>
   );
    
}

export default App;
