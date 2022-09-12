class bmiCal{
    constructor(weightValue,weightUnit,heightFeets,heightInches){
        this.weightValue = weightValue;
        this.weightUnit = weightUnit;
        this.heightFeets = heightFeets;
        this.heightInches = heightInches;
        this.clear();
    }
    clear(){
        this.weight = 0;
        this.height = 0;
        this.bmivalue = '';
    }

    massInKg(mass,unit){
        if(unit!="Pounds" && unit!="Kilograms") return alert("Unit of weight is not defined");
        else if(unit=="Pound"){
            if(mass<=100) return alert("Weight should be more than 100 pounds")
            this.weight = (mass / 10);
        }
        else{
            if(mass<=10) return alert("Weight should be more than 10 kg")
            this.weight = mass;
        }
    }

    heightInMeter(feets,inches){
        
    }

    computeBMI(){
        // BMI=kg/m^2
        let bmi ;
        if (isNaN(this.weight) || isNaN(this.height)) return 
        else{
            bmi = this.weight / (this.height**2);
        }
        this.bmivalue = bmi;

    }

    displayBMI(){
        this.displayResult.innerText = "Your BMI is:";

    }
    

}

//Including DOM from html through ID
const calButton = document.querySelector(['data-calculate']);
const clearButton = document.querySelector(['data-clear']);
const weightValue = document.querySelector(['data-weight']);
const weightUnit = document.querySelector(['data-weight-unit']);
const heightFeets = document.querySelector(['data-height-feet']);
const heightInches = document.querySelector(['data-height-inch']);
const displayResult = document.querySelector(['display-result']);

//Making an object calculator of class Calculator... 
const bmical = new bmiCal(weightValue,weightUnit,heightFeets,heightInches);

//Now telling buttons what to do on click
calButton.addEventListener('click', (wg,opt1,opt2,opt3) => {
    bmical.massInKg(wg.innerText,opt1.innerText);
    bmical.heightInMeter(opt2.innerText,opt3.innerText);
    bmical.computeBMI();
    bmical.displayBMI();
})
clearButton.addEventListener('click', button => {
    bmical.clear()
    bmical.displayBMI()
})



