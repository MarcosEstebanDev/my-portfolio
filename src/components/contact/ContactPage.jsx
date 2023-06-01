import './contact.css';
import { Transition } from '../transition/Transition';
import { useState } from 'react';

export const ContactPage = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        success: false,
        error: false,
        loading: false,
        nameMissing: false,
        emailMissing: false,
        messageMissing: false
    });

    const {
        name,
        email,
        message,
        nameMissing,
        emailMissing,
        messageMissing,
        success,
        error,
        loading
    } = state;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const missings = {
            nameMissing: !name,
            emailMissing: !email,
            messageMissing: !message
        }
        if(!name || !email || !message) {
            return setState({
                ...state,
                ...missings
            });
        }
        setState({
            ...state,
            ...missings,
            loading: true
        });

        try {
            const rawRes = await fetch('https://formspree.io/f/mzboqgpd', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, message})
            });
            const res = await rawRes.json();
            if (res.ok) {
                setState({
                    ...state,
                    ...missings,
                    loading: false,
                    success: true
                });
            } else {
                setState({
                    ...state,
                    loading: false,
                    error: true
                });
            }
        } catch (error) {
            setState({
                ...state,
                ...missings,
                loading: false,
                error: true
            });
        }
        setTimeout(() => {
            setState({
                ...state,
                error: false,
                success: false
            });
        }, 4000);
    }
    

    return (
        <div className='page'>
            {
                (nameMissing || emailMissing || messageMissing) &&
                <p className='animate__animated animate__zoomIn msg msg__danger'>Faltan campos por completar</p>
            }
            {
                loading &&
                <p className='animate__animated animate__zoomIn msg msg__success'>Enviando...</p>
            }
            {
                success &&
                <p className='animate__animated animate__zoomIn msg msg__success'>
                    <span className="material-symbols-outlined">check_circle_outline</span>
                    Mensaje Enviado
                </p>
            }
            {
                error && 
                <p className='animate__animated animate__zoomIn msg msg__danger'>Error</p>
            }
            <Transition title='Contacto' />
            <h2 className='subtitle'>Contacto</h2>
            <div className='contact-content'>
                <div className='contact-content__extras'>
                    <a
                        className='contact-extra'
                        href='https://www.linkedin.com/in/marcos-godoy92'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/linkedin.png' alt='linkedin logo' />
                        <p className='contact-extra__text'>Linkedin</p>
                    </a>
                    <a
                        className='contact-extra'
                        href='https://github.com/MarcosGodoydevelopped'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/github.png' alt='github logo' />
                        <p className='contact-extra__text'>GitHub</p>
                    </a>
                    <a
                        className='contact-extra'
                        href='mailto:marcosestebandev@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/email.png' alt='email logo' />
                        <p className='contact-extra__text'>Correo</p>
                    </a>
                </div>
                <form
                    className='contact-form'
                    onSubmit={ handleSubmitForm }
                >
                    <h3 className='contact-form__title'>Enviame un mensaje</h3>
                    <div className='contact-form__inputs'>
                        <input
                            id='name'
                            className={ !nameMissing ? 'contact-form__input' : 'contact-form__input missing-input' }
                            name='name'
                            placeholder='Nombre'
                            type='text'
                            value={ name }
                            onChange={ handleInputChange }
                        />
                        <input
                            id='email'
                            className={ !emailMissing ? 'contact-form__input' : 'contact-form__input missing-input' }
                            name='email'
                            placeholder='Correo'
                            type='email'
                            value={ email }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <textarea
                        id='message'
                        className={ !messageMissing ? 'contact-form__textarea' : 'contact-form__textarea missing-textarea' }
                        name='message'
                        placeholder='Mensaje'
                        rows='10'
                        value={ message }
                        onChange={ handleInputChange }
                    ></textarea>
                    <div className='center'>
                        <button
                            className='contact-form__button'
                            type='submit'
                            disabled={state.submitting}
                        >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
