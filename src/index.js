function generateQuotes(event){
    event.preventDefault();

    new Typewriter('#quotes', {
        strings: "Life is not a bed of roses",
        autoStart: true,
        cursor: null,
        delay: 25,
    });


    // Alternative way but not suitable
    // let quoteElement = document.querySelector("#quotes");
    // quoteElement.innerHTML = "Life is not a bed of roses";
}


let quoteGenerator = document.querySelector("#generate-quote");
quoteGenerator.addEventListener("submit", generateQuotes);