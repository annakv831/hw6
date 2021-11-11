const getRandomInteger =(a,b) =>{
    return a+ Math.round(Math.random()*(b-a));
}

const integerRandom= getRandomInteger(10,20);
console.log(`integerRandom`,integerRandom);