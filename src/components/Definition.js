import './css/Definition.css';

export function Definition(props) {

    return (
            <>
                <div className="definition">{props.def.word} {props.def.phonetic}</div>
                <div className="definition">Definitions:</div>
                {props.def.meanings.map(e => e.definitions.map(f=> {
                    return (<div className="definition">{f.definition}: {f.example}</div>)}))}
            </>
    )
}