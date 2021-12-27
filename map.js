var map=new Map();
map.set('name','Anjali');
map.set('id','101');
map.set('lastname','B');
console.log(map.get('name'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
for(let key of map.keys()){
    console.log(key);
}