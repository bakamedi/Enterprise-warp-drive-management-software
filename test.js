let speed = 0, damageA = 0, damageB = 0, damageC = 0;// cambiar los valores de 0 
let e = new Engine(speed);
e.newInyectors(damageA,damageB,damageC);
e.calDamageOfInyectors();
e.calOverFlux();
e.calculateFluxOfOperation();

