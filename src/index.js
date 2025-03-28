  function getPoem(response){
  
    new Typewriter("#poem", {
      strings:response.data.answer,
      autoStart: true,
      delay:50,
      cursor:"",
      
    });
  }

  
  
  
  
  function generatePoem(event){
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user-instructions");


    let apiKey = "ef080d077be87f0o3fbae14a3eab95ta";
    let Prompt =`Users Instructions: You are a talented poet known for your creativity and vivid imagery. Write a beautiful 4-line poem based. Make it meaningful, engaging, and poetic ${instructionsInput.value} `;
    let context = "You are an expert poet, highly creative and expressive. Generate a 4-line poem based on the User's Instructions. Format the poem using HTML by wrapping each line in `<br>`. At the end, sign it with 'Waks Chatbox ✨' in bold using `<b>`.";

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${Prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = ` <div class = "generating" > ⏳Generating poem about ${instructionsInput.value}...`;



    

    axios.get(apiUrl).then(getPoem);
   

  }         
let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);