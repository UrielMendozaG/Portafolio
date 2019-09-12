let proyectos = {
    proyectos: [],

    getProyectos: function(){
       const proyectos = document.querySelectorAll(".proyecto")

       proyectos.forEach(element => {
           this.proyectos.push(element);
       });
    },

    mostrarProyectos: function() {
          this.proyectos.forEach(element => {
            this.animation(element);
            element.classList.add("show"); 
          })
    },

    animation: function (element) {
        anime({
            targets: element,
            translateY: [100, 0],
            delay: anime.stagger(3000),
            opacity: [0,1],
          });
    }
}

proyectos.getProyectos();

setTimeout(() => {
    //mostrar proyectos
    proyectos.mostrarProyectos();
}, 2500);



