import { useState } from "react";
import { Definition } from "./Definition";

export function LookUpForm() {
    const [definition, setDefinition] = useState("nothing yet")

    function handleSubmit(e) {
        e.preventDefault()
        setDefinition(e.target.lookup.value)
        console.log(e)
        console.log(definition)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input id="lookup" placeholder="Search for a word"/>
                <button>Search</button>
            </form>
            <Definition def={definition}></Definition>
        </>
    )
}