import React from 'react'
import {RadioGroup, Radio} from "@nextui-org/react";

function Filters() {
  return (
    <div className="z-[500] absolute top-0"><RadioGroup
    label="Select your favorite city"
    color="secondary"
    defaultValue="london"
  >
    <Radio value="buenos-aires">Buenos Aires</Radio>
    <Radio value="sydney">Sydney</Radio>
    <Radio value="san-francisco">San Francisco</Radio>
    <Radio value="london">London</Radio>
    <Radio value="tokyo">Tokyo</Radio>
  </RadioGroup></div> 
  )
}

export default Filters