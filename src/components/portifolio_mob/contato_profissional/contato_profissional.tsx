import './contato_profissional.css';
import Linkedin from '../../../assets/Linkedin.png';
import GitHub from '../../../assets/Github.png';
import Mail from '../../../assets/Mail.png';
import MapPoint from '../../../assets/MapPoint.png';

const contatos = [{
    id: 1,
    link: 'https://www.linkedin.com/in/kesley-soares-da-silva-934413301/',
    icon: Linkedin,
    alt: 'Logotipo do Linkedin',
    titulo: 'Linkedin',
    descricao: 'linkedin.com/in/kesley-soares',
  },
  {
    id: 2,
    link: 'https://github.com/kesleys',
    icon: GitHub,
    alt: 'Logotipo do GitHub',
    titulo: 'GitHub',
    descricao: 'github.com/kesleys',
  },
  {
    id: 3,
    link: 'mailto:kesleysoares@proton.me',
    icon: Mail,
    alt: 'Ícone de e-mail',
    titulo: 'E-mail',
    descricao: 'kesleysoares@proton.me',
  },
  {
    id: 4,
    link: 'https://www.google.com/maps/place/Goiânia,+GO',
    icon: MapPoint,
    alt: 'Ícone de pino de mapa',
    titulo: 'Localidade',
    descricao: 'Goiânia/GO - Brasil',
  },
];

export default function ContatoProfissional() {
  return (
    <div className='contato_profissional'>
      <h2>Contato Profissional</h2>

      {contatos.map((contato) => (
        <div key={contato.id} className='formas_de_contato'>
          <a href={contato.link} target='_blank' rel='noopener noreferrer'>
            <img src={contato.icon} alt={contato.alt} />
          </a>
          <div className='textos_contato_profissional'>
            <a href={contato.link} target='_blank' rel='noopener noreferrer'>
                <p className='contatotitulo'>{contato.titulo}</p>
            </a>
            <a href={contato.link} target='_blank' rel='noopener noreferrer'>
                <p className='contatodescricao'>{contato.descricao}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}