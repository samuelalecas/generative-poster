export function createTexts(p) {
  /*
    En esta función quedan recogidos todos los textos que aparecen
    durante la animación. En estas variables encontramos el contenido
    propio de los textos (fieles al cartel original)
  */
  var nombre = "Walter Ballmer";
  var frase1 = "AGI Alliance Graphique Internationale";
  var frase2 = "Congresso 1966";
  var parrafo = "osaggio all'Ollanda per \n\nJacobus j. Oud\nVincent Van Gogh\ni tulipani\nPiet Mondrian\nTheo Van Doesburg\nil formaggio di Gouda\nWillem de Kooning\nJan e Hubert Van Eyck\ni mulini a vento\nGerrit Th. Rietveld\nHieronysus Bosch\neccetera"

  // Definimos la tipo y sus características
  p.textSize(6);
  p.textFont('Roboto Mono, monospace');
  opacity = opacity + 2;
  if (opacity > 705) {
    opacity = 705;
  }
  p.push();
  p.translate(415, 100);
  p.rotate(-90);
  p.fill(0, 0, 0, opacity - 300);
  p.text(nombre, 0, 0);
  p.pop();

  p.push();
  p.translate(415, 600);
  p.rotate(-90);
  p.fill(0, 0, 0, opacity - 350);
  p.text(frase1, 0, 0);
  p.pop();

  p.push();
  p.translate(415, 700);
  p.rotate(-90);
  p.fill(0, 0, 0, opacity - 400);
  p.text(frase2, 0, 0);
  p.pop();

  p.push();
  p.textLeading(8);
  p.fill(0, 0, 0, opacity - 450);
  p.text(parrafo, 335, 791, 100, 400);
  p.pop();
}
