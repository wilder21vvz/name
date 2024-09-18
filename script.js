const images = [
    { src: "imagenes/miblanquita.jpeg", text: "yo me siento muy orgulloso de la gran mujer que eres de lo mucho que te esfuerzas y aun que no todo sea sencillo en esta vida no te rindas porque aqui estare para animarte y apoyarte yo soy capaz de robar,arriesgar,mejorar y perder por ti,apesar de todo siempre te quere y amare mil vidas hasta el fin de mis dias porque mi amor es real por ti yo se que vas a salir adelante mi flaca hermosa y toma todo el tiempo que quiera yo siempre estre aqui en las verdes y en las maduras y te esperare el tiempo que sea nesesario tu puedes con todo mi princesa hermosa..." },
    { src: "imagenes/cancer.jpeg", text: " y yo me enamore de ti sin tocarte ni verte..." },
    { src: "imagenes/estrella.jpeg", text: " y yo te amaria todos los dias..." },
    { src: "imagenes/moustro.jpeg", text: " y yo me adaptaria a tu personalidad y a tu familia..." },
    { src: "imagenes/sinsom.jpeg", text: " y yo te amare sin importar tu pasado y diferencia..." },
    { src: "imagenes/titanic.jpeg", text: " y yo ariesgaria mi vida para solo hacerte feliz y darte todo lo que te mereces..." },
    { src: "imagenes/vestia.jpeg", text: " y yo te amare sin importar tu fisico ni tu apariencia porque para mis ojos eres la mas hermosa..." },
    { src: "imagenes/viejito.jpeg", text: " y yo te amaria toda la vida..." },
    { src: "imagenes/rosa.jpeg", text: "Tu eres como una rosa hermosa, llena de vida y delicadeza, capaz de iluminar mi mundo con solo una sonrisa tuya...." }
];

let currentImage = 0;

const photo = document.getElementById("photo");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");
const audio = document.getElementById("audio");

nextButton.addEventListener("click", () => {
    currentImage++;
    
    if (currentImage >= images.length) {
        currentImage = 0; 
    }

    
    photo.src = images[currentImage].src;
    message.textContent = images[currentImage].text;

    
    audio.play();
});
