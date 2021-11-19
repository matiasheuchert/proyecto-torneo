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
import axios from 'axios';

import { Link } from 'react-router-dom'

const Handball = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [equipo, setEquipo] = useState('');
const [celular, setCelular] = useState('');


const handleSubmit = e => {
  e.preventDefault();

  console.log('submit ')
  console.log(name);

  const inscripcion = {
    name: name,
    email: email,
    equipo: equipo,
    celular: celular
  };

  axios.post('/api/handball/teams', inscripcion)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("Error:", err);
    })

  setName('')
  setEmail('')
  setEquipo('')
  setCelular('')
};

return (
<div>


<Link to="/" className="text-decoration-none" style={{color: 'black'}}>
    <div className="container">
        <img src={logo} className="rounded mx-auto d-block logo" alt="logo"/>
        <h1 className="text-center">Copa Tandil <br></br> Handball</h1>
    </div></Link>

    <div className="d-grid gap-2 col-6 mx-auto m-5">
    <Link to="/handball/equipos" className="btn btn-primary bton">VER EQUIPOS INSCRIPTOS</Link>
      </div>

      <hr></hr>
    <h2 className="text-center">INSCRIPCIÓN</h2>
    <div class="m-5">
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
        <label for="floatingInput">Nombre y Apellido del responsable</label>
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
        <label for="floatingInput">Correo electrónico</label>
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
        <label for="floatingInput">Nombre del equipo</label>
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
        <label for="floatingInput">Teléfono celular</label>
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
           <a href="https://wa.me/541138564919"><img src={whatsapp} alt="" width="50%"/></a>
          </div>
          <div className="col">
            <a href="https://instagram.com/copatandil"><img src={instagram} alt="" width="45%"/></a>
          </div>
          <div className="col">
            <a href="https://twitter.com/CopaTandil"><img src={twitter} alt="" width="50%"/></a>
           </div>
           <div className="col">
             <a href="https://facebook.com/copatandilhandball"><img src={facebook} alt="" width="45%"/></a>
           </div>
           <div className="col">
            <a href="https://youtube.com/channel/UCQ9oBFnTlQba-be8eyRQhRg"><img src={youtube} alt="" width="50%" class="mt-2"/></a>
           </div>
           <div className="col">
             <a href="mailto:copatandilhandball@gmail.com"><img src={gmail} alt="" width="45%"/></a>
           </div>
        </div>
      </div>
    </footer>

</div>


)

};
export default Handball;
