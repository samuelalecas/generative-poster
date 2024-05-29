import { currentTime, initialTime } from "../utils";
export function Polygon(relleno, x, y, ancho, alto1, alto2, sentido, tiempo, velocidad) {
  //Asignación de valores a las propiedades
  this.relleno = relleno;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.base1 = 0;
  this.base2 = 0;
  this.alto1 = alto1;
  this.alto2 = alto2;
  this.tiempo = tiempo;
  this.sentido = sentido;
  this.velocidad = velocidad;

  //Función dentro del objeto para mostrar la forma
  this.create = function (p) {
    p.noStroke();
    p.fill(this.relleno);
    if (currentTime > initialTime + this.tiempo) {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.sentido);
      /*
      Usamos un lerp para suavizar la animación:
      lerp(valor de inicio, valor de final, velocidad del ease )
      */
      this.base1 = p.lerp(this.base1, this.alto1, this.velocidad);
      this.base2 = p.lerp(this.base2, this.alto2, this.velocidad);
      p.quad(-this.ancho / 2, 0,        //Punto izquierdo de la base
        this.ancho / 2, 0,            //Punto derecho de la base
        this.ancho / 2, this.base1,   //Punto alto derecho
        -this.ancho / 2, this.base2);  //Punto alto izquierdo
      p.pop();
    }
  }
}
