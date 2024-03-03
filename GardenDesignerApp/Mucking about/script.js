document.addEventListener("DOMContentLoaded", function() {
    const cubes = document.querySelectorAll(".cube");
    
    cubes.forEach(cube => {
      cube.addEventListener("click", function() {
        this.classList.toggle("active");
      });
    });
  });
  