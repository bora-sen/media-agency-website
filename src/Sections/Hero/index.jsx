import { gsap } from "gsap"
import React, { useEffect, useLayoutEffect } from "react"
import WebGLFluid from "webgl-fluid"

function Hero() {
  useLayoutEffect(() => {
    WebGLFluid(document.getElementById("fluid-canvas"), {
      IMMEDIATE: false,
      TRIGGER: "hover",
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      CAPTURE_RESOLUTION: 128,
      DENSITY_DISSIPATION: 2,
      VELOCITY_DISSIPATION: 0.4,
      PRESSURE: 0.65,
      PRESSURE_ITERATIONS: 8,
      CURL: 10,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 4000,
      SHADING: false,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      TRANSPARENT: true,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      BLOOM: false,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    })

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#hero_title",
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          duration: 0.75,
          ease: "power3.Out",
        }
      )

      gsap.fromTo(
        "#hero_desc",
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "power3.Out",
        }
      )
    })

    return () => ctx.revert()
  }, [])
  return (
    <>
      <section className="w-full h-[100svh] bg-black text-white flex items-center justify-center">
        <canvas id="fluid-canvas" className="w-full h-full absolute"></canvas>
        <div className="text-8xl md:text-9xl font-display flex flex-col justify-center items-center pointer-events-none overflow-hidden">
          <h1 id="hero_title" className="opacity-100">
            Modio
          </h1>
          <span id="hero_desc" className="text-4xl">
            we know media
          </span>
        </div>

        <a href="#Services" className="absolute z-20 bottom-6 flex gap-2">
          <span className="font-bold">Scroll Down</span>
          <svg
            width={25}
            height={25}
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5.25 8.625 6.75 6.75 6.75-6.75" />
          </svg>
        </a>
      </section>
    </>
  )
}

export default Hero
