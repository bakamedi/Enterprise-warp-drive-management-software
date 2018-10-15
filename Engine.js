class Engine {

  /**
   * Constructor
   * flujo total de 300
   * arreglo de inyectores
   * dano de los inyectores
   * @param {number} v_luz 
   */
  constructor(v_luz) {
    this.v_luz = v_luz;
    this.totalFlux = 300;
    this.inyectorArray = [];
    this.damageOfInyectors =  0;
  }

  /**
   * Instancia los 3 nuevos inyecroes con sus respectivo daños
   * verificando si son numeros
   * @param {number} damageA 
   * @param {number} damageB 
   * @param {number} damageC 
   */
  newInyectors(damageA, damageB, damageC){
    if(Number.isInteger(damageA) && Number.isInteger(damageB) && Number.isInteger(damageC)){
      this.inyectorArray.push(new Injector("A", damageA));
      this.inyectorArray.push(new Injector("B", damageB));
      this.inyectorArray.push(new Injector("C", damageC));
    }else{
      console.log("ingrese numeros para los danos");
    }
  }

  /**
   * Calcula la suma de todo el dano de los inyectores
   */
  calDamageOfInyectors(){
    for (let index = 0; index < this.inyectorArray.length; index++) {
      this.damageOfInyectors = this.damageOfInyectors + this.inyectorArray[index].getDamage();
    }
  }

  /**
   * Calcula el sobre flujo basado en la velocidad de la luz
   * y la suma del dano de lo inyectores, como son 3 se dividen
   * para 3 y se lo setea a cada inyector
   */
  calOverFlux(){
    let overFlux =(((3 * this.v_luz) + this.damageOfInyectors)/3);
    for (let index = 0; index < this.inyectorArray.length; index++) {
      this.inyectorArray[index].setOverFlux(overFlux);
    }
  }

  /**
   * obtiene el tiempo en funcion del flujo extra y el sobre flujo restandole siempre un minuto
   * @param {number} valid 
   * @returns {number}
   */
  getTime(valid){
    if(valid == 0){
      return 0;
    }else{
      let sumExtraflux = 0;
      for (let index = 0; index < this.inyectorArray.length; index++) {
        sumExtraflux = this.inyectorArray[index].getExtraFlux() - (this.inyectorArray[index].getIsOverFLow()*(this.inyectorArray[index].getOverFlux() - this.inyectorArray[index].getFlux() - 1));
      }
      let time = sumExtraflux;
      return time;
    }
  }

  /**
   * Calcula el flujo de operacion de los inyectores
   * verificando si es operable o no,, retornando la comparativa de los inyecotores y sus tiempos
   * @returns {string}
   */
  calculateFluxOfOperation(){
    if(this.sumOverFlow() < 3 * this.v_luz){
      console.log("Unable to comply");
      console.log("Operating time : " + this.getTime(0));
      return "Unable to comply \n"+ "Operating time : " + this.getTime(0);
    }else{
      for (let index = 0; index < this.inyectorArray.length; index++) {
        console.log(""+this.inyectorArray[index].getName() +": "+this.inyectorArray[index].getOverflow()+ " mg/s");
      }
      if(this.validateTimeOfInyector() == 1){
        console.log("Operating time : infinito ");
        return "Operating time : infinito ";
      }else{
        console.log("Operating time : " + this.getTime(1) + " min ");
        return "Operating time : " + this.getTime(1) + " min ";
      }
    }
  }

  /**
   * Suma todos los valores de los inyecores y separamos sus decimales
   * para tener una suma correcta
   * @returns {number}
   */
  sumOverFlow(){
    let sumOverFlow = 0.00;
    for (let index = 0; index < this.inyectorArray.length; index++) {
      let n = parseFloat(this.inyectorArray[index].getOverflow());
      var truncated = Math.floor( n * 100) / 100;
      sumOverFlow = sumOverFlow + truncated;
    }
    return sumOverFlow;
  }

  /**
   * valida si el inyector tiene dano, para poder obtener una 
   * medida de tiempo
   * @returns {number}
   */
  validateTimeOfInyector(){
    let cont = 0;
    for (let index = 0; index < this.inyectorArray.length; index++) {
      if(this.inyectorArray[index].getOverflow() <= this.inyectorArray[index].getFlux()){
        cont++;
      }else{
        cont = 0;
      }
    }
    if (cont == 3){
      return 1;
    }
    return 0;
  }

}