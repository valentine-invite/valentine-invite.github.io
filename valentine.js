
// I put more effort in this than any cs project lowk
// but evidently chatGPT did most of the heavy lifing...

document.addEventListener("DOMContentLoaded", function () {
    const buttonNo = document.getElementById("no");
    const buttonYes = document.getElementById("yes");

    const audio1 = new Audio("vine_boom.mp3"); 
    const audio2 = new Audio("wow_better.mp3");
    const audio3 = new Audio("button_sound.mp3"); 

    audio3.preload = "auto";

    // ofc browser is blocking one of the audios; this unblocks it
    function unlockAudio() {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const unlock = context.createBufferSource();
        unlock.connect(context.destination);
        if (context.state === "suspended") {
            context.resume();
        }
        document.removeEventListener("click", unlockAudio); // Remove listener after first interaction
    }

    document.addEventListener("click", unlockAudio, { once: true });

    const images = [
        "sus.jpg",
        "gay.png",     
        "sus-cat.png", // maybe switch
        "us.png",     
        "gayy.jpg"      
    ];

    const fixedImageSrc = "invite.png"; 

    const flashImage = document.createElement("img");
    const finalImage = document.createElement("img");

    function styleImage(img, size = "70%") {
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.maxWidth = size;
        img.style.display = "none"; 
    }

    styleImage(flashImage), "50%";
    styleImage(finalImage, "70%");
    document.body.appendChild(flashImage);
    document.body.appendChild(finalImage);

    // all the stuff when "yes" is clicked
    buttonYes.addEventListener("click", function () {
        audio1.currentTime = 0;
        audio1.play(); 

        const randomImage = images[Math.floor(Math.random() * images.length)];
        flashImage.src = randomImage;
        flashImage.style.display = "block";

        setTimeout(() => {
            flashImage.style.display = "none";

            setTimeout(() => {
                finalImage.src = fixedImageSrc;
                finalImage.style.display = "block";
                finalImage.style.opacity = "0";
                finalImage.style.transition = "opacity 0.5s ease-in-out";
                
                setTimeout(() => {
                    finalImage.style.opacity = "1";  
                    audio2.play();  
                }, 50);  

                setTimeout(() => {
                    finalImage.style.display = "none";
                }, 20000);
            }, 2000);
        }, 450);
    });

    // getting audio3 to work + making "no" run
    buttonNo.addEventListener("mouseenter", function () {

        audio3.currentTime = 0;
        audio3.play().catch(error => console.log("Audio playback error:", error));

        const maxX = window.innerWidth - buttonNo.clientWidth;
        const maxY = window.innerHeight - buttonNo.clientHeight;

        let randomX, randomY;

        do {
            randomX = Math.random() * maxX;
            randomY = Math.random() * maxY;
        } while (randomX < 100 || randomY < 100); 

        buttonNo.style.position = "absolute";
        buttonNo.style.left = `${randomX}px`;
        buttonNo.style.top = `${randomY}px`;
    });
});

//bouncy h1 + keep the spaces
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("text");
    const text = header.innerText;
    header.innerHTML = ""; 

    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char; 
        span.style.display = "inline-block";
        span.style.animation = `bounce 2s ease-in-out infinite`;
        span.style.animationDelay = `${index * 0.1}s`; 
        header.appendChild(span);
    });
});

// message in the beginning
document.addEventListener("DOMContentLoaded", function () {
    const clickMessage = document.getElementById("click-message");

    setTimeout(() => {
        clickMessage.classList.add("hidden");
    }, 2000); 
});