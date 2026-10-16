function setup() {
  createCanvas(windowWidth, windowHeight);

  background(182, 224, 184);

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
    
    const formaTesta = random (0, _size/2);
    const coloreTesta = color(random(255, 60), 150, 255 );
    const aperturaBocca = random (-1, _size*0.2);
    const larghezzaBocca = random (_size/3, _size/5);

    push();

    fill(coloreTesta);
    square(0, 0, 50, formaTesta);
    
    fill(0, 0, 0);
    ellipse(_size*0.45, _size*0.7, larghezzaBocca, aperturaBocca);

    pop();
  }

  pop();
}