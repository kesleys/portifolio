import './nome_e_foto.css';
import FotoPerfil from "../../../assets/Foto_Perfil.png"


export default function NomeFoto (){
    return (
    <div className='div_nome_e_foto'>
        <div className="header_bg_mobile_light" >
                <div style={{width: 800, height: 800, left: 0, top: 337, position: 'absolute', background: 'var(--Laranja-Opaco, #165BAB)', borderRadius: 9999}} />
                <div style={{width: 1025, height: 1025, left: 429, top: 24, position: 'absolute', background: 'var(--Azul, #AD2831)', borderRadius: 9999}} />
        </div>
        <div className='nome_e_foto_portifolio_mobile_light'>
            <img src={FotoPerfil} />
            <div>
                <h1>Kesley Soares da Silva</h1>
                <p>Engenharia de Software | UFG</p>
            </div>
        </div>
    </div>);
}