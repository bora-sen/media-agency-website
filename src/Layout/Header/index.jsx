import React from "react"

function Header() {
  return (
    <nav className="bg-white z-30 w-full py-2 px-4 fixed top-0 mb-auto">
      <div className="flex justify-center sm:justify-between items-center">
        <a href="/#">
          <h1 className="font-display text-4xl pointer-events-none">Modio</h1>
        </a>
        <ul className="hidden sm:flex gap-8 mr-4">
          <li>
            <a className="" href="#Works">
              Works
            </a>
          </li>
          <li>
            <a className="" href="#AboutUs">
              About Us
            </a>
          </li>

          <li>
            <a className="" href="#Services">
              Our Services
            </a>
          </li>
          <li>
            <a className="bg-black text-white px-4 py-2 rounded-full" href="#ContactUs">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
