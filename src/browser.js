
const toggleImageCircle = (event) => {
  event.target.classList.toggle("img-circle")
}

const bindToggleImageCircle = (img) => {
  img.addEventListener("click", toggleImageCircle)
}

const addImage = () => {
  const newImage = document.createElement("img")
  newImage.src = "https://kitt.lewagon.com/placeholder/users/ssaunier"
  newImage.style.height = "200px"
  newImage.classList.add("clickable")
  document.body.append(newImage)

  bindToggleImageCircle(newImage)
}

setTimeout(addImage, 1000)


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".clickable").forEach(bindToggleImageCircle)
})

document.querySelectorAll(".confirmable").forEach((element) => {
  element.addEventListener("click", (event) => {
    if (!confirm("Are you sure?")) {
      event.preventDefault()
    }
  })
})


fetch("https://swapi.co/api/people/")
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((person) => {
      const name = `<li>${person.name}</li>`
      document.getElementById("people").insertAdjacentHTML("beforeend", name)
    })
  })


const searchAlgoliaPlaces = (event) => {
  const meta = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: event.currentTarget.value })
  }

  fetch("https://places-dsn.algolia.net/1/places/query", meta)
    .then(response => response.json())
    .catch(err => console.log(err))
    .then((data) => {
      console.log(data.hits)
    })
}

const input = document.getElementById("search") // that's an <input id="search">
input.addEventListener("keyup", searchAlgoliaPlaces)
