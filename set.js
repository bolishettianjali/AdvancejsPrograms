var set=new Set();
set.add('a');
set.add('b');
set.add('a');
for(let element of set){
    console.log(element);

}
console.log(set.size);
var set1=new Set([1,2,3,4]);
console.log(set1.has(1));