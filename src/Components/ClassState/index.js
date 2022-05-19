import React from "react";
import Loading from "./Loading";
import CODE from "../../code"

class ClassState extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            error: false,
            codeValue: ""
        }
    }

    componentDidUpdate() {
        console.log("code: ", this.state.codeValue)

        if(!!this.state.loading) {
            console.log("Updating Component")
            setTimeout(()=> {
                if(this.state.codeValue === CODE) {
                    return this.setState({ loading: false, error: false, checked: true })
                }
                
                this.setState({ loading: false, error: true })
                console.log("Component Updated")
            }, 2000)
        }
    }

    render() {
        const loaded = !this.state.loading

        if(this.state.deleted && !this.state.checked) {
            return (
                <div className="State">
                    <h4 className="State_subtitle">Eliminado con éxito</h4>
                    <div className="State_action">
                        <button onClick={()=> {
                            this.setState({deleted: false})
                        }}>Resetear</button>
                    </div>
                </div>
            )
        } 
        
        if(this.state.checked) {
            return (
                <div className="State">
                    <h4 className="State_subtitle">
                        Seguro que quieres eliminar: {this.props.Name}
                    </h4>
                    <div className="State_action">
                        <button onClick={()=> {
                            this.setState({deleted: true, checked: false, codeValue: ""})
                        }}>Sí, eliminar</button>
                        <button onClick={()=> {
                            this.setState({ checked: false })
                        }}>No, volver atrás</button>
                    </div>
                </div>
            )
        }

        return (
            <div className="State">
                <h2 className="State_title">Eliminar {this.props.Name}</h2>
                <h4 className="State_subtitle">Por favor Escribe el codigo de seguridad</h4>

                {this.state.error && loaded && <p>Error: el código es incorrecto</p>}

                {this.state.loading && <Loading/>}

                {loaded && 
                    <div className="State_action">
                        <input type="text" placeholder="Código de Seguridad"
                            name="secureCode" value={this.state.codeValue}
                            onChange={(e)=> 
                                this.setState({ codeValue: e.target.value })
                            }
                        />
                        <button onClick={()=> {
                            this.setState({ loading: true })
                        }}>Comprobar</button>
                    </div>
                }
            </div>
        )
    }
}

export default ClassState;
