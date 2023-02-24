/*
    function    =   fristående och globalt deklarerad
    metod       =   ingår i en instansierad klass
    const       =   statisk deklarerad - dvs global

    DEKLARERING AV FUNKTIONER
    -------------------------------------------------------------------------------------------------------------------------------------
    function(){}            =   anonymous function
    function name() {}      =   function 

    () => {}                = anonymous arrow function (ES6)
    const name = () => {}   =   arrow function (ES 5)

*/

function welcomeMessage (name){
    console.log('Welcome $(name)')
}

const welcomeMessage1 = (name) {
    console.log(`Welcome $(name)`)
}