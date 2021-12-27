class People{
    constructor(name){
        name=name;
    }
    setName(){
          this.name=name;
    }
    getName(){
        return this.name;
    }
}
    let person=new People("Anjali");
    
    console.log(person.getName());
