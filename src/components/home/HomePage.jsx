import { Link } from 'react-router-dom';
import { Transition } from '../transition/Transition';
import './home.css';

export const HomePage = () => {
    return (
        <div className='page' id='home'>
            <Transition title='Inicio' />
            <div className='home__content'>
            <h1 className='name'>
                    Marcos Esteban Godoy
                </h1>
                <p className='info'>Software Developer</p>
                <Link to='/contact' className='contact_btn'>Contactame</Link>
                <div className='home__buttons'>
                    <a href='https://github.com/MarcosEstebanDev' target='_blank' rel='noreferrer'>
                        <img src='./img/github.png' alt='github logo' />
                        GitHub
                    </a>
                    <a href='https://www.linkedin.com/in/marcos-godoy92' target='_blank' rel='noreferrer'>
                        <img src='./img/linkedin.png' alt='linkedin logo' />
                        Linkedin
                    </a>
                </div>
            </div>
           
        </div>
    )
}
