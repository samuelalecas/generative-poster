import { currentTime, initialTime } from "../utils";

export function Rectangles(relleno, x, y, ancho, alto, sentido, tiempo, velocidad) {
  //Asignación de valores a las propiedades
  this.relleno = relleno;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.base = 0;
  this.alto = alto;
  this.tiempo = tiempo;
  this.sentido = sentido;
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
      this.base = p.lerp(this.base, this.alto, this.velocidad);
      p.quad(-this.ancho / 2, 0, this.ancho / 2, 0, this.ancho / 2, this.base, -this.ancho / 2, this.base);
      p.pop();
    }
  }
}
