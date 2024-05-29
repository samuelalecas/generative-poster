import { createTexts } from "./createTexts";
export function constructPoster(p, elements) {
  const { squares, triangles, polygons, rectangles } = elements;
  p.push();
  p.translate(randomAngle, 0);            //Se desplaza aleatoriamente el bloque superior
  triangles.tr03.create(p);                      //Triángulo rojo
  polygons.qu01.create(p);                      //Polígono amarillo arriba
  rectangles.rect02.create(p);                    //Rectángulo azul vertical arriba
  squares.sq02.create(p);                      //Cuadrado amarillo
  p.pop();
  rectangles.rect01.create(p);                    //Rectángulo azul horizontal
  polygons.qu02.create(p);                      //Polígono azul
  polygons.qu03.create(p);                      //Polígono amarillo abajo
  polygons.qu04.create(p);                      //Polígono rojo
  rectangles.rect08.create(p);                    //Rectángulo negro
  rectangles.rect06.create(p);                    //Cuadrado azul
  rectangles.rect07.create(p);                    //Rectángulo amarillo vertical arriba
  rectangles.rect04.create(p);                    //Cuadrado rojo
  rectangles.rect05.create(p);                    //Rectángulo azul vertical abajo
  squares.sq01.create(p);                      //Cuadrado grande negro inicial
  squares.sq03.spin(p);                         //Cuadrado negro
  rectangles.rect03.create(p);                    //Rectángulo amarillo vertical abajo
  triangles.tr01.create(p);                      //Triángulo amarillo abajo
  triangles.tr02.create(p);                      //Triángulo amarillo arriba
  triangles.tr04.create(p);                      //Triángulo azul
  triangles.tr05.create(p);                      //Triángulo negro

  createTexts(p);                            //Textos
}
