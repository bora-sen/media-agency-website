import React from "react"

function ContactUs() {
  return (
    <section id="ContactUs" className="w-full h-screen bg-gradient-to-t from-gray-800 to-black">
      <div className="w-full h-full flex items-center justify-center text-white md:text-xl">
        <form
          onSubmit={(e) => {
            console.log(e)
          }}
          className=" xl:w-[32rem]"
        >
          <div className="grid gap-8">
            <div className="grid gap-2">
              <label className="font-display" htmlFor="input_name">
                Contact Name
              </label>
              <input
                placeholder="Enter Contact Name"
                className="outline-white rounded-md bg-transparent focus:outline-red-500 outline-none p-2"
                id="input_name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-display" htmlFor="input_name">
                Company Name
              </label>
              <input
                placeholder="Enter Company Name"
                className="outline-white rounded-md bg-transparent focus:outline-red-500 outline-none p-2"
                id="input_name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-display" htmlFor="input_name">
                Budget
              </label>
              <input
                placeholder="Enter Budget"
                className="outline-white rounded-md bg-transparent focus:outline-red-500 outline-none p-2"
                id="input_name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-display" htmlFor="input_name">
                Notes
              </label>
              <textarea
                placeholder="Any Additional Notes ?"
                className="outline-white rounded-md bg-transparent focus:outline-red-500 outline-none p-2 h-[12rem]"
                id="input_name"
                type="text"
              ></textarea>
            </div>
          </div>
          <button className="bg-white text-black font-bold text-3xl w-full mt-8 rounded-md py-2 mb-12">Send Mail</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
