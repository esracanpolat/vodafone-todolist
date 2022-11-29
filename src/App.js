import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Main } from './components/Main';
import { Header } from './components/layouts/Header';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Container>
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
