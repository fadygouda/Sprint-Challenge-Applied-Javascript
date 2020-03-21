// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const entryPoint= document.querySelector('.cards-container');
    const arrValue = Object.values(response.data.articles)
    arrValue.forEach(element => {
        element.forEach(article => {
            entryPoint.appendChild(cardMaker(article));
        })
    })
    
    console.log(response)
})
.catch(error => {
    console.log(error, 'ERROR')
})

const cardMaker = (card) => {
    const newCard = document.createElement('div')
    const headlines = document.createElement('div')
    const authors = document.createElement('div')
    const imageHolder = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    newCard.classList.add('card')
    headlines.classList.add('headline')
    authors.classList.add('author')
    imageHolder.classList.add('img-container')
    
    headlines.textContent = card.headline
    image.src = card.authorPhoto
    name.textContent = card.authorName

    newCard.appendChild(headlines)
    newCard.appendChild(authors)
    authors.appendChild(imageHolder)
    imageHolder.appendChild(image)
    authors.appendChild(name)

    return newCard

}
