function calculateSequence(m) {
    if (m < 1) {
      return "Помилка: m має бути ≥ 1.";
    }
  
    const sequence = [];
    for (let n = 1; n <= m; n++) {
      try {
        const x_n = Math.log(n + 1) / (5 * Math.pow(n, 2) + 3);
        sequence.push(x_n);
      } catch (error) {
        return "Помилка: сталася помилка під час обчислення.";
      }
    }
  
    
    sequence.forEach((x_n, index) => {
      console.log(`x_${index + 1} = ${x_n.toFixed(6)}`);
    });
  
    return "Розрахунок завершено.";
  }
  
  
  const m = 5;
  const resultSequence = calculateSequence(m);
  if (resultSequence !== "Розрахунок завершено.") {
    console.log(resultSequence);
  }
  