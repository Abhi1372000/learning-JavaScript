// Example of switch case
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

var user = 'Basic'

switch(user){
    case 'admin':
        console.log("Given full authentication")
        break
    case 'Employee':
        console.log("Given student Previllages")
        break
    case 'Basic':
        consle.log("Given basic PreVillages")
    default:
        console.log("Inside default block")
}