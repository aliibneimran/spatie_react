import React, { useState, useEffect } from "react";

export default function Language() {
    const [currentLang, setCurrentLang] = useState('en');
    const [flag, setFlag] = useState('/assets/images/flags/usa.png');
    const languages = {
        en: { name: 'English', flag: '/assets/images/flags/usa.png' },
        bn: { name: 'Bangla', flag: '/assets/images/flags/bangladesh.png' },
        fr: { name: 'French', flag: '/assets/images/flags/france.png' },
        es: { name: 'Spanish', flag: '/assets/images/flags/spain.png' },
    };

    useEffect(() => {
        // This effect runs once on component mount to set the initial language
        const initialLang = localStorage.getItem('currentLang') || 'en';
        setCurrentLang(initialLang);
        setFlag(languages[initialLang].flag);
    }, []);

    const handleChange = (lang) => {
        const url = route('change.lang'); // Assuming route is globally available
        localStorage.setItem('currentLang', lang);
        setCurrentLang(lang);
        setFlag(languages[lang].flag);
        window.location.href = `${url}?lang=${lang}`;
    };

    return (
        <>
            <a
                className="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
            >
                <img
                    src={flag}
                    alt="user-image"
                    className="me-0 me-sm-1"
                    height={18}
                />
                <span className="align-middle d-none d-lg-inline-block">
                    {languages[currentLang].name}
                </span>
                <span className="mdi mdi-chevron-down fs-22 d-none d-sm-inline-block align-middle" />
            </a>

            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                {Object.entries(languages).map(([lang, { name, flag }]) => (
                    <a
                        key={lang}
                        className="dropdown-item"
                        onClick={() => handleChange(lang)}
                    >
                        <img
                            src={flag}
                            alt="user-image"
                            className="me-1"
                            height={18}
                        />
                        <span className="align-middle">{name}</span>
                    </a>
                ))}
            </div>
        </>
    );
}
