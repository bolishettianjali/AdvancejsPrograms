const name="Anjali";
const greet="True";
function tagExample(strings,namevalue){
    let str0=strings[0];
    let str1=strings[1];
    if(greet){
       return `${str0}${namevalue}${str1}`;
    }
}
const result = tagExample`Hello ${name}, How are you?`;

console.log(result);