import React from 'react'
import DocCard from '../../components/DocCard'

function SectionDocs() {
  return (
    <div className="mx-10 my-5 flex flex-col gap-5">
    <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
      Documents utiles
    </h1>
    <DocCard
      title={"Planning prévisionnel du S1 de l’année 2023-2024 "}
    />
    <DocCard
      title={"Planning prévisionnel du S2 de l’année 2023-2024 "}
    />
  </div>
  )
}

export default SectionDocs