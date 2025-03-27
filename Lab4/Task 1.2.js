function searchF2(x, a, b) {
    try {
      let f;
      if (x < 4) {
        f = Math.cos(x);
      } else if (x === 4) {
        f = Math.pow(x, 3) - b * x + 1;
      } else {
        if (x > 4 && x < 7) {
          if (a * x > 0) {
            f = 1 / Math.sqrt(a * x);
          } else {
            return "Помилка: підкореневий вираз від'ємний.";
          }
        } else {
          return "Помилка: x виходить за проміжок.";
        }
      }
      return f;
    } catch (error) {
      return "Помилка: сталася помилка при обчисленні.";
    }
  }
  
  // Приклад використання
  const x2 = 6;
  const a2 = 1;
  const b2 = 5;
  const result2 = searchF2(x2, a2, b2);
  console.log(result2);  