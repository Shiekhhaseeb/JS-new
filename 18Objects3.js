// const course={
//     coursename:"js in hindi",
//     price:'999',
//     courseInstructor:"hitesh"
// }
// course.courseInstructor
//to make code clean 
/*we dont like to write 
course.price
course.coursename
*/

//
//Object de-structure :-
// const {courseInstructor:instructor}=course
// console.log(instructor);//hitesh

/**************IN React******************** */
// const navbar=(props.company)=>{

// }
// navbar(company="hitesh")

/*****{}means destructuring **************************/
// const navbar=({company})=>{

// }
// navbar(company="hitesh")

/******************************************** */
//There is also Array destructuing but this is rearely used
/****************************** */
//API: Apna kam dusre par dalna
//how we write the values from backend
//old times these values used to come in xml but now these vlaues come in jason
//JSON
/*
{
This curly brackets is JSON
}
*/
const course={
    coursename:"js in hindi",
    price:'999',
    courseInstructor:"hitesh"
}

course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor);
//This is JSON,we get api's like this
// :-
//  {
//     name:"hitesh",
//     coursename:"Js in hindi",
//     price:"free"
//   }

//sometime we get API's in the form of arrays
[
    {},
    {},
    {}
]

//JSON :-js object notation
//goole --> famous APi =Random user me

//go to JSON fromatter  

