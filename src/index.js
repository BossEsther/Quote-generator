function changeTheme(){
    let body = document.querySelector("body");
    
    body.classList.toggle("dark");

    // Alternative Way but explainable

//    if (body.classList.contains("dark")){
//      body.classList.remove("dark");
//    } else{
//        body.classList.add("dark");
//    }
}

let themeButton = document.querySelector("#change-theme");
themeButton.addEventListener("click", changeTheme);

function displayQuote(response){
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
    let context = ` As a creative and experiended Ai, full with wisdom and numerous quotes.Generate inspirational,motivational and educational quotes, Separate each line with a <br>. Sign the quote after a <br> element with 'Esther Quotes' inside a <strong> element at the end of the quote and not the beginning.Do not include this:" " in the answer. Give a maximum of 4 lines to each answer`;
    let prompt = `Generate a Quote on ${inputElement.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // Alternative way but not suitable
    // let quoteElement = document.querySelector("#quotes");
    // quoteElement.innerHTML = "Life is not a bed of roses";


    let quoteGeneratorElement = document.querySelector("#quotes");
    quoteGeneratorElement.classList.remove("hidden");
    quoteGeneratorElement.innerHTML = `<div class="generating">⏳ Generating a Quote about ${inputElement.value} </div>`;


    axios.get(apiUrl).then(displayQuote);
}


let quoteGenerator = document.querySelector("#generate-quote");
quoteGenerator.addEventListener("submit", generateQuotes);