import logo from './logo.svg';

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Fotter";
import LoginForm from "./components/LoginForm";
import './styles/main.sass';


function App() {
    return (
        <div className="App">
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}


export default App;
