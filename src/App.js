import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<AdminLayout />} >
                  <Route path="/admin/home" element={<Home />} />
                  <Route path="/admin/about" element={<About />} />
                  <Route index path="/admin/products" element={<Products />} />
              </Route>    
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
