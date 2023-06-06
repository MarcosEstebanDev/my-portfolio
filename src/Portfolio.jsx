import { NavBar } from './components/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import { ParticlesBackground } from './components/config/particlesBackground.jsx'
export const Portfolio = () => {
    return (
        <div>
         <ParticlesBackground/>
        <NavBar />
            <Outlet />
           
        </div>
    );
}
