class Injector {

  /**
   * Contructor del Inyector
   * @param {number} name 
   * @param {number} damage 
   */
  constructor(name, damage) {
    this.name       = name;
    this.damage     = damage;
    this.flux       = 100;
    this.extraFlux  = 99;
    this.overFlux   = 0.0;
  }

  /**
   * Setea el sobre flujo
   * @param {number} overFlux 
   */
  setOverFlux(overFlux){
    this.overFlux = overFlux;
  }

  /** 
   * Retorna el flujo
   * @returns {number}
   */
  getFlux(){
    return this.flux;
  }

  /**
   * retorna el nombre del inyector
   * @returns {string} 
   */
  getName(){
    return this.name;
  }

  /**
   * retorna el dano del inyector
   * @returns {number}
   */
  getDamage(){
    return this.damage;
  }
  
  /**
   * retorna del extraflujo = 99
   * @returns {number}
   */
  getExtraFlux(){
    return this.extraFlux;
  }

  /**
   * retorna el sobre flujo
   * @returns {number}
   */
  getOverFlux(){
    return this.overFlux;
  }

  /**
   * retorna la resta del sobreflujo con el dano
   * @returns {number}
   */
  getOverflow(){
    //return  Math.floor(this.overFlux - this.damage);
    return  this.overFlux - this.damage;
  }

  /**
   * Retorna 0 si el sobreflujo es menor a 100
   * caso contrario es 1
   * @returns {number}
   */
  getIsOverFLow(){
    if(this.getOverflow() <= 100){
      return 0;
    }else{
      return 1;
    }
  }

}