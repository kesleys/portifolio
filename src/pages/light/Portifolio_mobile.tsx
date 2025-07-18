import './Portifolio_mobile.css';
import FotoPerfil from "../assets/Foto_Perfil.png"

export default function PortifolioMobileLight () {
    return (
    <div className='div_portifolio_mobile_light'> 

        <div className="header_bg_mobile_light" >
            <div style={{width: 800, height: 800, left: 0, top: 337, position: 'absolute', background: 'var(--Laranja-Opaco, #AD2831)', borderRadius: 9999}} />
            <div style={{width: 1000, height: 1000, left: 429, top: 0, position: 'absolute', background: 'var(--Azul, #165BAB)', borderRadius: 9999}} />
        </div>

        <div className='nome_e_foto_portifolio_mobile_light'>
            <img src={FotoPerfil} />
            <div>
                <h1>Kesley Soares da Silva</h1>
                <h2>Engenharia de Software | UFG</h2>
            </div>
        </div>

    </div>);
}