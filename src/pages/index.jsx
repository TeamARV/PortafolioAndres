import { Link } from 'react-router-dom'; 
import "../styles/construccion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import perfil from "../media/perfilsvg.svg"








function Index() {
 

    return (

      

      
        <div className="fondo"> 
  
        
        <div className="construccion ">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
  <div class="container-fluid ">
    <a class="navbar-brand " href="#">🖳 Andrés Rivera Vega  </a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#seccion3">Skills</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#seccion2">Proyectos</a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link " Link to='/seccion1'>Contactar<Link/></a> */}
          <a class="nav-link" href="#seccion1">Contactar</a>

      
          {/* <Link  to="#seccion1" > pagina inicial </Link> */}
        </li>
        <li class="nav-item text-right">
          <a class="nav-link disabled text-right" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <div id='seccion3'>
        {/* <img src="https://i.imgur.com/H2YvScF.png"  class="img-fluid" alt="Responsive image"/> */}
        <blockquote class="blockquote"><p>Ingeniero Mecatrónico | Human | Desarrollador Software</p></blockquote>
        
        <img src="https://i.imgur.com/wOjrfOT.png" class="img-fluid" alt="Responsive image" /> 
        
        
        
        
        </div>

        <blockquote class="blockquote"><p>| Mis Skills  | </p></blockquote>    
        <img src="https://i.imgur.com/v9FzIjY.png" class="img-fluid" alt="Responsive image" /> 
        

        
        </div> 
        

<div id='seccion2' className="proyectos">

        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img src="https://i.imgur.com/oswt6cH.png" class="img-fluid" alt="Responsive image" /> 
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr/>
  </div>
  {/* asdfasdf */}
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img src="https://i.imgur.com/oswt6cH.png" class="img-fluid" alt="Responsive image" /> 
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr/>
  </div>
  {/* asdfasdf */}
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img src="https://i.imgur.com/oswt6cH.png" class="img-fluid" alt="Responsive image" /> 
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr/>
  </div>
  {/* asdfasdf */}
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img src="https://i.imgur.com/oswt6cH.png" class="img-fluid" alt="Responsive image" /> 
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr/>
  </div>

 
</div>

</div>
       


  


 
<div id='seccion1'>

        <ul class="nav justify-content-center bg-dark">
          
  

  {/* <li class=" class=nav-item col-sm-2 margin-botton"><span> hecho en 👨‍💻🇨🇴</span></li> */}


  <div className="social-icons col-sd-12">
                        <a href="#" className="social-item"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-facebook-square"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-instagram-square"></i></a>
                        <a href="#" className="social-item"><i class="fab fa-steam"></i></a>
                        <a href="#" className="social-item"><i class="fab fa-github"></i></a>
                    </div>
                  
                   
 

  

                   <div className="perfil">
                    <img src={perfil} class="img-fluid" alt="Responsive image" />
                    </div>

</ul>
</div>

        </div>
        
    )
}

export default Index;