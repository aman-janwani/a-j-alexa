const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greeting = ["im good you little piece of love",
    "doing good homeboi",
    "leave me alone"
];
const weather = ["weather is fine", 
    "weather is bad"
];
const me = ["you are good", 
    "you are lazy"
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

Recognition.onstart = function () {
    content.textContent = "voice is activated";
};

Recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener("click", () => {
    Recognition.start();
});
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "i dont know what you said";
    if (message.includes("how are you")) {
        const finalText = greeting[Math.floor(Math.random() * greeting.length)];
        speech.text = finalText;
    }else if(message.includes("what is today's weather")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }else if(message.includes("how I am")){
        const finalText = me[Math.floor(Math.random() * me.length)];
        speech.text = finalText;
    }else if(message.includes("I love you")){
        speech.text = "but i hate you";
    }else if(message.includes("change background colour to red")){
        speech.text = "changing color";
        document.querySelector("body").style.backgroundColor = "red";
    }else if(message.includes("change background colour to White")){
        document.querySelector("body").style.color = "black";
        speech.text = "changing color";
        document.querySelector("body").style.backgroundColor = "White";
    }else if(message.includes("change background colour to black")){
        speech.text = "changing color";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}