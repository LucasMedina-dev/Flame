import '../styles/css/style.css';
import Header from './Header';


const App = ()=> {
    return (
        // Esto equivale a header({id:"header"}), por lo tanto si en Header.js
        // ejecuto un console.log(params), puedo ver las propiedades dadas desde App 
        <Header className="header "/> 
    )
}

export default App;
