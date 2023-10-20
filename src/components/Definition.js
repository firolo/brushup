import './css/Definition.css';

export function Definition(props) {

    return (
            <>
            <div className="title-def">{props.def.word} {props.def.phonetic}</div>
            {
                (props.def.meanings.map(e => e.definitions.map(f=> {return (<><div className="definition">{f.definition}</div><div className="example"> {f.example}</div></>)}))) 
            }
            </>
    )
}