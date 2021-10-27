/* import { Link } from 'react-router-dom';  */
import "../styles/construccion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"
import perfil from "../media/perfilsvg.svg"


function Index() {
 
 

    return (
  
        <div className="fondo"> 
  
        
        <div className="construccion ">
        <nav className="navbar navbar-expand-lg navbar-light bg-#22222 fixed-top ">
          
  <div className="container-fluid ">

    <a className="navbar-brand "  href="#seccion3"><i className="fas fa-user-secret"/>  Andrés Rivera Vega  </a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav " >
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#seccion3">
          <i className="fas fa-laptop-code"/> Skills</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#seccion2"> <i className="fas fa-tasks"/> Proyectos</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link " Link to='/seccion1'>Contactar<Link/></a> */}
          <a className="nav-link" href="#seccion1" id='me'> <i className="far fa-address-card"/> Contactar</a>

      
          {/* <Link  to="#seccion1" > pagina inicial </Link> */}
        </li>
        <li className="nav-item text-right">
          <a className="nav-link disabled text-right"  href="#seccion3"  aria-disabled="true">Disabled 
          <i className="fas fa-user-circle"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
            
            <div id='seccion3' className="me">
            
        <div className="contenedorz">
        <blockquote className="blockquote"><p>Ingeniero Mecatrónico | Human | Desarrollador Software</p></blockquote>
        <img className="img-fluid" src="https://i.imgur.com/wOjrfOT.png"  alt="Responsive image" /> 
        </div>
        </div>
        </div> 


<div className="skills"> 
        
<blockquote className="blockquote"><span><strong>| Mis Skills  |</strong> </span> </blockquote>
        <img src="https://i.imgur.com/v9FzIjY.png" className="img-fluid" alt="Responsive image" /> 


        <div className="sliderr2 ">
        

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.imgur.com/lm9Gfs0.jpg" class="d-block w-100 .img-fluid" alt="Responsive image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/m025uJs.jpg" class="d-block w-100 .img-fluid" alt="Responsive image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src="https://i.imgur.com/lxHy8Qk.jpg" class="d-block w-100 .img-fluid" alt="Responsive image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
</div>
        








        

<div id='seccion2' className="proyectos">

<div className="row">
  <div className="col-sm-6 contenedorz">
    <div className="card">
      <div className="card-body">
      <span className="card-title"> <strong>Proyecto N°1</strong></span>
        <p className="card-text">Reimaginacion y clon rappi.</p>
        <img src="https://i.imgur.com/ixuN13e.jpg" className="img-fluid" alt="Responsive image" />   
        <a href="#" className="btn btn-light">Go somewhere</a>
      </div>
    </div>
   
  </div>
  {/* asdfasdf */}
  
  <div className="col-sm-6 contenedorz">
    <div className="card">
      <div className="card-body">
        <span className="card-title"> <strong>Proyecto N°2</strong></span>
        <p className="card-text">algoaldskjfalskdjlkasjdf</p>
        <img src="https://i.imgur.com/ixuN13e.jpg" className="img-fluid" alt="Responsive image" /> 
        <a href="#" className="btn btn-light">Go somewhere</a>
      </div>
    </div>
    
  </div>
  
  {/* asdfasdf */}
  <div className="col-sm-6 contenedorz">
    <div className="card">
      <div className="card-body">
      <span className="card-title"> <strong>Proyecto N°3</strong></span>
        <p className="card-text">algoaldskjfalskdjlkasjdf</p>
        <img src="https://i.imgur.com/ixuN13e.jpg" className="img-fluid" alt="Responsive image" /> 
        <a href="#" className="btn btn-light">Go somewhere</a>
      </div>
    </div>
    
  </div>
  {/* asdfasdf */}

  
  
  <div className="col-sm-6 contenedorz">
    <div className="card">
      <div className="card-body">
      <span className="card-title"> <strong>Proyecto N°4</strong></span>
        <p className="card-text">algoaldskjfalskdjlkasjdf</p>
        <img src="https://i.imgur.com/ixuN13e.jpg" className="img-fluid" alt="Responsive image" /> 
        <a href="#" className="btn btn-light">Go somewhere</a>
      </div>
    </div>
    
  </div>

 
</div>

</div>
       


  


 
<div id='seccion1'  >




        <ul className="nav justify-content-center ">
        
          
  

  


  <div className="social-icons col-md-6">
                        <a href="#" className="social-item"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-facebook-square"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-instagram-square"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-steam"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-github"></i></a>
                    </div>
                  
                   
 

  

                   <div className="perfil">
                   
                   
                    <img src={perfil} className="img-fluid" alt="Responsive image" />
                    <blockquote className="blockquote"><span className="text-white">Hecho en Colombia en 🇨🇴</span> </blockquote>
                    
                    </div>

</ul>

</div>






        </div>
        
    )
}

export default Index;