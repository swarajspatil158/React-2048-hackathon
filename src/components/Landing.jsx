const Landing = () => {
    function showHeart() {
        const heart = document.createElement("div");
        heart.innerText = ["2","4","8","16","32","64"][Math.floor(Math.random()*6)];
        heart.classList.add("heart");
        heart.style.transform = `scale(${Math.random()*5})`;
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() + 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        },4000);
    }

    setInterval(() => {
        showHeart();
    }, 5000);
    return (<>
        
        <header>
            <span>The Mind Game</span>
            <h1>2048 GAME</h1>
        </header>
            
        <div className="mainTab">
            <button>PLAY GAME</button>
            <button>HOW TO PLAY</button>
        </div>
        
        <footer>
            Made by Aditya Team
        </footer>

    </>)
}

export default Landing;