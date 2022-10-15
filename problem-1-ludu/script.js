const luduText=document.getElementById('ludu-text');

const luduRandomNumber=()=>{
    const randomNumber= Math.floor(Math.random()*7)
    console.log(randomNumber)
    luduText.innerText=randomNumber;

}

console.log(luduText)