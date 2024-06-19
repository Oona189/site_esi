import React from 'react'
import DocCard from '../../components/DocCard'

function SectionReglementation() {
  return (
    <div className="mx-10 my-5 flex flex-col gap-5">
          <div className="Title flex flex-col justify-center items-center mb-5">
            <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
              Règlementation
            </h1>
            <div className="bg-[rgb(0,97,178)] lg:w-[280px] md:w-[230px] w-[180px] h-[5px] my-0" />
          </div>
          <DocCard title={"Règlement intérieur des classes préparatoires"} />
          <DocCard title={"Règlement intérieur du second cycle"} />
        </div>
  )
}

export default SectionReglementation