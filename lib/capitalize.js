// Old ES5
// function capitalize(word) {
//
// }

// New Es6
const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase()
}

console.log(capitalize("evan"))
console.log(capitalize("eVaN"))
