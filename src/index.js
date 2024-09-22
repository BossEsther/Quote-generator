function displayQuote(response){
    console.log("Generated Quote...");
    new Typewriter('#quotes', {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 25,
    });

}

function generateQuotes(event){
    event.preventDefault();


    let inputElement = document.querySelector("#search-input");

    let apiKey = "to4b1410aa2839a0042157f44d3803ee";
    let context = ` As a creative and experiended Ai, full with wisdom and numerous quotes.Generate inspirational,motivational and educational quotes, Separate each line with a <br>. Sign the quote after a <br> element with 'Esther Quotes' inside a <strong> element at the end of the quote and not the beginning.Do not include this:" " in th answer`;
    let prompt = `Generate a Quote on ${inputElement.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // Alternative way but not suitable
    // let quoteElement = document.querySelector("#quotes");
    // quoteElement.innerHTML = "Life is not a bed of roses";

    console.log(`Generating A Quote.......`);
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayQuote);
}


let quoteGenerator = document.querySelector("#generate-quote");
quoteGenerator.addEventListener("submit", generateQuotes);