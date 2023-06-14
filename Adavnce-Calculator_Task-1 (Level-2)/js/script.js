function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    const expression = document.getElementById('display').value;
    try {
      let result;
      if (expression.includes('%')) {
        // Calculate percentage
        const [number, percentage] = expression.split('%');
        result = parseFloat(number) * (parseFloat(percentage) / 100);
      } else if (expression.includes('MOD')) {
        // Calculate modulo
        const [number, modulo] = expression.split('MOD');
        result = parseFloat(number) % parseFloat(modulo);
      } else {
        result = eval(expression);
      }
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function toggleSign() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);
    if (currentValue > 0) {
      display.value = `-${Math.abs(currentValue)}`;
    } else if (currentValue < 0) {
      display.value = Math.abs(currentValue);
    }
  }