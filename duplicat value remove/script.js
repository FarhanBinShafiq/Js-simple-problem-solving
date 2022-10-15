const numbers=[1,2,3,6,1,4,9,3,5,3,4,7,52,58,2,4,5,87,4,2,4,1,15]

//Rules-one-bye-new-set
  const y=[...new Set(numbers)]
console.log(y)


//Rules-2

 const duplicates=numbers.filter((value,index,number)=>{
    return number.indexOf(value)===index;
 })

 console.log(duplicates);