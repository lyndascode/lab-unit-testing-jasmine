function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return undefined;
    }
    if (b === 0) {
      return a < 0 ? -Infinity : Infinity; // Handle division by zero
    }
    return a / b;
  }
  