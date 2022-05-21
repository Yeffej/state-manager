import React from "react";
import CODE from "../../code";

function UseState(props) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [codeValue, setCodeValue] = React.useState("")
    const [checked, setChecked] = React.useState(false)
    const [deleted, setDeleted] = React.useState(false)

    // Declarative Actions
    const onLoading = () => setLoading(true)
    const onTyping = (e)=> setCodeValue(e.target.value)
    const onUncheck = () => setChecked(false)
    const onReset = ()=> setDeleted(false)

    const onError = ()=> {
        setLoading(false)
        setError(true)
    }

    const onChecked = () => {
        setLoading(false)
        setError(false)
        setChecked(true)
    }

    const onDelete = ()=> {
        setChecked(false)
        setDeleted(true)
        setCodeValue("")
    }

    React.useEffect(()=> {
        if(!!loading) {
            setTimeout(()=> {
                if(codeValue === CODE) {
                    return onChecked();
                }
                
                onError()
            }, 2000)
        }

    }, [loading])


    if(deleted && !checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Eliminado con éxito</h4>
                <div className="State_action">
                    <button onClick={onReset}>Resetear</button>
                </div>
            </div>
        )
    } 
    
    if(checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Seguro que quieres eliminar: {props.Name}</h4>
                <div className="State_action">
                    <button onClick={onDelete}>Sí, eliminar</button>
                    <button onClick={onUncheck}>No, volver atrás</button>
                </div>
            </div>
        )
    }

    // if any of the above statements are true then by default: 
    return(
        <div className="State">
            <h2 className="State_title">Eliminar {props.Name}</h2>
            <h4 className="State_subtitle">Por favor Escribe el codigo de seguridad</h4>

            {error && !loading && <p>Error: el código es incorrecto</p>}

            {loading && <p>Loading...</p>}

            {!loading && 
                <div className="State_action">
                    <input type="text" placeholder="Código de Seguridad"
                        name="secureCode" value={codeValue}
                        onChange={onTyping}
                    />
                    <button onClick={onLoading}>Comprobar</button>
                </div>
            }
        </div>
    )
}

export default UseState;
