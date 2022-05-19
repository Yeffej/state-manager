import React from "react";
import CODE from "../../code";

function UseState(props) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [codeValue, setCodeValue] = React.useState("")
    const [checked, setChecked] = React.useState(false)
    const [deleted, setDeleted] = React.useState(false)

    React.useEffect(()=> {
        if(!!loading) {
            setTimeout(()=> {
                    if(codeValue === CODE) {            
                        setLoading(false)
                        setError(false)
                        setChecked(true)
                        return;
                    }
                    
                    setLoading(false)
                    setError(true)
                
            }, 2000)
        }

    }, [loading])

    if(deleted && !checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Eliminado con éxito</h4>
                <div className="State_action">
                    <button onClick={()=> {
                        setDeleted(false)
                    }}>Resetear</button>
                </div>
            </div>
        )
    } 
    
    if(checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Seguro que quieres eliminar: {props.Name}</h4>
                <div className="State_action">
                    <button onClick={()=> {
                        setChecked(false)
                        setDeleted(true)
                        setCodeValue("")
                    }}>Sí, eliminar</button>
                    <button onClick={()=> {
                        setChecked(false)
                    }}>No, volver atrás</button>
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
                        onChange={(e)=> 
                            setCodeValue(e.target.value)
                        }
                    />
                    <button onClick={()=> {
                        setLoading(true)
                    }}>Comprobar</button>
                </div>
            }
        </div>
    )
}

export default UseState;
