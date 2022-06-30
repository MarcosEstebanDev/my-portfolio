import { NavBar } from './components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Portfolio = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}
