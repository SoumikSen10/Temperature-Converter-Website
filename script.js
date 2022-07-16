const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex];


    const celToFah = (cel) => {
        let fahrenheit = cel * (9 / 5) + 32;
        return fahrenheit;
    }

    const fehtoCel = (fehr) => {
        let celcius = Math.round((fehr - 32) * 5 / 9);
        return celcius;
    }


    let result;

    /*  if (valueTemp == "cel") {
         result = celToFah(numberTemp);
         document.getElementById('resultContainer').innerHTML = `=${result}°Fahrenheit`;
     } else {
         result = fehtoCel(numberTemp);
         document.getElementById('resultContainer').innerHTML = `=${result}°Celcius`;
     } */

    console.log(tempSelected.innerText);
    if (tempSelected.value == "cel") {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result}°Fahrenheit`;
    } else {
        result = fehtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result}°Celcius`;
    }
}