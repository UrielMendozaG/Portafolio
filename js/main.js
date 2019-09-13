let proyectos = {
  proyectos: [],

  getProyectos: function() {
    let proyectos = document.querySelectorAll(".proyecto");

    proyectos.forEach(element => {
      this.proyectos.push(element);
    });
  },

  mostrarProyectos: function() {
    this.proyectos.forEach((element, num) => {
      this.animation(element);
      this.clickEvent(element, num);
      element.classList.add("show");
    });
  },

  animation: function(element) {
    anime({
      targets: element,
      translateY: [100, 0],
      delay: anime.stagger(3000),
      opacity: [0, 1]
    });
  },

  clickEvent: function(proyecto, num) {
    proyecto.addEventListener("click", () => {
      atras.mostrar();

      switch (num) {
        case 0:
          this.desaparecerProyectos(0);
          screenshots.mostrar(0);  
          break;
        case 1:
          this.desaparecerProyectos(1);
          break;
        case 2:
          this.desaparecerProyectos(2);
          break;
      }
    });
  },

  desaparecerProyectos: function(proyecto) {
    this.proyectos.forEach((element, num) => {
      if (num != proyecto) {
        this.animation2(element);
      }
    });
  },

  animation2: function(proyecto) {
    anime({
      targets: proyecto,
      translateX: [0, -500],
      opacity: [1, 0],
      duration: 3000
    });
  }
};

let atras = {
  mostrar: function() {
    let atras = document.querySelector(".atras");
    atras.classList.add("show");
    this.animation(atras);
  },
  animation: function(atras) {
    anime({
      targets: atras,
      translateX: [0, 0],
      opacity: [0, 1],
      duration: 300,
      delay: 200,
      easing: "linear"
    });
  }
};

let screenshots = {
  ss: [],

  mostrar: function(num) {
    let ss = document.querySelectorAll(".ss");

    ss.forEach(element => {
      this.ss.push(element);
    });

    this.ss[num].classList.add("show");
    this.animation(this.ss[num]); 
  },

  animation: function(ss) {
    anime({
      targets: ss,
      translateX: [0, 0],
      opacity: [0, 1],
      duration: 300,
      delay: 200,
      easing: "linear"
    });
  }
};

proyectos.getProyectos();

setTimeout(() => {
  //mostrar proyectos
  proyectos.mostrarProyectos();
}, 2500);
