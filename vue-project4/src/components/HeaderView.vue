

<template>
<div  class="jumbotron text-center" style="margin-bottom:0; background-color: aquamarine; color: chocolate;">
    <h1 style="background-color: aquamarine;">My First Bootstrap 4 Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <RouterLink class="navbar-brand" to="#">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/overhttp">Http</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/overjson">Json</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/overaxios">Axios</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>