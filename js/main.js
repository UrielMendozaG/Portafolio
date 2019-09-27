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
      switch (num) {
        case 0:
          this.desaparecerProyectos(0);
          screenshots.mostrar(0);
          tecnologias.mostrar(0);
          atras.mostrar(0);
          botones.mostrar(0);
          botones.mostrar(1);
          break;
        case 1:
          this.desaparecerProyectos(1);
          screenshots.mostrar(1);
          tecnologias.mostrar(1);
          atras.mostrar(1);
          this.animation2(this.proyectos[num], 0, 0, 1, 1,"40%","13%")
          botones.mostrar(2);
          botones.mostrar(3);
          break;
        case 2:
          this.desaparecerProyectos(2);
          atras.mostrar(2);
          screenshots.mostrar(2);
          tecnologias.mostrar(2);
          this.animation2(this.proyectos[num], 0, 0, 1, 1,"65%","13%")
          botones.mostrar(4);
          break;
      }
    });
  },

  desaparecerProyectos: function(proyecto) {
    this.proyectos.forEach((element, num) => {
      if (num != proyecto) {
        element.classList.remove("show");
      }
    });
  },

  animation2: function(proyecto, x1, x2, opacity1, opacity2, y1,y2) {
    anime({
      targets: proyecto,
      translateX: [x1, x2],
      opacity: [opacity1, opacity2],
      duration: 300,
      easing: "linear",
      top: [y1,y2]
    });
  }
};

let atras = {
  mostrar: function(proyecto) {
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
  },

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
  },
  
};

let tecnologias = {

  tecnologias: [],

  mostrar: function(num) {
    let tecnologias = document.querySelectorAll(".tecnologia");
    
    tecnologias.forEach((element) => {
      this.tecnologias.push(element);
    })

    this.tecnologias[num].classList.add("show");
    this.animation(tecnologias[num], 0, 0 , 0, 1)
  },

  animation: function(proyecto, x1, x2, opacity1, opacity2) {
    anime({
      targets: proyecto,
      translateX: [x1, x2],
      opacity: [opacity1, opacity2],
      duration: 300,
      easing: "linear"
    });
  }
};

let botones = {
  botones: [],

  mostrar: function(num){
    let botones = document.querySelectorAll(".learn-more");

    botones.forEach((element) => {
      this.botones.push(element);
    })

    this.botones[num].classList.add("show");
  }
}
proyectos.getProyectos();

setTimeout(() => {
  //mostrar proyectos
  proyectos.mostrarProyectos();
}, 2500);
