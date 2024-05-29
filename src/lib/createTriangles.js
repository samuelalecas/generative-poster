import { Triangle } from '../classes'
import { COLORS } from "../utils/colors";
import { tr01T, tr02T, tr03T, tr04T, tr05T, speed } from "../utils";

export function createTriangles(p) {
    //--------------------------------------------Triángulo amarillo abajo
    var tr01Anch = p.random(25, 72);  //Valor random para tamaño
    const tr01 = new Triangle(
        COLORS.YELLOW,                //Relleno
        343,                          //X
        368,                          //Y
        tr01Anch,                     //Tamaño
        0,                            //Giro de la pieza
        tr01T,                        //TIempo de aparición
        0.07 / speed);                  //Velocidad del easing

    //--------------------------------------------Triángulo amarillo arriba
    var tr02Anch = p.random(25, 72);  //Valor random para tamaño
    const tr02 = new Triangle(
        COLORS.YELLOW,                //Relleno
        343,                          //X
        368,                          //Y
        tr02Anch,                     //Tamaño
        180,                          //Giro de la pieza
        tr02T,                        //TIempo de aparición
        0.07 / speed);                  //Velocidad del easing

    //--------------------------------------------Triángulo rojo
    const tr03 = new Triangle(
        COLORS.RED,                    //Relleno
        161,                          //X
        189,                          //Y
        tr02Anch,                     //Tamaño
        180,                          //Giro de la pieza
        tr03T,                        //TIempo de aparición
        0.07 / speed);                  //Velocidad del easing

    //--------------------------------------------Triángulo azul
    const tr04 = new Triangle(
        COLORS.BLUE,                    //Relleno
        161,                          //X
        550,                          //Y
        72,                           //Tamaño
        0,                            //Giro de la pieza
        tr04T,                        //TIempo de aparición
        0.07 / speed);                  //Velocidad del easing

    //--------------------------------------------Triángulo negro
    var tr05Anch = p.random(10, 72);  //Valor random para tamaño
    const tr05 = new Triangle(
        COLORS.BLACK,                   //Relleno
        161,                          //X
        550,                          //Y
        tr05Anch,                     //Tamaño
        180,                          //Giro de la pieza
        tr05T,                        //TIempo de aparición
        0.07 / speed);                  //Velocidad del easing

    return { tr01, tr02, tr03, tr04, tr05 }
}