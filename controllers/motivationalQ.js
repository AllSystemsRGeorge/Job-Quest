//api for motivational quote

const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a3a4e80f16msh76859c9ae8fbee0p1baf97jsn009677e9d3e0',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});