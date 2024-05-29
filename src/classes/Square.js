import { currentTime, initialTime } from "../utils";

export function Square(relleno, x, y, final, tiempo, velocidad) {
  //Asignación de valores a las propiedades
  this.relleno = relleno;
  this.x = x;
  this.y = y;
  this.inicio = 0;
  this.final = final;
  this.tiempo = tiempo;
  this.velocidad = velocidad;

  //Función dentro del objeto para mostrar la forma
  this.create = function (p) {
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(this.relleno);
    //Condicional: si el tiempo actual es mayor al valor tiempo del objeto (determinado en animacion.js)
    if (currentTime > initialTime + this.tiempo) {
      /*
      Usamos un lerp para suavizar la animación:
      lerp(valor de inicio, valor de final, velocidad del ease )
      */
      this.inicio = p.lerp(this.inicio, this.final, this.velocidad);
      p.square(this.x, this.y, this.inicio);
    }
  }

  //Función dentro del objeto alternativa para mostrar la forma girando
  this.spin = function (p) {
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(this.relleno);
    //Condicional: si el tiempo actual es mayor al valor tiempo del objeto (determinado en animacion.js)
    if (currentTime > initialTime + this.tiempo) {
      p.push()
      p.translate(this.x, this.y);
      /*
      Usamos un lerp para suavizar la animación del giro:
      lerp(valor de inicio, valor de final, velocidad del ease )
      */
      rotation = p.lerp(rotation, 90, this.velocidad);
      if (rotation > 90) {
        rotation = 90;
      }
      p.rotate(rotation);
      /*
      Usamos un lerp para suavizar la animación:
      lerp(valor de inicio, valor de final, velocidad del ease )
      */
      this.inicio = p.lerp(this.inicio, this.final, this.velocidad);
      p.square(0, 0, this.inicio);
      p.pop();
    }
  }
}
