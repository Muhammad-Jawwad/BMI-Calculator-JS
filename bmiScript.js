function getBMI(){
    let weightInput = document.getElementById(['weight']).value;
    let heightInput = document.getElementById(['height']).value;
    
    heightInput = heightInput * 12; //converting it into inches
    heightInput = heightInput * 0.025;

    let bmiValue = weightInput/Math.pow(heightInput,2);
    bmiValue = Math.round(bmiValue);

    document.getElementById('bmi-value').innerText = bmiValue;
}
function clearData(){
    console.log("hey");
    document.getElementById(['weight']).value = '';
    document.getElementById(['height']).value = '';
    document.getElementById('bmi-value').innerText = '';
}   
