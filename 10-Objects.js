//                                                      OBJECTS
//In objects we store the data in the form of key value pair



let user = {
    firstName:"Korlapu",
    lastName:"abhishek",
    loginCount:35,
    role:"admin",
    faceBookLogIn:true
}

// ways accessing the objects 

console.log(user.firstName,user.lastName)
console.log(user["firstName"])
// in the above method we have write the element key in string inside the square brackets

console.table(user) // by this we can access the data in the form of table in console

console.log(typeof user)


//                                      OBJECTS METHODS

let user2 = {
    firstName:"Korlapu",
    lastName:"abhishek",
    loginCount:35,
    role:"admin",
    faceBookLogIn:true,
    courseList:[],
    buyCourse: function (courseName){
        this.courseList.push(courseName)
    },
    getcourseCount: function(){             // this function is declared as 
        for(let a of user2.courseList){
            console.log(a)
        }
        return `${this.firstName} is enolled in total of ${this.courseList.length}`
    }

}
user2.buyCourse("python core")
console.table(user2.getcourseCount())
console.log(user2.courseList)

// creating or adding new property or key value in object

// syntax objectname.proertyname = value;

user2.age=25
console.table(user2)

// updating property or key value in object

// syntax objectname.proertyname = value;

user2.loginCount=40
console.table(user2)

// deleting property or key value in object

// syntax delet.objetname.propertyname;

delete user2.age;
console.table(user2)


//          Creating the object using new Keyword

let person1 = new Object() // here the object is created but it is empty
console.log(person1, typeof person1)
