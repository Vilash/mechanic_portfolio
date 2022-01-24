
import "./intro.css"
import bat_me from "../../img/bat_fun.png"

const Intro = () => {
  return ( <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hi, my name is</h2>
              <h1 className="i-name">Vilas Yuvraj Deshmukh</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">ML Engineer</div>
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">App Developer</div>
                      <div className="i-title-item">Reader</div>
                      <div className="i-title-item">Analyst</div>

                  </div>
              </div>
              <p className="i-desc">
                  I design, develop modern apps, websites by day <div className="i-and">&</div>  
                  save the world with the help of AI by night.
              </p>
          </div>
          
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={bat_me} alt="" className="i-img" />
      </div>
      </div> )
};

export default Intro;
