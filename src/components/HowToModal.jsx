const HowToModal = ({setModalIsOpen})=>{
    return(<>
        <div className="how-to-modal" onClick={() => setModalIsOpen(false)}>
        
    </div>
        <div className="Modal-main-box">
            <div id="Modal-Close" onClick={() => setModalIsOpen(false)}>X</div>
            <h2>How to Play</h2>
            <p>Use your arrow keys to move the tiles.Tiles with the same number merge into one when they touch. Add them up to reach 2048 !</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aJlHNKPX_OE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
    </>)
}

export default HowToModal;