import Users from 'pages/Users';
import FormUserUpdate from 'pages/Users/FormUserUpdate';
import UserDetails from 'pages/Users/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './core/components/PageHeader';
import Clients from './pages/Clients';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<FormUserUpdate />} />
      <Route path="/users/details/:userId" element={<UserDetails />} />
    </Routes>
  </>
);

const RoutesComponent = () => (
  <BrowserRouter>
    <PageHeader />
    <AppRoutes />
  </BrowserRouter>
);

export default RoutesComponent;
