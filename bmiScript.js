class bmiCal{
    constructor(weight,weightUnit,heightFeets,heightInches){
        this.weight = weight;
        this.weightUnit = weightUnit;
        this.heightFeets = heightFeets;
        this.heightInches = heightInches;
        this.clear();
    }
    clear(){
        this.weight = 0;
        this.weightUnit = undefined;
        this.heightFeets = 0;
        this.heightInches = 0; 
    }

    chooseWeightUnit(unit){

    }

    massInKg(mass,unit){

    }

    heightInMeter(feets,inches){

    }

    computeBMI(mass,height){
        // BMI=kg/m^2

    }

    displayBMI(){

    }
    

}

//Including DOM from html through ID
const calButton = document.querySelector(['data-calculate']);
const clearButton = document.querySelector(['data-clear']);
const weight = document.querySelector(['data-weight']);
const weightUnit = document.querySelector(['data-weight-unit']);
const heightFeets = document.querySelector(['data-height-feet']);
const heightInches = document.querySelector(['data-height-inch']);
const displayResult = document.querySelector(['display-result']);

//Making an object calculator of class Calculator... 
const bmical = new bmiCal(weight,weightUnit,heightFeets,heightInches);

//Now telling buttons what to do on click


