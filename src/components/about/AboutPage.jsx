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
               ¡Hola! Soy Marcos Esteban Godoy, un apasionado desarrollador de software de Córdoba, Capital, Argentina. Tengo experiencia tanto en el desarrollo Front-end como en el Back-end, y también en la Arquitectura de software. Me siento cómodo trabajando con tecnologías como JavaScript, TypeScript, Node.js, Express, MongoDB, SQL Server, React, CSS, HTML, entre otras.

A lo largo de mi trayectoria, he trabajado en diversos proyectos, lo que me ha permitido adquirir conocimientos sólidos y mantenerme actualizado en el campo del desarrollo de software. Mi objetivo es contribuir al proceso de evolución digital de las organizaciones, brindando soluciones efectivas y obteniendo los mejores resultados.

Soy un profesional comprometido y siempre estoy dispuesto a enfrentar nuevos desafíos. Me encanta colaborar en equipos multidisciplinarios y me esfuerzo por mantener una comunicación efectiva. Si estás buscando un desarrollador entusiasta y altamente capacitado, estaré encantado de formar parte de tu proyecto y ayudar a alcanzar el éxito.

¡Espero tener la oportunidad de trabajar juntos y hacer grandes cosas!.</p>
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
