import './App.css'
import { Route, Routes } from 'react-router-dom';
import ProductsView from './Views/Products';
import AdminProductView from './Views/login';
import FormCreate from './components/adminProduct/formCreate';

function App() {

  return (
    <>
      <Routes>
        {/* rutas públicas */}
        <Route path="/" element={<ProductsView />} />
        {/* rutas admin */}
        <Route path="/login" element={<AdminProductView />} />
        <Route path="/admin" element={<ProductsView isAdmin={true} />} />
        <Route path="/admin/create" element={<FormCreate />} />
      </Routes>

    </>
  )
}

export default App
