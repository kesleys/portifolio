import NomeFoto from '../../components/portifolio_mob/nome_e_foto/nome_e_foto';
import Linkedin from '../../assets/Linkedin.png';
import GitHub from '../../assets/Github.png';
import Mail from '../../assets/Mail.png';
import MapPoint from '../../assets/MapPoint.png';
import './Portifolio_mobile.css';

export default function PortifolioMobileLight () {
    return (
    <div className='div_portifolio_mobile_light'> 
        <NomeFoto />

        <div className='contato_profissional'>
    <h2>Contato Profissional</h2>

    {/* --- Linkedin --- */}
    <div className='formas_de_contato'>
        <a href='https://www.linkedin.com/in/kesley-soares-da-silva-934413301/' target='_blank' rel='noopener noreferrer'>
            <img src={Linkedin} alt="Logotipo do Linkedin" />
        </a>
        <div className='textos_contato_profissional'>
            <p className='contatotitulo'>Linkedin</p>
            <p className='contatodescricao'>linkedin.com/in/kesley-soares</p>
        </div>
    </div>

    {/* --- GitHub --- */}
    <div className='formas_de_contato'>
        <a href='https://github.com/kesleys' target='_blank' rel='noopener noreferrer'>
            <img src={GitHub} alt="Logotipo do GitHub" />
        </a>
        <div className='textos_contato_profissional'>
            <p className='contatotitulo'>GitHub</p>
            <p className='contatodescricao'>github.com/kesleys</p>
        </div>
    </div>

    {/* --- E-mail --- */}
    <div className='formas_de_contato'>
        <a href='mailto:kesleysoares@proton.me'>
            <img src={Mail} alt="Ícone de e-mail" />
        </a>
        <div className='textos_contato_profissional'>
            <p className='contatotitulo'>E-mail</p>
            <p className='contatodescricao'>kesleysoares@proton.me</p>
        </div>
    </div>

    {/* --- Localidade --- */}
    <div className='formas_de_contato'>
        <a href='https://www.google.com/maps/place/Goiânia,+GO' target='_blank' rel='noopener noreferrer'>
            <img src={MapPoint} alt="Ícone de pino de mapa" />
        </a>
        <div className='textos_contato_profissional'>
            <p className='contatotitulo'>Localidade</p>
            <p className='contatodescricao'>Goiânia/GO - Brasil</p>
        </div>
    </div>

</div>

    </div>);
}