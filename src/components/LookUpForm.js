import { useState } from "react";
import { Definition } from "./Definition";

export function LookUpForm() {
    const [definition, setDefinition] = useState("clear")
    const [word, setWord] = useState("")
    //const [wordToLookUp, setWordToLookUp] = useState("")
    
    function lookup(wordToLookUp) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToLookUp}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDefinition(data[0])})
        }

    return(
        <>
            <input id="lookup" placeholder="Search for a word"
                onChange={e => {
                    return setWord(e.target.value);
                }}
            />
            <button onClick={()=>{lookup(word)}}>Search</button>
            <Definition def={definition}></Definition>
        </>
    )
}