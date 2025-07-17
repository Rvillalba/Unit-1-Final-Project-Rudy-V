import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import CardCreate from './components/CardCreate';
import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
            
            <Router>
                <Routes>
                    <Route path="/create" element={<CardCreate />} />
                </Routes>
            </Router>
            
        
        </div>
    )
}
export default App