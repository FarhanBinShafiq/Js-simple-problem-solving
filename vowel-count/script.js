let vowel=['a','e','i','o','u','A','E','I','O','U']

function vowelCount(sentence){
  let count=0;
  let texts=Array.from(sentence);

  texts.forEach(function(value){
    if(vowel.includes(value)){
        count++;
       
    }
  })
    return count;
  
}

 
console.log(vowelCount('I love my Country.My name is Farhan.This is only practice'));
