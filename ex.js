let sumElements=(arr)=>{
    console.log(arr);
    let sum=0;
    for(let elements in arr){
        sum+=elements;
    }
    console.log(sum);
}
sumElements([10,20,30]);