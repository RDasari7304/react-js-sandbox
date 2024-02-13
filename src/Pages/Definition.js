import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Definition(){
    const [partsSpeechButtons, setButtons] = useState([]);
    const [definitions, setDefinitions] = useState([]);
    const [label, setLabel] = useState('Choose the part of speech for the definition:');
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
        .then((response) => {
            if(response.status === 404){
                navigate("/404/" + search);
                return null;
            }
            return response.json()
        })
        .then((data) => {
            if(data){
                const meanings = data[0].meanings;
                const partsOfSpeech = meanings.flatMap((meaning, index) => ({index: index, partOfSpeech: meaning.partOfSpeech}));
                const definitions = meanings.flatMap((meaning) => meaning.definitions[0].definition);
                setDefinitions(definitions);
                setButtons(partsOfSpeech);
            }
        })
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen space-x-6">
                <p > {label} </p>

                
            <>
                {partsSpeechButtons.map((button) => {
                  return (<button 
                    className='bg-purple-400 hover:bg-slate-600 hover:scale-125 text-white font-bold py-2 px-4 rounded' 
                    onClick= {() => {setButtons([]); setLabel(definitions[button.index]); }}
                    >
                      {button.partOfSpeech}
                    </button>)
                })}
            </>
            </div>

        </div>
    );
}