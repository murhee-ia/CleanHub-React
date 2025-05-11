import guideStyles from "./Landing.module.css"
import jobHuntingImg from "../../assets/images/jobHunting.svg"
import jobRecruitingImg from "../../assets/images/jobRecruiting.svg"
import requestHelpImg from "../../assets/images/requestHelp.svg"

const Guide = () => {
  return (
    <section className={guideStyles['guide-section']}>
      <header className={guideStyles['guide-header']}>
        <span>NAVIGATE</span><span>Through the Hub</span>
      </header>
      <div className={guideStyles['guide-grid-container']}>
        <div className={guideStyles['guide-grid']}>
          <div className={guideStyles['guide-box']}>
              <img src={jobHuntingImg} alt="" />
              <div className={guideStyles['guide-box-content']}>
                <p>Looking for Jobs?</p>
                <span>Click button below for steps</span>
                <div className='letsbeginbutton-container'>
                  <button className='whiteShadow'>How To Hunt</button>
                </div>
              </div>
          </div>
          <div className={guideStyles['guide-box']}>
            <img src={jobRecruitingImg} alt="" />
            <div className={guideStyles['guide-box-content']}>
              <p>Recruiting Cleaners?</p>
              <span>Click button below for steps</span>
              <div className='letsbeginbutton-container'>
                <button className='whiteShadow'>How To Recruit</button>
              </div>
            </div>
          </div>
          <div className={guideStyles['guide-box']}>
            <img src={requestHelpImg} alt="" />
            <div className={guideStyles['guide-box-content']}>
              <p>Need Help Request?</p>
              <span>Click button below for steps</span>
              <div className='letsbeginbutton-container'>
                <button className='whiteShadow'>How To Request</button>
              </div>
            </div>
          </div>
          <div className={guideStyles['guide-box']}>
            <img src={requestHelpImg} alt="" />
            <div className={guideStyles['guide-box-content']}>
              <p>Need Help Request?</p>
              <span>Click button below for steps</span>
              <div className='letsbeginbutton-container'>
                <button className='whiteShadow'>How To</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide