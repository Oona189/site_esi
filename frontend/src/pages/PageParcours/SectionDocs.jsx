import React from 'react'
import DocCard from '../../components/DocCard'

function SectionDocs() {
  return (
    <div className="mx-10 my-5 flex flex-col gap-5">
    <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
      Documents utiles et programmes
    </h1>
    <DocCard title={"Dépliant qui présente les études à l’ESI"} />
    <DocCard title={"Programme cycle préparatoire"} />
    <DocCard title={"Programme 1ère année Second Cycle"} />
    <DocCard title={"Programme 2ème année Second Cycle SIQ"} />
    <DocCard title={"Programme 2ème année Second Cycle SIL"} />
    <DocCard title={"Programme 2ème année Second Cycle SIT"} />
    <DocCard title={"Programme 2ème année Second Cycle SID"} />
  </div>
  )
}

export default SectionDocs