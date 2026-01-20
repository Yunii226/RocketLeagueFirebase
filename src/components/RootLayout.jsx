import { Outlet } from 'react-router-dom';
import Header from './Header';
import { RootProvider } from '../context/RootContext';

const RootLayout = () => (
    <div className="container shadow p-3 mb-5 rounded" >
        <RootProvider>
            <Header />
            <Outlet />
        </RootProvider>
    </div>
);

export default RootLayout;