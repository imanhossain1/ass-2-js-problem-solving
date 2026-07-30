console.log("Hello, World!");

function averageResponseTime(times) {
    console.log(times)
  if (!Array.isArray(times)) {
    console.log('array check---->', Array.isArray(times))
        return "Invalid";
   }
    console.log(times.length === 0)
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i =  0; i <= times.length; i++) {
        console.log('array value--->', times[i])
        console.log('array value--->',typeof times[i])
         if(typeof times[i] == "number"){
        total = total + times[i];
         }
    }
   console.log('total::',total)

  let averAge = total / times.length;
  console.log('aver age ', averAge)


  return averAge;
}

console.log('call me', averageResponseTime([120, 200, 150, 130]))
// console.log('call me', averageResponseTime([100, 100])) 
 

