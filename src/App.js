import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Main } from './components/Main';
import { Header } from './components/layouts/Header';
import Box from '@mui/material/Box';
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
              {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
            </Routes>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
