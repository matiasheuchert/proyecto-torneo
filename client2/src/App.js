import logo from './logo.png';
import './css/style.css';
import './css/bootstrap.css';
import iconohandball from './img/iconohandball.png';
import iconobasquet from './img/iconobasquet.png';
import { Link } from 'react-router-dom'
function App() {
  return (

    <div className="App">
      <header className="App-header">
      <div className="container">
        <img src={logo} class="rounded mx-auto d-block logo" alt="logo"/>
        <h1 className="text-center">Copa Tandil <br></br> 2021</h1>
         <div>
         <p className="text-center m-5 fw-bold about">
            Copa Tandil es un evento declarado de interés municipal en el cual los equipos participantes pueden jugar un torneo de balonmano y básquet y participar en actividades de aventura y entretenimiento en las Sierras de Tandil, así como de todas las atracciones y servicios que ofrece esta hermosa y turística ciudad, lo que será una experiencia inolvidable para todos los chicos y chicas participantes y para sus familias. Por otro lado, esta combinación de propuestas, deporte y aventura, ayudar a fortalecer las relaciones personales de los jugadores y fomentar el trabajo en equipo.
        </p>
        </div>
    </div>
    <section className="section">
        <Link to='/handball' className="text-decoration-none">
            <div className="card" style={{borderRadius: '5%'}}>
              <img src={iconohandball} className="card-img-top" alt="..."/>
              <div className="card-body boton">
                  <p className="text-center fw-bold texto">HANDBALL</p>
              </div>
            </div>
            </Link>
        <Link to="/basquet" className="text-decoration-none">
      <div className="card" style={{borderRadius: '5%'}}>
        <img src={iconobasquet} className="card-img-top" alt="..."/>
        <div className="card-body boton">
            <p className="text-center fw-bold texto">BASQUET</p>
        </div>
      </div>
      </Link>
    </section>
    <br></br>
    <br></br>
      </header>
    </div>
  );
}

export default App;
