import React, { useState, useEffect } from 'react'

import Filters from "./components/Filters"
import Neighbour from "./components/Neighbour"
import {NextUIProvider} from "@nextui-org/react";

const App = () => {
  let [selectedFilter, setSelectedFilter] = useState(0);
  function handleFilter(index){
    console.log('Changed filter: '+ index)
    setSelectedFilter(index)
  }
  return (
    <NextUIProvider>
      <Neighbour selectedFilter={selectedFilter} />
      <Filters handleFilter={handleFilter} />
    </NextUIProvider>
  )
}

export default App