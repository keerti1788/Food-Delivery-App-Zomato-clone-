import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/Quickdel"><h5>Quickdel</h5></Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="/"><h5>Home</h5></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Login"><h5>Login</h5></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Register"><h5>Register</h5></Link>
        </li>
        <li className="nav-item">
  <a className="nav-link active" href="http://localhost:5173/" >
    <h5>Admin</h5>
  </a>
</li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
