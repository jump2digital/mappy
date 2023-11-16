import React from 'react'
import {RadioGroup, Radio} from "@nextui-org/react";
import {filtersList} from '../models/filtersList';


function Filters({handleFilter}) {
    console.log(filtersList)
    return (
    <div className="z-[500] absolute top-5 right-5 p-2 w-52 rounded-lg bg-white ">
        <RadioGroup 
        onChange={(event) => handleFilter(event.target.value)}
        label="Selecciona la informació que vols mostrar"
        color="secondary"
        defaultValue={0}
        >
            {filtersList.map((filter, index) => (
                <Radio value={index} key={index}>{filter}</Radio>
        ))}
        </RadioGroup>

    </div> 
    )
}

export default Filters