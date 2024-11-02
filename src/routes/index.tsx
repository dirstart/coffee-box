import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AssistantPage from '../pages/AssistantPage';
import CategoryPage from '../pages/CategoryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/assistant" element={<AssistantPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
    </Routes>
  );
};

export default AppRoutes;
