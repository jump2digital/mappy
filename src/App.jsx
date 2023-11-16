import React, { useState, useEffect } from 'react'

import Filters from "./components/Filters"
import Neighbour from "./components/Neighbour"
import {NextUIProvider} from "@nextui-org/react";

const App = () => {
  let [selectedFilter, setSelectedFilter] = useState(0);
  function handleFilter(index){
    console.log(index)
    setSelectedFilter(index)
  }
  return (
    <NextUIProvider>
      <Neighbour />
      <Filters handleFilter={handleFilter} />
    </NextUIProvider>
  )
}

export default App