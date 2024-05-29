import { Polygon } from "../classes";
import { COLORS } from "../utils";
import { qu01T, qu02T, qu03T, qu04T, speed } from "../utils";
export function createPolygons(p) {
    //--------------------------------------------Polígono amarillo arriba
    var qu01Alt = p.random(80, 110); //Valor random para altura
    const qu01 = new Polygon(
        COLORS.YELLOW,             //Relleno
        197,                       //X
        189,                       //Y
        74,                        //Ancho
        qu01Alt,                   //Altura de punto bajo
        qu01Alt + 73,              //Altura de punto alto
        180,                       //Giro de la pieza
        qu01T,                     //TIempo de aparición
        0.1 / speed);                //Velocidad del easing

    //--------------------------------------------Polígono azul
    var qu02Alt = p.random(20, 200);//Valor random para altura
    var qu02Anch = p.random(30, 73);//Valor random para anchura
    const qu02 = new Polygon(
        COLORS.BLUE,                 //Relleno
        88.5 + 73 - qu02Anch / 2,  //X
        188,                       //Y
        qu02Anch,                  //Ancho
        qu02Alt,                   //Altura de punto bajo
        qu02Alt + qu02Anch,        //Altura de punto alto
        0,                         //Giro de la pieza
        qu02T,                     //TIempo de aparición
        0.1 / speed);                //Velocidad del easing

    //--------------------------------------------Polígono amarillo abajo
    var qu03Alt = p.random(0, 90);//Valor random para altura
    const qu03 = new Polygon(
        COLORS.YELLOW,             //Relleno
        88.5 + 73 - qu02Anch / 2,  //X
        550,                       //Y
        qu02Anch,                  //Ancho
        qu03Alt,                   //Altura de punto bajo
        qu03Alt + qu02Anch,        //Altura de punto alto
        0,                         //Giro de la pieza
        qu03T,                     //TIempo de aparición
        0.04 / speed);               //Velocidad del easing

    //--------------------------------------------Polígono rojo
    var qu04Alt = p.random(0, 150);//Valor random para altura
    const qu04 = new Polygon(
        COLORS.RED,                 //Relleno
        307,                       //X
        368,                       //Y
        73,                        //Ancho
        qu04Alt,                   //Altura de punto bajo
        qu04Alt + 73,              //Altura de punto alto
        0,                         //Giro de la pieza
        qu04T,                     //TIempo de aparición
        0.06 / speed);               //Velocidad del easing

    return { qu01, qu02, qu03, qu04 }

}