import React, { useState } from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import i18n from '../i18n';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        console.log("Mudando para o idioma:", lng); // Verifique se isso é impresso ao clicar
        i18n.changeLanguage(lng);  // Tenta mudar o idioma
        setSelectedLanguage(lng);  // Atualiza o estado com o idioma selecionado
        localStorage.setItem("lang", lng);  // Armazena no localStorage
    }

    return (
        <div className="dropdown">
            <button 
                className={clsx(styles.textoTrad, "btn bg-transparent dropdown-toggle")} 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                </svg>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button 
                        value="pt" 
                        className={clsx(styles.textoTrad, "dropdown-item")} 
                        type="button" 
                        onClick={() => changeLanguage('pt')}
                    >
                        <img className={clsx(styles.imgTrad)} src="/images/brazil-flag-icon.svg" alt="Português" />  
                        Português
                    </button>
                </li>
                <li>
                    <button 
                        value="en" 
                        className={clsx(styles.textoTrad, "dropdown-item")} 
                        type="button" 
                        onClick={() => changeLanguage('en')}
                    >
                        <img className={clsx(styles.imgTrad)} src="/images/united-states-flag-icon.svg" alt="Inglês" />  
                        Inglês
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSelector;
