import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/bootstrap.css';
import './css/sports.css';
import logo from './img/logo.png';

const EquiposHandball = () => {
   const [handball, setHandball] = useState([])    
   console.log(handball)
    useEffect(() =>{
      axios.get('/api/handball/teams')
      .then(res => setHandball(res.data.teams))
    }, [])

    const handleClick = (id) => {
      axios.delete(`/api/handball/teams/${id}`)
      .then(res =>{
        setHandball(p =>{
          let newList = []
          handball.forEach(team =>{
            if(team._id !== id) newList.push(team)
          })
          setHandball(newList)
        })
      })
    }
    return(
        <div>
            <a href="../handball" className="text-decoration-none" style={{color: 'black'}}>
    <div className="container">
        <img src={logo} className="rounded mx-auto d-block logo" alt="logo"/>
        <h1 className="text-center">Copa Tandil <br></br> Handball</h1>
    </div></a>

    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre y Apellido del responsable</th>
      <th scope="col">Mail</th>
      <th scope="col">Nombre del Equipo</th>
      <th scope="col">Telefono</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {handball ? handball.map(team => (
      <tr>
        <td>{team.nombre}</td>
        <td>{team.email}</td>
        <td>{team.equipo}</td>
        <td>{team.celular}</td>
        <td><button onClick={() => handleClick(team._id)} type="submit" className="btn-primary btn">Eliminar</button></td>
      </tr> 
    )) : <p> No hay equipos inscriptos! </p>}
  </tbody>
</table>
        </div>
    )
};
export default EquiposHandball;
