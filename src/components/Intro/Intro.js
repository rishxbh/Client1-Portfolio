import './Intro.css'
function Intro() {
    return (
        <div id="intro">
            <div className="intro-content">
                <div className='intro-content-int'>
                    <div className='text-intro'>
                        <span className="hello">Hey,<br /></span>
                        <span className="introText">I'm <span className="introName">Ritika</span><br />a content writer and storyteller</span>
                        <p className="introPara">blending
                            words, visuals, and brand emotion.
                            With a background in fashion and commerce, I found
                            my spark in content creation, from blogs and brand
                            voice to captions and decks that connect.</p>
                    </div>
                </div>
                {/* <div className='mountain'></div> */}
            </div>
            <div className="intro-photo">
                <div className="me"></div>
                {/* <div className="name"><h3>Ritika Chauhan</h3></div> */}
            </div>
        </div>
    )
}
export default Intro;