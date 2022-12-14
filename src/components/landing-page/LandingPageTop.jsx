import React from 'react'
import './LandingPageTop.scoped.css'
// eslint-disable-next-line
import { TypeAnimation } from 'react-type-animation';
         

const LandingPageTop = () => {
  return (
    <div className='container'>
      <div className="container-left">
            <div className='container-left-heading'>
              Healthy <br/> <span>food</span> for <br/>a healthy life
            </div>
            <div className='container-left-content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eius, impedit aliquid amet atque assumenda minus dignissimos omnis sit voluptatibus vero! Modi qui dolore quisquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nisi, numquam ullam cumque perferendis facere quasi nostrum molestias repellat totam non soluta! Adipisci, alias esse!
            </div>
            <div className='container-left-buttons'>
                <button>
                    Login
                </button>
                <button>
                    SignUp
                </button>
            </div>
        </div>
        <div className='container-right'>
          <div className='container-right-circle'>
          </div>
          <img src={require('../../assets/landingpage-mascot.png')} alt='moscot'/>
          <div className='animated-text-area'>
          <TypeAnimation
      sequence={[
        'I Ate 3 slice of white-bread',
        1500,
        '2 Glasses of milk',
        2000,
        '1 Chicken leg',
        1000,
        'You can Also Upload a picture',
        3000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2.2em', opacity: '80%' }}
    />
          </div>
          </div>
        </div>
  )
}

export default LandingPageTop
