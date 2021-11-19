import instagram from './img/redes/instagram.png';
import whatsapp from './img/redes/whatsapp.png';
import facebook from './img/redes/facebook.png';
import twitter from './img/redes/twitter.png';
import youtube from './img/redes/youtube.png';
import gmail from './img/redes/gmail.png';
import './css/bootstrap.css';
import './css/sports.css';
import logo from './img/logo.png';
import { useState } from 'react';

import { Link } from 'react-router-dom'

const Basquet = () => {

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [equipo, setEquipo] = useState('');
const [celular, setCelular] = useState('');


const handleSubmit = e => {
  e.preventDefault();
  console.log(name);
  const inscripcionesBasquet = JSON.parse(localStorage.getItem('inscripcionesBasquet')) || [];
  const inscripcion = {
    name: name,
    email: email,
    equipo: equipo,
    celular: celular

  };
  inscripcionesBasquet.push(inscripcion);
  localStorage.setItem('inscripcionesBasquet', JSON.stringify(inscripcionesBasquet))
};
  return(

    <div>
        <Link to="/" className="text-decoration-none" style={{color: 'black'}}>
    <div class="container">
        <img src={logo} className="rounded mx-auto d-block logo" alt="logo"/>
        <h1 className="text-center">Copa Tandil <br></br> Basquet</h1>
    </div></Link>

    <div className="d-grid gap-2 col-6 mx-auto m-5">
        <Link to="/basquet/equipos" className="btn btn-primary bton">VER EQUIPOS INSCRIPTOS</Link>
      </div>

      <hr></hr>

      <h2 className="text-center">INSCRIPCIÓN</h2>
    <div className="m-5">
    <form onSubmit={handleSubmit}>
    <div className="form-floating mb-3">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          name="nombre"
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Nombre y Apellido"
        />
        <label htmlFor="floatingInput">Nombre y Apellido del responsable</label>
      </div>
      <div className="form-floating mb-3">
        <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        name="mail" 
        type="email" 
        className="form-control" 
        id="floatingInput" 
        placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Correo electrónico</label>
      </div>
      <div className="form-floating mb-3">
        <input 
        value={equipo}
        onChange={e => setEquipo(e.target.value)}
        name="equipo" 
        type="text" 
        className="form-control" 
        id="floatingInput" 
        placeholder="Equipo"
        />
        <label htmlFor="floatingInput">Nombre del equipo</label>
      </div>
      <div className="form-floating mb-3">
        <input 
        value={celular}
        onChange={e => setCelular(e.target.value)}
        name="celular" 
        type="number" 
        className="form-control" 
        id="floatingInput" 
        placeholder="Teléfono"
        />
        <label htmlFor="floatingInput">Teléfono celular</label>
      </div>
      <button type="submit" className="btn btn-primary bton">Enviar</button>
    </form>
    </div>
    <hr></hr>

    <footer className="m-5">

        <h1 className="text-center m-5">REDES SOCIALES</h1>

    <div className="container px-4 redes">
        <div className="row gx-5 redes">
          <div className="col">
           <img src={whatsapp} alt="" width="50%"/>
          </div>
          <div className="col">
            <img src={instagram} alt="" width="45%"/>
          </div>
          <div className="col">
            <img src={twitter} alt="" width="50%"/>
           </div>
           <div className="col">
             <img src={facebook} alt="" width="45%"/>
           </div>
           <div className="col">
            <img src={youtube} alt="" width="50%" class="mt-2"/>
           </div>
           <div className="col">
             <img src={gmail} alt="" width="45%"/>
           </div>
        </div>
      </div>
    </footer>
    </div>
)
}
export default Basquet;