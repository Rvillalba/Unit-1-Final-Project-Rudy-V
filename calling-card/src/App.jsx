import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
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
                        <Route path="/" element={<Landing />} />
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