
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
        return "Invalid";
   }
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i =  0; i < times.length; i++) {
         if(typeof times[i] == "number"){
        total = total + times[i];
         }else{
             return "Invalid";
         }
    }
  let averAge = total / times.length;

  return averAge;
}

console.log('call me', averageResponseTime([120, 200, 150, 130])) 
console.log('call me', averageResponseTime([100, 100]))  
console.log('call me', averageResponseTime([]))  
console.log('call me', averageResponseTime("logs"))  
console.log('call me', averageResponseTime([120, "200", 150]))  

 

