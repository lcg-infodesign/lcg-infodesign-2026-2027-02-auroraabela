function setup() {
  createCanvas(windowWidth, windowHeight);

  background(249, 242, 255);

  //disegno glifi
  let numeroGlifi = 100;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);

  let dimColonna = windowWidth/numeroColonne;
  let dimRiga = windowHeight/numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for(let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8 );
    xCorrente = xCorrente + dimColonna;

    if(xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }

}

function draw() {
  //
}


function mioGlifo(_x, _y, _size, _corners) {
  push();

  translate(_x, _y);


  for(let i = 0; i < 1; i++) {

    colorMode (HSB)
    
    const formaTesta = random (0, _size/2);
    const coloreTesta = color(random(360), 60, 100);

    const aperturaBocca = random (-1, _size/4);
    const larghezzaBocca = random (_size/3, _size/5);

    const xPupilla1 = random (_size/3.3, _size/2.9);
    const xPupilla2 = random (_size/2, _size/2.3);
    const xPupilla3 = random (_size/1.6, _size/1.8);
    const yPupilla = random (_size/2.7, _size/3.3);

    const lato = 50;
    const xLinea1 = lato*0.3;
    const xLinea2 = lato*0.7;
    const lunghezzaAntenna = random (_size*0.10, _size*0.20);
    

    push();

    fill(coloreTesta);
    square(0, 0, _size/1.1, formaTesta);
    
    fill("black");
    ellipse(_size*0.45, _size*0.7, larghezzaBocca, aperturaBocca);
    
    fill("white");
    circle (_size/3, _size/3, _size/6);
    circle (_size/2.2, _size/3, _size/6);
    circle (_size/1.7, _size/3, _size/6);

    fill("black");
    circle(xPupilla1, yPupilla, _size/25);
    circle(xPupilla2, yPupilla, _size/25);
    circle(xPupilla3, yPupilla, _size/25);

    line(xLinea1, 0, xLinea1-5, -lunghezzaAntenna);
    line(xLinea2, 0, xLinea2+5, -lunghezzaAntenna);

    fill("black");
    circle(xLinea1 - 5, -lunghezzaAntenna, _size/20);
    circle(xLinea2 +5, -lunghezzaAntenna, _size/20);

    pop();
  }

  pop();
}