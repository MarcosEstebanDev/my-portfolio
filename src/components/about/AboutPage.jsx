import { Transition } from '../transition/Transition';
import certificates from '../../data/certificate.json';
import stack from '../../data/stack.json';
import './about.css';

export const AboutPage = () => {
    return (
        <div className='page'>
            <Transition title='Sobre Mí' />
            <h2 className='subtitle'>Sobre Mí</h2>
            <div className='about'>
                <p className='about__info'>
                Mi nombre es Marcos Esteban Godoy, actualmente me encuentro en Cordoba, Capital, Argentina.<br/>
                Soy un desarrollador con experiencia tanto en el desarrollo Front end como Back end, así como en la
Arquitectura de software y otras tecnologías como Javascript, Typescript, Node.js, Express, MongoDB, Sql Server, React, CSS, HTML, entre otras. He trabajado en varios proyectos y adquirido conocimientos en diversas tecnologías a través de proyectos que afirman mi conocimiento en este campo.<br/>
                Busco acompañar el proceso de evolución digital de las organizaciones, aportando todos mis conocimientos para brindar soluciones y alcanzar los mejores resultados.</p>
                <div className='about__stack'>
                    <p>Tecnologias con las que trabajo</p>
                    <ul className='stack-list'>
                        {
                            stack.map(technology => (
                                <li className='stack-list__item' key={ technology.name }>
                                    <img
                                        className='stack-list__img'
                                        src={ `/img/${technology.img}.png` }
                                        alt={ `${technology.img} logo` }
                                    />
                                    <p>{ technology.name }</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='about__certificates'>
                    <p>Mis certificados</p>
                    <ul>
                        {
                            certificates.map(certificate => (
                                <li key={ certificate.name } className='certificate'>
                                    <div className='certificate__info'>
                                        <img src={ `/img/${certificate.img}.png` } alt="" className='certificate__img' />
                                        <p>{ certificate.name }</p>
                                    </div>
                                    <a href={ certificate.link } target='_blank' rel='noreferrer' className='certificate__link'>
                                        Ver
                                        <span className='material-symbols-outlined'>
                                            open_in_new
                                        </span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
