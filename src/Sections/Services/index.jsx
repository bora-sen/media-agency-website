import { gsap } from "gsap"
import React, { useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Services() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        duration: 0.55,
        xPercent: 155,
        scrollTrigger: {
          trigger: "#Services",
          start: "top bottom",
          end: "center center",
          scrub: 1.4,
        },
        stagger: 1.5,
        ease: "power4.Out",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="Services" className="w-full h-[100svh]">
      <div className="w-full h-full flex flex-col md:flex-row relative">
        <div className="hidden bg-black h-screen md:w-1/2 w-full md:flex items-center justify-center">
          <img className="invert" src="./src/Assets/marketing.png" alt="" />
        </div>
        <div className="h-screen md:w-1/2 w-full text-start flex flex-col items-center justify-evenly px-4">
          <div className="feature-card">
            <span className="text-2xl md:text-3xl font-display">Social Media Management</span>
            <p className="w-full leading-relaxed text-lg md:text-xl md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima blanditiis error voluptatum eos voluptates veniam, in dolore unde, enim
              autem nesciunt debitis nemo totam!
            </p>
          </div>
          <div className="feature-card">
            <span className="text-2xl md:text-3xl font-display">Online Marketing</span>
            <p className="w-full leading-relaxed text-lg md:text-xl md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima blanditiis error voluptatum eos voluptates veniam, in dolore unde, enim
              autem nesciunt debitis nemo totam!
            </p>
          </div>
          <div className="feature-card">
            <span className="text-2xl md:text-3xl font-display">E-Commerce Marketing</span>
            <p className="w-full leading-relaxed text-lg md:text-xl md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima blanditiis error voluptatum eos voluptates veniam, in dolore unde, enim
              autem nesciunt debitis nemo totam!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
