const isPrimeNumber = (number, divisor) => {
    if(number/2 < divisor) return number > 1;
    else if(number%divisor==0) return false;        
    else return isPrimeNumber(number, divisor+1);
};

const fibonacci = number =>
    number <= 1 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);

function nextPrimeFibonacci(number) {
    let primeFibonacci = 0;
    let fibonacciTerms = 1;
    
    while(!primeFibonacci) {
        let currentFibonacci = fibonacci(fibonacciTerms);
        console.log('fib', currentFibonacci, number);
        
        if (currentFibonacci > number) {
            if (isPrimeNumber(currentFibonacci, 2)) {
                primeFibonacci = currentFibonacci;
            }
        } 
        
        if(!primeFibonacci) {
            fibonacciTerms = fibonacciTerms + 1;
            console.info('bumping to', currentFibonacci);
        }
    }
    console.info('Next prime fib ', primeFibonacci);
}

nextPrimeFibonacci(20);
