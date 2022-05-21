import React from "react";
import CODE from "../../code";
import { actionsTypes, reducer } from "./reducer"

function UseState(props) {
    const [state, dispatch] = React.useReducer(reducer, {
        loading: false,
        error: false,
        codeValue: "",
        checked: false,
        deleted: false
    })

    React.useEffect(()=> {
        if(!!state.loading) {
            setTimeout(()=> {
                    if(state.codeValue === CODE) {
                        return dispatch({type: actionsTypes.CHECKED})
                    }
                    
                    dispatch({type: actionsTypes.ERROR})
            }, 2000)
        }

    }, [state.loading])

    if(state.deleted && !state.checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Eliminado con éxito</h4>
                <div className="State_action">
                    <button onClick={()=> dispatch({type: actionsTypes.RESET})}>
                        Resetear
                    </button>
                </div>
            </div>
        )
    } 
    
    if(state.checked) {
        return (
            <div className="State">
                <h4 className="State_subtitle">Seguro que quieres eliminar: {props.Name}</h4>
                <div className="State_action">
                    <button onClick={()=> 
                        dispatch({type: actionsTypes.DELETE})
                    }>Sí, eliminar</button>
                    <button onClick={()=> 
                        dispatch({type: actionsTypes.UNCHECK})
                    }>No, volver atrás</button>
                </div>
            </div>
        )
    }

    // if any of the above statements are true then by default: 
    return(
        <div className="State">
            <h2 className="State_title">Eliminar {props.Name}</h2>
            <h4 className="State_subtitle">Por favor Escribe el codigo de seguridad</h4>

            {state.error && !state.loading && <p>Error: el código es incorrecto</p>}

            {state.loading && <p>Loading...</p>}

            {!state.loading && 
                <div className="State_action">
                    <input type="text" placeholder="Código de Seguridad"
                        name="secureCode" value={state.codeValue}
                        onChange={ ({ target: { value } }) =>
                            dispatch({type: actionsTypes.TYPING, payload: value })
                        }
                    />
                    <button onClick={()=> 
                        dispatch({type: actionsTypes.LOADING})
                    }>Comprobar</button>
                </div>
            }
        </div>
    )
}

export default UseState;
