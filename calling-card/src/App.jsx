import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import CardCreate from './components/CardCreate';
import Saved from './components/SavedCards';
import Preview from './components/Preview';
import Register from './components/Register';
import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/create" element={<CardCreate />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/preview" element={<Preview />} />
                        <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App