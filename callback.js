function func1(c){
    console.log("I am func1");
    c();
}
function func2(){
    console.log("I am func2");
    
}
setTimeout(func2,2000)
func1(func2);