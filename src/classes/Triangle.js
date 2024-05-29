import { currentTime, initialTime } from "../utils";

export function Triangle(relleno, x, y, final, sentido, tiempo, velocidad) {
  //Asignación de valores a las propiedades
  this.relleno = relleno;
  this.x = x;
  this.y = y;
  this.inicio = 0;
  this.final = final;
  this.sentido = sentido;
  this.tiempo = tiempo;
  this.velocidad = velocidad;

  //Función dentro del objeto para mostrar la forma
  this.create = function (p) {
    p.noStroke();
    p.fill(this.relleno);
    //Condicional: si el tiempo actual es mayor al valor tiempo del objeto (determinado en animacion.js)
    if (currentTime > initialTime + this.tiempo) {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.sentido);
      /*
      Usamos un lerp para suavizar la animación:
      lerp(valor de inicio, valor de final, velocidad del ease )
      */
      this.inicio = p.lerp(this.inicio, this.final, this.velocidad);
      p.triangle(0, 0, this.inicio, 0, 0, this.inicio);
      p.pop();
    }
  }
}
