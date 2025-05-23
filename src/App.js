import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Fotter";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import './styles/main.sass';
import 'antd/dist/reset.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from "./pages/LoginPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/loginPage"
                    element={
                        <ProtectedRoute>
                            <LoginPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}


export default App;
