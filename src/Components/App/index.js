//react

//Components
import UseState from "../UseState"
import ClassState from "../ClassState"
import ComposeUseState from "../ComposeUseState"
import SemiDeclarativeUseState from "../SemiDeclarativeUseState"
import DeclarativeUseState from "../DeclarativeUseState"

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <UseState Name="UseState"/>
      <ClassState Name="ClassState"/>
      <ComposeUseState Name="Compose UseState"/>
      <SemiDeclarativeUseState Name="Semi-Declarative UseState"/>
      <DeclarativeUseState Name="Declarative UseState"/>
    </div>
  );
}

export default App;
