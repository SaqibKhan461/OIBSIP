function convertTemperature() {  
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultSpan = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    
    if (!isNaN(temperature))
    {
        if (unit === "celsius")
        {
            const fahrenheit = (temperature * 9/5) + 32;
            resultSpan.textContent = `${fahrenheit.toFixed(2)} °F`;
        }
        else
        {
            const celsius = (temperature - 32) * 5/9;
            resultSpan.textContent = `${celsius.toFixed(2)} °C`;
        }
    }
    else
    {
        resultSpan.textContent = "INVALID INPUT!";
    }
}

function clearInput() {
    const temperatureInput = document.getElementById("temperature");
    const resultSpan = document.getElementById("result");

    temperatureInput.value = "";
    resultSpan.textContent = "---";
}