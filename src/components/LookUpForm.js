import { useState } from "react";
import { Definition } from "./Definition";

export function LookUpForm() {
    const [definition, setDefinition] = useState([])
    const [word, setWord] = useState("")
    
    function lookup(wordToLookUp) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToLookUp}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDefinition([data[0]])})
            console.log(definition)
        }

    function lookupTest(wordToLookUp) {
        fetch(`/entries/en/test`)
        .then(response => response.json())
        .then(data => {
            const arr = [data[0]]
            setDefinition(arr)})
            console.log('lookuptest'+definition)
        }


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            lookupTest(word)
        }
    }

    return(
        <>
            <input id="lookup" placeholder="Search for a word"
                onChange={e => {
                    return setWord(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
            <button onClick={()=>{lookup(word)}}>Search</button>
            {definition.map( e => <Definition def={e}></Definition>)}
        </>
    )
}