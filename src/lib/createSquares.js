import { Square } from '../classes'
import { COLORS } from "../utils/colors";
import { sq01T, sq02T, sq03T, speed } from "../utils";

export function createSquares(p) {
    //--------------------------------------------Cuadrado grande negro inicial
    const sq01 = new Square(
        COLORS.BLACK,       //Relleno
        216,              //X
        243,              //Y
        110,              //Tamaño
        sq01T,            //TIempo de aparición
        0.36 / speed);       //Velocidad del easing

    //--------------------------------------------Cuadrado amarillo
    var sq02Alt = p.random(30, 220);
    const sq02 = new Square(
        COLORS.YELLOW,    //Relleno
        307,              //X
        152,              //Y
        72,               //Tamaño
        sq02T,            //TIempo de aparición
        0.1 / speed);       //Velocidad del easing

    //--------------------------------------------Cuadrado negro
    const sq03 = new Square(
        COLORS.BLACK,       //Relleno
        379,              //X
        332,              //Y
        72,               //Tamaño
        sq03T,            //TIempo de aparición
        0.1 / speed);       //Velocidad del easing


    return { sq01, sq02, sq03 }

}