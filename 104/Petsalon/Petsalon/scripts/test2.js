// Object literal
let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 = {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}
let elephant = {
    name:"Elle",
    kingOfJungle:false,
    food:"Herbivore"
}

// Object constructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger = 10;
    this.feed=function(){
        console.log("Feeding...")
        this.hunger = this.hunger - 2;
    }
}
// Create Objects
let lionC = new Animal("Simba",true,"Carnivore");
console.log(lionC.feed());



// Create a constructor
//school, student, instructor, assignment, courses, exam,

function Courses(name, number, month, completed, tasks){
    this.name=name;
    this.number=number;
    this.month=month;
    this.completed=completed;
    this.tasks=tasks;
    this.doaTask=function(){
        console.log("Cooking...")
        if (this.tasks >= 10) {
            this.tasks = 10;
            this.completed = true;
            console.log("Tasks Completed!")            
        }
        else
        {
            this.tasks = this.tasks + 1;
            console.log("New Task completed!")
        }
    }
}
// Create Object
let coursesA = new Courses("Cooking", 101, "February", false, 2);
console.log(coursesA.doaTask());