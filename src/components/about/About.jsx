
import "./about.css"
import voice_assist from "../../img/bat_beyond.gif"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={voice_assist} alt="" className="a-img" />
            </div>
        </div>     
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
            </p>
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
            <div className="a-award">
                <img src="" alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">DataCamp</h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, optio tempore. Numquam, amet inventore dolorum labore quis eum dolores hic natus repellat eius quasi nisi adipisci autem ducimus aspernatur temporibus!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default About;
