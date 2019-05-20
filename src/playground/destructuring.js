//
// Object destructuring
//

// const person = {
//     name: 'Drew',
//     age: 24,
//     location: {
//         city: 'San Francisco',
//         temp: 70
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//
// Array destructuring
//

// const address = ['388 Beale Street', 'San Francisco', 'California', '94105']
// const [, city, state = 'New York', zip ] = address
// console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [beverage, , mediumPrice] = item
console.log(`A medium ${beverage} costs ${mediumPrice}`)