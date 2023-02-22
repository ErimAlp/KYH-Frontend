//DOM manipulation

var firstName = document.getElementById("firstName").value 
var lastName = document.getElementById("lastName").value

console.log(firstName)

console.log(document.getElementsByName('firstName')[0].value)
console.log(document.getElementsByTagName('input'))

console.log(document.getElementById('displayName').innerHTML = "<strong> Erim Bayramoglu </strong>")