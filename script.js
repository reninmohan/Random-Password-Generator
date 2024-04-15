const copyButton = document.getElementById("copyBtn");
const passwordGenerateButton = document.getElementById("generateBtn");
const passwordInput = document.getElementById("passwordInput");

function passwordGenerate(){
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "012345679";
    const specialCharacter = "!@#$%^&*()+=-*/+";
    const character = [...alphabets,...numbers,...specialCharacter].sort(()=>Math.random() -0.5 );
    let generatePassword = ""
    for(let i=0 ; i<12; i++){
        const randomIndex = Math.floor(Math.random() * character.length);
        generatePassword += character[randomIndex];
    }    
    passwordInput.value = generatePassword;
}


function copyPassword(){
    if(passwordInput.value !=="")
    {
    navigator.clipboard.writeText(passwordInput.value)
    .then(()=>{
        let message = `${passwordInput.value} copied in clipboard`
        showNotification(message);
    })
    .catch(err =>{
        console.error("Error while copying password to clipboard:", err);
        showNotification("Error copying password. Please try again.");
    })
    }else{
        showNotification("Click on Generate Password Button");
    }
}

function showNotification(message){
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show")
    setTimeout(()=>{
        notification.classList.remove("show")
    },2000);
}



passwordGenerateButton.addEventListener('click', passwordGenerate)

copyButton.addEventListener('click',copyPassword);