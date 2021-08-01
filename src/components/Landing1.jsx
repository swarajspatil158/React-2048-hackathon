const Landing1 = () => {
    return(<>
        <div className='ripple-background'>
            <div className='circle xxlarge shade1'></div>
            <div className='circle xlarge shade2'></div>
            <div className='circle large shade3'></div>
            <div className='circle medium shade4'></div>
            <div className='circle small shade5'></div>
        </div>
        <div className="pageContent">
            <header>
                <span>The Mind Game</span>
                <h1>2048 GAME</h1>
            </header>

            <div className="mainTab">
                <button>PLAY GAME</button>
                <button>HOW TO PLAY</button>
            </div>

            
        </div>
        <footer>
            Made by Aditya Team
        </footer>

    </>)
}

export default Landing1;