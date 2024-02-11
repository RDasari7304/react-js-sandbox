import { useState } from "react";

export default function Dictionary(){
    const [search, setSearch] = useState('');

    return(
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <p>Let's get the definition for the word: {search}</p>
        </div>
    );
}