/* import { Link } from 'react-router-dom'; */
import "../styles/construccion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"








function Index() {
 

    return (
        <div> 
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">:D </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        <div className="construccion ">
            <div>
        <img src="https://i.imgur.com/H2YvScF.png"  class="img-fluid" alt="Responsive image"/>
        
        </div>
        <h3>...........................</h3>
        <img src="https://cdn.dribbble.com/users/5661/screenshots/2491233/media/3b581628e2ca1242efd00239b4aabf8a.gif" class="img-fluid" alt="Responsive image" />
        </div>


        <ul class="nav justify-content-center fixed-bottom bg-dark">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>

        </div>
    )
}

export default Index;