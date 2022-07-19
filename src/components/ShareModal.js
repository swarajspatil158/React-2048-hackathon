import {
    FaWhatsapp,
    FaTwitter,
    FaTelegramPlane
} from "react-icons/fa";
const ShareModal = ({setIsShareOn}) => {
    return(<>

        <div className="share-modal" onClick={() => setIsShareOn(false)}>
        </div>
        <div className="share-main-box">
            <div id="Modal-Close" onClick={() => setIsShareOn(false)}>X</div>
            <h2>Share Us</h2>
            <p>Share our website and help us to reach more and more people.</p>
            <p>Thank you 🤍
            <div className="btn-group">
                    <a className="social-btn" target="/#/" href="whatsapp://send?text=Check this amazing 2048 Maths Mind Game... https://2048-hackathon.netlify.app/"> <FaWhatsapp></FaWhatsapp> </a>
                    <a className="social-btn" target="/#/" href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%202048%20Maths%20Mind%20Game...%20https%3A%2F%2F2048-hackathon.netlify.app%2F"> <FaTwitter></FaTwitter> </a>
                    <a className="social-btn" target="/#/" href="https://t.me/share/url?url=https://2048-hackathon.netlify.app/&text=Check%20this%20amazing%202048%20Maths%20Mind%20Game...https://2048-hackathon.netlify.app/" rel="noreferrer"> <FaTelegramPlane></FaTelegramPlane> </a>

            </div>
            </p>
        </div>
           </>)
}

export default ShareModal;