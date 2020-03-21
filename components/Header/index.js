// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const head = document.createElement('div')
    const dates = document.createElement('span')
    const title = document.createElement('h1')
    const temperature = document.createElement('span')

    head.classList.add('header')
    dates.classList.add('date')
    temperature.classList.add('temp')

    dates.textContent = 'March 28, 2019'
    title.textContent = 'Lambda School'
    temperature.textContent = '98°'

    head.appendChild(dates)
    head.appendChild(title)
    head.appendChild(temperature)

    return head


}
document.querySelector('.header-container').appendChild(Header());