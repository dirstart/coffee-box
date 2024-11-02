import { Routes, Route } from 'react-router-dom';
import App from '../App';
import AssistantPage from '../pages/AssistantPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/assistant" element={<AssistantPage />} />
    </Routes>
  );
};

export default AppRoutes;
