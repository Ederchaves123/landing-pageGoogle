import React from 'react';
import Logo from './Imagens/Logo.svg';
import Lupa from './Imagens/Lupa.svg';
import Teclado from './Imagens/Teclado.svg';
import Microfone from './Imagens/Microfone.svg';
import Seguranca from './Imagens/Seguranca.svg';

import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.Main}>
            <a href='http://localhost:3000/'><img className={styles.Logo} src={Logo} alt="Logo" /></a>

            <div className={styles.inputContainer}>
                <input className={styles.inputField} type="text" placeholder="" />

                <img className={styles.iconLupa} src={Lupa} alt="Lupa" />
             <div>
                <img className={styles.iconTeclado} src={Teclado} alt="Teclado" />
                <img className={styles.iconMicrofone} src={Microfone} alt="Microfone" />
             </div>
            </div>
            <div>
                <a href='http://localhost:3000/'><button type='submit' className={styles.button}>Pesquisa Google</button></a>
                <a href='http://localhost:3000/'><button type='submit' className={styles.button}>Estou com sorte</button></a>
            </div>
            <div className={styles.seguranca}>
                <img src={Seguranca} alt="Segurança"/>
                <p>Faça o Check-up de privacidade</p>
            </div>
        </div>
    );
}

export default Main;
