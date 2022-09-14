const statusBMI = document.getElementById('bmi-status');
function getBMI(){
    let weightInput = document.getElementById(['weight']).value;
    let heightInput = document.getElementById(['height']).value;

    if(weightInput=='0') return alert("Please enter a valid weight");
    if(heightInput=='0') return alert("Please enter a valid height");

    heightInput = heightInput * 12; //converting it into inches
    heightInput = heightInput * 0.025;

    let bmiValue = weightInput/Math.pow(heightInput,2);
    if (isNaN(bmiValue)) return
    if (isFinite(bmiValue)){ 
    
    bmiValue = Math.round(bmiValue);
    document.getElementById('bmi-value').innerText = bmiValue;
    if(bmiValue<18.5){
        statusBMI.innerText = "Underweight";
    }else if(bmiValue>=18.5 && bmiValue<=24.9){
        statusBMI.innerText = "Normal Weight";
    }else if(bmiValue>=25 && bmiValue<29.9){
        statusBMI.innerText = "Pre-obesity";
    }else if(bmiValue>=30 && bmiValue<34.9){
        statusBMI.innerText = "Obesity Class I";
    }else if(bmiValue>=35 && bmiValue<39.9){
        statusBMI.innerText = "Obesity Class II";
    }else if(bmiValue>=40){
        statusBMI.innerText = "Obesity Class III";
    }
}else return
}
function clearData(){
    console.log("All data clear");
    document.getElementById(['weight']).value = '';
    document.getElementById(['height']).value = '';
    document.getElementById('bmi-value').innerText = '';
    statusBMI.innerText = '';
}   
