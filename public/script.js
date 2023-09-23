
const text=document.getElementById("qoute"),
author =document.querySelector(".name"),
qouteBtn = document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter");



function randomQoute(){
    qouteBtn.classList.add("loading");
    qouteBtn.innerHTML="Loading Qoute...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        text.innerHTML=result.content;
        author.innerHTML=result.author;
        qouteBtn.innerHTML="New Qoute"
        qouteBtn.classList.remove("loading");

    });
};
randomQoute();

soundBtn.addEventListener("click", ()=>{
    let utterece= new SpeechSynthesisUtterance(`${text.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(utterece);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(text.innerHTML)
});

twitterBtn.addEventListener("click", ()=>{
    let tweet = `https://twitter.com/intent/tweet?url=${text.innerHTML}`
    window.open(tweet,"_blank");
})
// qouteBtn.addEventListener("click", randomQoute());