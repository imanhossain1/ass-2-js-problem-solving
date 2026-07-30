
// const restuArray =[{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]
const restuArray = "restaurant";

function topRatedRestaurant(restaurants) {
    // Write your code here
    console.log('check--',Array.isArray(restaurants));
    console.log('empty--',restaurants.length===0);
    
    
       if(!Array.isArray(restaurants) || restaurants.length===0){
        return 'Invalid'
       }
 
    // Write your code here 
        let largeShop = restaurants[0];
    for(let i = 0; i< restaurants.length; i++){
           if(restaurants[i].rating > largeShop.rating){
              largeShop = restaurants[i] 
           }
       
    }
        console.log('shop', largeShop);
        return largeShop.name.toUpperCase()


}
 console.log('call me' ,topRatedRestaurant(restuArray));