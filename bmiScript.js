function getBMI(){
    let weightInput = document.getElementById(['weight']).value;
    let heightInput = document.getElementById(['height']).value;

    if(weightInput==0) return alert("Please enter a valid weight");
    if(heightInput==0) return alert("Please enter a valid height");

    heightInput = heightInput * 12; //converting it into inches
    heightInput = heightInput * 0.025;

    let bmiValue = weightInput/Math.pow(heightInput,2);
    if (isNaN(bmiValue)) return
    bmiValue = Math.round(bmiValue);

    document.getElementById('bmi-value').innerText = bmiValue;
}
function clearData(){
    console.log("All data clear");
    document.getElementById(['weight']).value = '';
    document.getElementById(['height']).value = '';
    document.getElementById('bmi-value').innerText = '';
}   
