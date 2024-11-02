import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AssistantPage from '../pages/AssistantPage';
import CategoryPage from '../pages/CategoryPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/assistant" element={<AssistantPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
