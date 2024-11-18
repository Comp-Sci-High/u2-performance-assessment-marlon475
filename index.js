const prompt = require('prompt-sync')()
async function generateImage(imageGeneration){
const apiKey = "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"
const url = "https://api.openai.com/v1/images/generations"
const options = {

    method: 'POST',
    headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",

    },
    body: JSON.stringify(imageGeneration),
        
    }
    try {
    const response = await fetch(url,options);
    if(response.ok === false){
        console.log("HTTP error! Status: " + response.status);
    }
    
    const data = await response.json();
    console.log(data);
    return data;
} catch (error){
    console.log("An error occurred: " + error.message)
}
}
let imageGenerator = prompt("What color car do you want to generate?")
generateImage({
    prompt: imageGenerator + 'car',
})
async function fetchData(requestUrl){
    try {
    const response = await fetch(requestUrl)
    if(response.ok === false) {
        console.log("HTTP error! Status: " + response.status)
    }
    const data = await response.json()
    console.log(data)
    return data
} catch(error){
    console.log("An error occurred:" + error.message)
 }
}
fetchData("https://dog.ceo/api/breeds/image/random")