import React from "react"

function Footer() {
  return (
    <div className="bg-white w-full py-12 px-4 mb-auto">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <a href="/#">
          <h1 className="font-display text-8xl pointer-events-none">Modio</h1>
        </a>

        <div className="flex gap-4 m-4">
          <div className="flex flex-col gap-8 mr-4 text-center">
            <a className="" href="#Works">
              Works
            </a>
            <a className="" href="#AboutUs">
              About Us
            </a>
          </div>
          <div className="flex flex-col gap-8 mr-4 text-center">
            <a className="" href="#Services">
              Our Services
            </a>
            <a className="bg-black text-white px-4 py-2 rounded-full" href="#ContactUs">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
