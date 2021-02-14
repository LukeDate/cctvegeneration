import React, { useEffect, useRef } from 'react'
import handleViewport from 'react-in-viewport'
import '../styles/home.scss'

const About = () => (
    <div className="about-wrapper">
        <h1>Some text goes here</h1>
    </div>
)

const ViewportAbout = handleViewport(About)

const Home = ({ ...props }) => {
  const myRef = React.createRef()
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    console.log(props.hasScrolled)
    myRef.current.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight
    })
  }, [props.hasScrolled])

  return (
        <div ref={myRef} className="home-wrapper">
            <div className="scroll-wrapper">
                <div className="home-scroll">
                    <h1>
                        Artists Against Surveillance
                    </h1>
                </div>
                <ViewportAbout
                    onEnterViewport={() => console.log('enter')}
                    onLeaveViewport={() => console.log('leave')} />
            </div>
        </div>
  )
}

export default Home
