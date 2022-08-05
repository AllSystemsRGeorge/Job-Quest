//api for motivational quote

const api_url ="https://zenquotes.io/api/today/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);
