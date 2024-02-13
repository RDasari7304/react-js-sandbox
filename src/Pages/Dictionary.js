import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dictionary(){
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    return(
        <div className="flex justify-center items-center min-h-screen">
            <label htmlFor= "wordInput"> Definition of: </label>
            <input id= "wordInput" type= "text" placeholder="Type word" className="mx-3"
            onChange= {(e) => {setWord(e.target.value);}}
            />
            <button className='bg-purple-400 hover:bg-purple-600 hover:scale-110 text-white font-bold py-2 px-4 rounded'
            onClick= {() => {navigate('/definition/' + word);}}
            > Search </button>
        </div>
    );
}