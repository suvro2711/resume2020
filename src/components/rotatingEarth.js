import React from 'react';
import { useSpring, useSprings, animated } from 'react-spring';
import Earth from '../assets/SVGs/earth'
import Shadow from '../assets/SVGs/Shadow'
import Reflection from '../assets/SVGs/Reflection'

function RotatingEarth() {

  const rotation = useSpring({
    from: { transform: "translate(0%,0%)" },
    to: async next => {
      while (1) await next({ transform: "translate(-46.8%,20.7%)" })
    },
    config: { duration: 10000 },
    reset: true
  })

  const revolution = useSpring({
    from: { transform: "translate(0%,0%)", zIndex: '16' },
    to: async next => {
      while (1) {
        await next({ transform: "translate(0%,0%)", zIndex: '16' })
        await next({ transform: "translate(120%,70%)", zIndex: '16' })
        await next({ transform: "translate(250%,100%)", zIndex: '16' })
        await next({ transform: "translate(380%,70%)", zIndex: '16' })
        await next({ transform: "translate(500%,0%)", zIndex: '14' })
        await next({ transform: "translate(400%,-110%)", zIndex: '14' })
        await next({ transform: "translate(300%,-140%)", zIndex: '14' })
        await next({ transform: "translate(200%,-100%)", zIndex: '14' })
        await next({ transform: "translate(80%,-70%)", zIndex: '14' })

        // await next({ transform: "translate(200%,80%)", zIndex: '16' })
        // await next({ transform: "translate(300%,80%)", zIndex: '16' })
        // await next({ transform: "translate(400%,20%)", zIndex: '16' })
        // await next({ transform: "translate(500%,0%)", zIndex: '14' })
        // await next({ transform: "translate(400%,-20%)", zIndex: '14' })
        // await next({ transform: "translate(300%,-50%)", zIndex: '14' })

      }
    },
    config: { duration: 2000 },
  })
  return (
    <>
      {/* style={{ transform: revolution.transform } */}
      <animated.div className="rotatingEarth" style={revolution}>
        {/* style={{ transform: props.transform }} */}
        < animated.div className="earth" style={{ transform: rotation.transform }}  >
          <Earth></Earth>
        </animated.div>
        <Shadow styles={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "-8%",
          top: "3%"
        }}></Shadow>
        <Reflection styles={{
          width: "65%",
          height: "65%",
          position: "absolute",
          left: "38%",
          top: "3%"
        }}></Reflection>
      </animated.div>
    </>
  );
}

export default RotatingEarth;