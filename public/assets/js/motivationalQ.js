//api for motivational quote
let authorEl = document.querySelector("#author")
let funQuoteEl = document.querySelector("#funQuote")

console.log("hi")
let api_url = "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";

async function getapi(url) {
  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "a3a4e80f16msh76859c9ae8fbee0p1baf97jsn009677e9d3e0",
      "X-RapidAPI-Host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
    }
  });
  var data = await response.json();
  console.log(data);
  authorEl.textContent = data.author;
  funQuoteEl.textContent = data.text;
};

getapi(api_url);



