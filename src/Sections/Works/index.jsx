import React from "react"
import dataset from "../../dataset.json"

function Works() {
  const { works } = dataset
  return (
    <section id="Works" className="w-full h-auto p-4">
      <span className="block text-center text-5xl font-bold my-16">Some Of Our Works</span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-24">
        {works.map((work, index) => {
          return (
            <div key={index} className="flex flex-col justify-between items-center p-4 gap-2 overflow-hidden">
              <a href="#Works">
                <div className="overflow-hidden">
                  <img className="object-center object-cover" src={work.screenshot} alt="" />
                </div>
                <div className="grid text-center">
                  <span className="text-3xl font-bold">{work.title}</span>
                  <span className="text-xl leading-relaxed w-full md:w-3/4 mx-auto">{work.desc}</span>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Works
