import { gsap } from "gsap"
import React, { useLayoutEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import dataset from "../../dataset.json"

function AboutUs() {
  const { peoples } = dataset

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".people-card").map((element) => {
        gsap.from(element, {
          opacity: 0,
          yPercent: 25,
          duration: 0.45,
          scrollTrigger: element,
          ease: "power4.inOut",
          stagger: 0.35,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="AboutUs" className="w-full h-auto bg-white my-12 pt-12">
      <span className="text-5xl font-bold block text-center my-12">Our Team</span>
      <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-2 md:mx-[15rem]">
        {peoples.map((people, index) => {
          return (
            <div key={index} className="people-card flex flex-col justify-between overflow-hidden">
              <img className="w-[18rem] mx-auto" src={`/modio-website/assets/People/${people.name.toLowerCase()}.svg`} alt="" />
              <div className="grid mx-auto text-center my-4">
                <h5 className="text-2xl font-bold sm:text-3xl">{people.name}</h5>
                <span className="text-sm sm:text-base">{people.title}</span>
                <span className="text-xs sm:text-base">&quot;{people.slogan}&quot;</span>
                <span className="font-bold text-sm sm:text-base">{people.instagramNick}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AboutUs
