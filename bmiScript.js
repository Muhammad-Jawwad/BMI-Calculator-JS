const statusBMI = document.getElementById('bmi-status');

function getBMI(){
    let weightInput = document.getElementById(['weight']).value;
    let ftHeightInput = document.getElementById(['height-ft']).value;
    let inchHeightInput = document.getElementById(['height-inch']).value;

    if(weightInput=='0' || weightInput<=10) return alert("Please enter a valid weight");
    if(ftHeightInput=='0' || ftHeightInput>7 || ftHeightInput<1) return alert("Please enter a valid height");
    if(inchHeightInput>11 || inchHeightInput<0) return alert("Please enter a valid height");

    ftHeightInput = ftHeightInput * 12; //converting it into inches
    console.log(ftHeightInput)
    let heightInput
    heightInput = Number.parseInt(ftHeightInput) + Number.parseInt(inchHeightInput);
    console.log(heightInput,"Inches")
    heightInput = heightInput * 0.025;
    console.log(heightInput,"Meters")

    let bmiValue = weightInput/Math.pow(heightInput,2); //bmi formula

    if (isNaN(bmiValue)) return
    if (isFinite(bmiValue)){ 
        bmiValue = Math.round(bmiValue);
        document.getElementById('bmi-value').innerText = bmiValue;

        if(bmiValue<18.5){
            statusBMI.innerText = "Underweight (Severe thinness)";
        }else if(bmiValue>=16 && bmiValue<=16.9){
            statusBMI.innerText = "Underweight (Moderate thinness)";
        }else if(bmiValue>=17 && bmiValue<=18.4){
            statusBMI.innerText = "Underweight (Mild thinness)";
        }else if(bmiValue>=18.5 && bmiValue<=24.9){
            statusBMI.innerText = "Normal Weight";
        }else if(bmiValue>=25 && bmiValue<29.9){
            statusBMI.innerText = "Overweight (Pre-obesity)";
        }else if(bmiValue>=30 && bmiValue<34.9){
            statusBMI.innerText = "Obese (Class I)";
        }else if(bmiValue>=35 && bmiValue<39.9){
            statusBMI.innerText = "Obese (Class II)";
        }else if(bmiValue>=40){
            statusBMI.innerText = "Obese (Class III)";
        }
    }else return
}

function clearData(){
    console.log("All data clear");
    document.getElementById(['weight']).value = '';
    document.getElementById(['height-ft']).value = '';
    document.getElementById(['height-inch']).value = '';
    document.getElementById('bmi-value').innerText = '';
    statusBMI.innerText = '';
}   

