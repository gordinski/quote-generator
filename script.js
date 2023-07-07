const text = document.getElementById('quote-text')
const author = document.getElementById('author')
const btn = document.getElementById('next-btn')

async function getQuote() {
  const apiUrl = 'https://dummyjson.com/quotes/random';

  btn.innerText = 'Loading quote...'
  !btn.classList.contains('disabled') && btn.classList.add('disabled')

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    data.author === ''
      ? author.innerText = 'Unknown'
      : author.innerText = data.author

    text.innerHTML = data.quote;
    btn.innerText = 'Next quote →'
    btn.classList.remove('disabled')
  } catch (error) {
    getQuote();
  }
}

btn.addEventListener('click', getQuote)
getQuote();