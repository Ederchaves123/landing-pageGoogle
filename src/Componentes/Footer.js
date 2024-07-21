import styles from './Footer.module.css'

function Footer(){
    return(
        <div>
        <div className={styles.Footer}>
            Brasil
        </div>
        <div className={styles.about}>

         <div className={styles.aboutme}>
            <p>Sobre</p>
            <p>Publicidade</p>
            <p>Negócios</p>
            <p>Como funciona a Pesquisa</p>
         </div>
         <div className={styles.aboutmeend}>
            <p>Configurações</p>
            <p>Termos</p>
            <p>Privacidade</p>
          </div>

         
    
        </div>

        </div>

        
    )
}

export default Footer