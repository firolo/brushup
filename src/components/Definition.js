import './css/Definition.css';

export function Definition(props) {
console.log(props)
    return (
            <>
            <div className="title-def">{props.def.word}</div>
            {
                (props.def.meanings.map(e => e.definitions.map(f=> {return (<><div className="definition">{f.definition}</div><div className="example"> {f.example}</div></>)}))) 
            }
            </>
    )
}