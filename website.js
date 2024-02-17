window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {



    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    if (height === "" || isNaN(height))
        result.innerHTML = "მიუთითეთ სწორი სიმაღლე!";
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "მიუთითეთ სწორი წონა!";
    else {
        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);
        if (bmi < 18.6) result.innerHTML =
            `ნაკლები წონა : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML = `ნორმალურია : <span>${bmi}</span>`;
        else result.innerHTML =
            `ჭარბი წონა : <span>${bmi}</span>`;
    }
}




