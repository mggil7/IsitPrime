let N = 30
let primo = [];

function isPrime (num) {
    if ( num <= 1 ){
        return false ;     
    }

    for (let i = 2; i * i <= num ; i ++){
        console.log('ix:',i);
        if ( num % i === 0){
        return false;
        }
    }

    return true

} 

for (let i = 2; i <=N; i++){
    if(isPrime(i)){
        console.log(i);
        primo.push(i);
    }
}

console.log(primo);

