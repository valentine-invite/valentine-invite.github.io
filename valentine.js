
// I put more effort in this than any cs project lowk
// but evidently chatGPT did most of the heavy lifing...

document.addEventListener("DOMContentLoaded", function () {
    const buttonNo = document.getElementById("no");
    const buttonYes = document.getElementById("yes");

    const audio1 = new Audio("vine_boom.mp3"); 
    const audio2 = new Audio("wow_better.mp3");
    const audio3 = new Audio("button_sound.mp3"); // TODO get this to work

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
            }, 500);
        }, 450);
    });

    buttonNo.addEventListener("mouseenter", function () {

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
