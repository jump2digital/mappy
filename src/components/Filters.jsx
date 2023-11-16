import { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { filtersList } from "../models/filtersList";

function Filters({ handleFilter }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const label = windowWidth < 768 ? undefined : "Filtra per:";

  const radioGroup = (
    <RadioGroup
      onChange={(event) => handleFilter(event.target.value)}
      color="secondary"
      defaultValue={0}
      className="font-bold py-2 px-3 text-lg"
      label={label}
    >
      {filtersList.map((filter, index) => (
        <Radio value={index} key={index} className="font-normal">
          {filter}
        </Radio>
      ))}
    </RadioGroup>
  );

  const filterOptions =
    windowWidth < 768 ? (
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Filtra per" className="font-bold">
          {radioGroup}
        </AccordionItem>
      </Accordion>
    ) : (
      radioGroup
    );

  return (
    <div className="z-[500] absolute top-5 right-5 p-2 rounded-lg bg-white w-[170px] lg:w-auto box-border ">
      {filterOptions}
    </div>
  );
}

export default Filters;
