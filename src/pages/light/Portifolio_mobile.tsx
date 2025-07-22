import ContatoProfissional from '../../components/portifolio_mob/contato_profissional/contato_profissional';
import NomeFoto from '../../components/portifolio_mob/nome_e_foto/nome_e_foto';
import './Portifolio_mobile.css';

export default function PortifolioMobileLight () {
    return (
    <div className='div_portifolio_mobile_light'> 
        <NomeFoto />
        <ContatoProfissional/>

    </div>);
}