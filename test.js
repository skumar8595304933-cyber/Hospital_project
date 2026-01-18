// fetch("https://www.goyral.com/indiamart/final/index.php", {
//     method: "POST"
// }).then(function (output){
//     return output.json();
// }).then(function(output){
//     console.log(output);
// })



// _________________________________________________________________________________________________
function timer(ms){
   
   var a = new Promise((resolve, reject) => {
      setTimeout(function(){ 
         // console.log("neeraj");
         if (b == 1){
            resolve()
         }else if(b == 5){
            resolve()
         }else {
            reject();
         }


         lkjlkj
      }, ms);

   })
   
   return a;
}

async function callapi(){   
   let d = await timer(3000);
   console.log(d);
   console.log("suyal");
   console.log("suyal");
   console.log("suyal");
   console.log("suyal");
   console.log("suyal");
}

callapi();
// _________________________________________________________________________________________________________


// async function callapi(){
//    var data = await fetch("https://www.goyral.com/indiamart/final/index.php", {method: "POST"});


//    var output = await data.json();
//    console.log(output);
   
// }

// callapi();

// _________________________________________________________________________________________________________________



// function callapi(){
//    var data =  fetch("https://www.goyral.com/indiamart/final/index.php", {method: "POST"});

//    data.then(function (newdata) {
//       var a = newdata.json();
//       return a;
//    }).then(function(result) {
//       console.log(result);
//    })
   
   
   
//    var a = 2;
//    var b = 3;
//    console.log(a+b);
// }

// callapi();