import pontos from './Imagens/pontos.svg'
import Foto from './Imagens/Foto.svg'
import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.Header}>

                <p>Gmail</p>
                <p>Imagens</p>
                <img src={pontos}></img>
                <img src={Foto}></img>
                <img src={pontos} alt='ERROR'></img>
                <img src={Foto} alt='ERROR'></img>

        </div>
    )
}

export default Header