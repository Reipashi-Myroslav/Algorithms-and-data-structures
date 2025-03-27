function searchF(x, a, b) {
    try {
        let f;
        if (x<4) {
            f = Math.cos(x);
        }else if (x===4) {
            f = Match.pow(x,3) - b*x+1;
        }else if (x>4 && x < 7) {
            if (a*x>0) {
                f=1 / Math.sqrt(a*x);
            }else{
                return "Помилка: підкореневий вираз від'ємний.";
            }
        }else{
           return "Помилка: x виходить за проміжок";
        }
        return f;
    }catch (error) {
    return "Помилка: Сталасая помилка при обчислені";
    }
}

const x=5;
const a=2;
const b=3;
const result1 = searchF(x, a, b);
console.log(result1);