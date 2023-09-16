import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styles } from './Contact.styles';
import './sweetalert-custom.css';

const formId = process.env.REACT_APP_FORMSPREE_ID;

const ContactComponent = () => {
    const { t } = useTranslation();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const formStyle = width < 768 ? styles.formStylesCondensed : styles.form;
    const labelStyle = width < 768 ? styles.labelsCondensed : styles.labels;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('website', website);
        formData.append('message', message);

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                // El formulario se envió correctamente
                Swal.fire({
                    title: t('swalTitle'),
                    text: t('swalText'),
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    backdrop: '#000',
                    customClass: {
                        popup: 'sweetalert-popup',
                        icon: 'sweetalert-icon',
                        confirmButton: 'sweetalert-confirm-button',
                    },
                });
                // Restablecer los campos del formulario
                setName('');
                setEmail('');
                setMessage('');
            } else {
                // Ocurrió un error al enviar el formulario
                Swal.fire({
                    title: 'Error',
                    text: t('alertError'),
                    icon: 'error',
                    confirmButtonText: t('swalButton'),
                    backdrop: '#000',
                    customClass: {
                        popup: 'sweetalert-popup',
                        icon: 'sweetalert-icon',
                        confirmButton: 'sweetalert-confirm-button',
                    },
                });
            }
        } catch (error) {
            toast.error(t('alertError'));
        }
    };

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Contacto</title>
            </Helmet>
            <main style={styles.main}>
                <h1 style={styles.title}>{t('contact')}</h1>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <label htmlFor="name" style={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formName')}:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={styles.inputs}
                    />

                    <label htmlFor="email" style={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formEmail')}:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.inputs}
                    />

                    <label htmlFor="email" style={labelStyle}>{t('formWebsite')}:</label>
                    <input
                        type="website"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        style={styles.inputs}
                    />

                    <label htmlFor="message" style={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formMessage')}:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={styles.textArea}
                    ></textarea>

                    <button type="submit" style={styles.submit}>Enviar</button>
                </form>
            </main>
        </>
    );
};

export default ContactComponent;