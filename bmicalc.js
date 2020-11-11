//Class for bmi calculator 
class bmiCalc{
    constructor (lbs, inches){
      this.weight = lbs;
      this.height = inches;
    
      this.bmiCalc = function(){
        return((lbs/(inches*inches))*703); //Calculates bmi based on weight/height^2 *703 
      }
    
    }
    }
    user = new bmiCalc(180, 70); //end result is 25.8
    