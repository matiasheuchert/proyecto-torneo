import './css/bootstrap.css';
import './css/sports.css';
import logo from './img/logo.png';
const basquet = JSON.parse(localStorage.getItem('inscripcionesBasquet'));

const EquiposBasquet = () => {
    
    const handleClick = e => {
      console.log(e.target.parentElement.parentElement);
      const este = e.target.parentElement.parentElement.children[0];
      const inscrip = (JSON.parse(localStorage.getItem('inscripcionesBasquet')));
      console.log(inscrip);
      inscrip.forEach((item, index) => {
        console.log(item, index);
        console.log(este.innerHTML);
        if (item.name === este.innerHTML) console.log('borrando');
        inscrip.splice(index, 1);
        localStorage.setItem('inscripcionesBasquet', JSON.stringify(inscrip));
      });
      
    }

    return(
        <div>
            <a href="../basquet" className="text-decoration-none" style={{color: 'black'}}>
    <div className="container">
        <img src={logo} class="rounded mx-auto d-block logo" alt="logo"/>
        <h1 className="text-center">Copa Tandil <br></br> Basquet</h1>
    </div></a>

    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre y Apellido del responsable</th>
      <th scope="col">Mail</th>
      <th scope="col">Nombre del Equipo</th>
      <th scope="col">Telefono</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {basquet ? basquet.map(team => (
      <tr>
        <td>{team.name}</td>
        <td>{team.email}</td>
        <td>{team.equipo}</td>
        <td>{team.celular}</td>
        <td><button onClick={handleClick} type="submit" className="btn-primary btn">Eliminar</button></td>
      </tr> 
    )) : <p  >No hay equipos inscriptos</p>}
  </tbody>
</table>
        </div>
    )
};
export default EquiposBasquet;