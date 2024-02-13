import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StatusError(){
    let {search} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        console.log(search);
    });

    return(
        <div className="flex justify-center items-center min-h-screen">
            {search ? 

            <div className="flex">
                <p className="mx-3"> {search.toUpperCase()} does not have any definitions on record </p> 
                <button className='bg-purple-400 hover:bg-purple-600 hover:scale-110 text-white font-bold py-2 px-4 rounded'
                onClick= {() => {
                    navigate("/definition");
                }}
                > Search Another </button>
            </div>: 
            <p className="text-lg"> 404: The data you requested can not be found. </p>
            
            }
            
        </div>
    );
}