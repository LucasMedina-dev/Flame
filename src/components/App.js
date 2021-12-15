import '../styles/css/style.css';
import Header from './Header';
import Main from './Main'
import { BrowserRouter } from 'react-router-dom';

const App = ()=> {
    let userName= "Victoria";
    return (
        // Esto equivale a header({id:"header"}), por lo tanto si en Header.js
        // ejecuto un console.log(params), puedo ver las propiedades dadas desde App
        <BrowserRouter>
            <Header className="header"/>
            <Main userName={userName}/>
        </BrowserRouter>
    )
}

export default App;
