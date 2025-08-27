import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Subscription from './pages/Subscription';
import Billing from './pages/Billing';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="billing" element={<Billing />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
