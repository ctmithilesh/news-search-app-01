import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import Navigation from './Components/Navigation';
import UsersPage from './Pages/UsersPage';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/users' element={<UsersPage />} />
    </Routes>
    </>
  );
}

export default App;
