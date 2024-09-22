import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Product from './components/Product';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SaveProductForm from './components/SaveProductForm';
import PublicRoute from './components/PublicRoute';


function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<PublicRoute><Home/></PublicRoute>}/>
        <Route path="/login" element={<PublicRoute><LoginForm /></PublicRoute>} />
        <Route path="/productos" element={<PrivateRoute component={Product}/>} />
        <Route path="/add-product" element={<PrivateRoute component={SaveProductForm}/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
