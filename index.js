const images = [
    "./dice1.png",
    "./dice2.png",
    "./dice3.png",
    "./dice4.png",
    "./dice5.png",
    "./dice6.png",
  ];

  function getRandomimage(){
    return images[Math.floor(Math.random() * images.length)];

  }
  
  
 

  function refreshMe() {
        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        const button = document.querySelector("button");

        img1.src = getRandomimage();
        img2.src = getRandomimage();

        if(img1.src === img2.src){
            button.innerHTML = "Draw";
        }else if(img1.src > img2.src){
            button.innerHTML = "Player 1 Wins";}
        else{
            button.innerHTML = "Player 2 Wins";
        }

        setTimeout(() => {
            button.textContent = "Refresh Me";
        }, 5000);
    }