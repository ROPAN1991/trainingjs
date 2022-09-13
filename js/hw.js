function checkForSpam(message) {
    let result;
    const blackListWordOne = "spam";
    const blackListWordTwo = "sale";

    const normalizedMessage = message.toLowerCase()
    // Change code below this line
    // result = normalizedMessage.includes(blackListWordOne) || normalizedMessage.includes(blackListWordTwo)

//     if(normalizedMessage.includes(blackListWordOne)){
//         result = true
//     } else if(normalizedMessage.includes(blackListWordTwo)) {
//         result = true
//     } else {
//         result = false
//     }
//     // Change code above this line
//     return result;
//   }

//     if(normalizedMessage.includes(blackListWordOne) || normalizedMessage.includes(blackListWordTwo)) {
//         result = true
//     } else {
//         result = false
//     }

//     return result
// }
  console.log(checkForSpam("Latest technology news"))
  console.log(checkForSpam("Get best sale offers now!"))