// Immediately Invoked Function Expressions(IIFE):-->

//To avoid pollution of global scope pollution we use IIFE(interview question)
//Jo fxn immediately execute hojaye

// function chai() {
    
//     console.log(`DB Connected`);
    
// }
// chai()

/********************* */
// (function chai() {//Named IIFE
    
//     console.log(`DB Connected`);
    
// })
// ()
//(1):-() FXN DEF
//(2):()  EXE CALL  chai ()
/****************** */
// (function chai() {
    
//     console.log(`DB Connected`);
    
// })
// ();//(;) semicolon is necessary here
// ( () => {
    
//     console.log(`DB Connected 2`);
    
// })
// ()

/*******2 iffe in single file*************** */
(function chai() {
    
    console.log(`DB Connected`);
    
})
();//(;) semicolon is necessary here
( (name) => { //UNnamed iffe
    
    console.log(`DB Connected 2 ${name}`);
    
})
("Haseeb")