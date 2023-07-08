import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './core/components/PageHeader';
import Clients from './pages/Clients';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Clients />} />
  </Routes>
);

const RoutesComponent = () => (
  <BrowserRouter>
    <PageHeader />
    <AppRoutes />
  </BrowserRouter>
);

export default RoutesComponent;
