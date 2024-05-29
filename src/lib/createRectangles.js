import { Rectangles } from "../classes";
import { COLORS } from "../utils";
import { rect01T, rect02T, rect03T, rect04T, rect05T, rect06T, rect07T, rect08T, speed } from "../utils";

export function createRectangles(p) {
    //--------------------------------------------Rectángulo azul horizontal
    var rect01Alt = p.random(20, 50); //Valor random de altura
    const rect01 = new Rectangles(
        COLORS.BLUE,                    //Relleno
        379,                          //X
        300,                          //Y
        72,                           //Ancho
        rect01Alt,                    //Alto
        180,                          //Giro de la pieza
        rect01T,                      //Tiempo de aparición
        0.03 / speed);                   //Velocidad del easing

    //--------------------------------------------Rectángulo azul vertical arriba
    var rect02Alt = p.random(80, 152); //Valor random de altura
    var rect02Anch = p.random(37, 72); //Valor random de altura
    const rect02 = new Rectangles(
        COLORS.BLUE,                    //Relleno
        234,                          //X
        rect02Alt,                    //Y
        rect02Anch,                           //Ancho
        37,                           //Alto
        270,                          //Giro de la pieza
        rect02T,                      //Tiempo de aparición
        0.12 / speed);                  //Velocidad del easing

    //--------------------------------------------Rectángulo amarillo vertical abajo
    var rect03Alt = p.random(37, 120); //Valor random de altura
    const rect03 = new Rectangles(
        COLORS.YELLOW,                //Relleno
        252,                          //X
        550,                          //Y
        37,                           //Ancho
        rect03Alt,                    //Alto
        0,                            //Giro de la pieza
        rect03T,                      //Tiempo de aparición
        0.06 / speed);                  //Velocidad del easing

    //--------------------------------------------Cuadrado rojo
    const rect04 = new Rectangles(
        COLORS.RED,                    //Relleno
        197,                          //X
        287,                          //Y
        72,                           //Ancho
        82,                           //Alto
        0,                            //Giro de la pieza
        rect04T,                      //Tiempo de aparición
        0.15 / speed);                  //Velocidad del easing

    //--------------------------------------------Rectángulo azul vertical abajo
    const rect05 = new Rectangles(
        COLORS.BLUE,                    //Relleno
        252,                          //X
        287,                          //Y
        38,                           //Ancho
        82,                           //Alto
        0,                            //Giro de la pieza
        rect05T,                      //Tiempo de aparición
        0.15 / speed);                  //Velocidad del easing

    //--------------------------------------------Cuadrado azul
    var rect06Alt = p.random(40, 90); //Valor random de altura
    const rect06 = new Rectangles(
        COLORS.BLUE,                    //Relleno
        197,                          //X
        365,                          //Y
        72,                           //Ancho
        rect06Alt,                    //Alto
        0,                            //Giro de la pieza
        rect06T,                      //Tiempo de aparición
        0.08 / speed);                  //Velocidad del easing

    //--------------------------------------------Rectángulo amarillo vertical arriba
    const rect07 = new Rectangles(
        COLORS.YELLOW,                //Relleno
        252,                          //X
        365,                          //Y
        38,                           //Ancho
        rect06Alt,                    //Alto
        0,                            //Giro de la pieza
        rect07T,                      //Tiempo de aparición
        0.08 / speed);                  //Velocidad del easing

    //--------------------------------------------Rectángulo negro
    const rect08 = new Rectangles(
        COLORS.BLACK,                   //Relleno
        252,                          //X
        365 + rect06Alt - 10,         //Y
        38,                           //Ancho
        rect06Alt / 2 + 10,           //Alto
        0,                            //Giro de la pieza
        rect08T,                      //Tiempo de aparición
        0.04 / speed);                  //Velocidad del easing

    return { rect01, rect02, rect03, rect04, rect05, rect06, rect07, rect08 }

}
