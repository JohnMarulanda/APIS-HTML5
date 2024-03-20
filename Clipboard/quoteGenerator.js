let generateQuoteBtn = document.querySelector('#generate-quote');
let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');
let handleCopyClick = document.querySelector('#copy-quote');

const generateQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    if (response.ok) {
        const quote = await response.json();
        quoteText.textContent = quote?.content;
        quoteAuthor.textContent = `- ${quote?.author}`
    }
}

const copyQuote = () => {
    let text = quoteText.textContent;
	let author = quoteAuthor.textContent;
    navigator.clipboard.writeText(`${text} - ${author}`)
    alert(`Quote by ${author} copied to clipboard!`);
}

generateQuoteBtn.addEventListener('click', generateQuote);
handleCopyClick.addEventListener('click', copyQuote);