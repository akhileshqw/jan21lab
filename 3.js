// function delayedMessage(message, delay) {
   
//     function fn(){
//         let d=new Date()
//         let time=d.toTimeString()
//         console.log(time+" msg will be printed after this.")
//     }


//     setInterval(() => {
//         fn()
//         console.log(message);
//     }, delay);
// }

// let time=5000
// delayedMessage(`hello is printed after every ${time} seconds `,time)

function delay(message, callback) {
    setTimeout(() => {
        console.log(message); 
        if (callback) {
            callback(); 
        }
    }, 2000);
}
delay("Hello, world", () => {
    console.log("Message has been printed.");
});
console.log("this message is delayed for 2s")