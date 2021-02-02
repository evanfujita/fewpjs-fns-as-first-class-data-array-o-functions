

// let wakeDog = console.log(`Wake ${dogName} the ${dogBreed}`);
// let leashDog = console.log(`Leash ${dogName} the ${dogBreed}`);
// let walkDog = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
// let frisbeeDog = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
// let walkHome = console.log(`Walk home with ${dogName} the ${dogBreed}`);
// let unleashDog = console.log(`Unleash ${dogName} the ${dogBreed}`);

let wakeDog = function(dogName, dogBreed){
     return `Wake ${dogName} the ${dogBreed}`
}
let leashDog = function (dogName, dogBreed){ 
    return(`Leash ${dogName} the ${dogBreed}`);
}
let walkToPark = function(dogName, dogBreed){ 
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
}
let throwFrisbee = function(dogName, dogBreed){ 
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
let walkHome = function(dogName, dogBreed){ 
    return(`Walk home with ${dogName} the ${dogBreed}`);
}
let unleashDog = function(dogName, dogBreed){ 
    return(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    let array = []
    for(i = 0; i < routine.length; i++){
        let x = routine[i]
        array.push(x)
    }
    return array
}