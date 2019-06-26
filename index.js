function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  // const fifthBook = json[4]
  // const h2 = document.createElement('h2')
  // const p = document.createElement('p')
  // const p2 = document.createElement('p')
  // h2.innerHTML = `<h2>5: ${fifthBook.name}</h2>`
  // p.innerHTML = `<p>1031st Character: ${fifthBook.characters[1030]}</p>`
  // const sum = json => json[:numberOfPages]((a,b) => a + b, 0)
  // p2.innerHTML = `<p>${sum}</p>`
  // main.appendChild(h2)
  // main.appendChild(p)
  // main.appendChild(p2)

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
