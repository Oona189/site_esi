import React, { useMemo, useState } from "react";
import calendar from "../../data/calendar.json";

function Calendar() {
  const filterItems = [
    {
      year: "1CP",
      section: ["A", "B", "C", "D"],
      groupe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      year: "2CP",
      section: ["A", "B", "C"],
      groupe: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      year: "1CS",
      section: ["A", "B", "C"],
      groupe: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    { year: "2CS-SID", section: ["A"], groupe: [1] },
    { year: "2CS-SIT", section: ["A"], groupe: [1, 2] },
    { year: "2CS-SIL", section: ["A"], groupe: [1, 2] },
    { year: "2CS-SIC", section: ["A"], groupe: [1, 2] },
  ];
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedGroupe, setSelectedGroupe] = useState("");

  const uniqueYears = useMemo(
    () => [...new Set(filterItems.map((item) => item.year))],
    []
  );

  const selectedItem = useMemo(
    () => filterItems.find((item) => item.year === selectedYear) || {},
    [selectedYear]
  );

  const uniqueSections = useMemo(
    () => selectedItem.section || [],
    [selectedItem]
  );
  const uniqueGroupes = useMemo(
    () => selectedItem.groupe || [],
    [selectedItem]
  );
  const selectedLink = useMemo(() => {
    return calendar.find(
      (link) =>
        link.name === selectedYear &&
        link.section === selectedSection &&
        link.Groupe === selectedGroupe
    );
  }, [selectedYear, selectedSection, selectedGroupe]);
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
        Emplois du temps
      </h1>
      <div className="w-full flex justify-center items-center gap-x-5">
        <button className="flex justify-center font-bold text-xl  text-white text-center bg-[rgb(0,97,178)] rounded-[38.34px] outline outline-[rgb(0,97,178)] outline-1 outline-offset-[-2px] px-6 py-2">
          Des études
        </button>
        <button className="flex justify-center font-bold text-xl  text-[rgb(0,97,178)] text-center rounded-[38.34px] outline outline-[rgb(0,97,178)] outline-1 outline-offset-[-2px] px-6 py-2">
          Des salles
        </button>
      </div>
      <div className="flex flex-wrap gap-4 rounded-[15px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-2px] px-4 py-2 md:px-20 md:py-5">
        <select
          className="bg-[rgb(8,53,92)] rounded-[20px] text-white w-full md:w-fit px-4 py-2 md:px-6 md:py-3"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Sélectionner une année</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          className="bg-[rgb(8,53,92)] rounded-[20px] text-white w-full md:w-fit px-4 py-2 md:px-6 md:py-3"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">Sélectionner une section</option>
          {uniqueSections.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
        <select
          className="bg-[rgb(8,53,92)] rounded-[20px] text-white w-full md:w-fit px-4 py-2 md:px-6 md:py-3"
          value={selectedGroupe}
          onChange={(e) => setSelectedGroupe(e.target.value)}
        >
          <option value="">Sélectionner un groupe</option>
          {uniqueGroupes.map((groupe) => (
            <option key={groupe} value={groupe}>
              {groupe}
            </option>
          ))}
        </select>
      </div>

      {selectedLink ? (
        <iframe
          className="w-full h-100 p-5"
          src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FAlgiers&bgcolor=%23e8eeff&mode=WEEK&src=${selectedLink.link}`}
        ></iframe>
      ) : (
        <p>Aucun lien de calendrier disponible pour cette sélection.</p>
      )}
    </div>
  );
}

export default Calendar;
