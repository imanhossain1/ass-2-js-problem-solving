
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];
    for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }

    return topRestaurant.name.toUpperCase();
}

const outPut1 = [
    {name: "Chillox", rating: 4.5},
    {name: "Sultan's Dine", rating: 4.8},
];
const outPut2 = [
    {name: "KFC", rating: 4.2},
    {name: "Pizza Hut", rating: 4.6},
];
const outPut3 = [];
const outPut4 = "restaurants";

console.log("call me", topRatedRestaurant(outPut1)); //SULTAN'S DINE
console.log("call me", topRatedRestaurant(outPut2)); //PIZZA HUT
console.log("call me", topRatedRestaurant(outPut3)); //Invalid
console.log("call me", topRatedRestaurant(outPut4)); //Invalid
