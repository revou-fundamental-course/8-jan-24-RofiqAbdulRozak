function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateSquareRoot() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = '√' + currentValue;
    } else {
        display.value = 'Error';
    }
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        if (display.value.includes('√')) {
            var numberToRoot = display.value.replace('√', '');
            display.value = Math.sqrt(parseFloat(numberToRoot));
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function calculate() {
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;

    if (length && width) {
        var area = length * width;
        var perimeter = 2 * (parseFloat(length) + parseFloat(width));

        document.getElementById('result').value = "Luas: " + area + ", Keliling: " + perimeter;
    } else {
        document.getElementById('result').value = "Luas: 0, Keliling: 0";
    }
}

function resetForm() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('result').value = '';
}
