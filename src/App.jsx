import Filters from "./components/Filters"
import Neighbour from "./components/Neighbour"
import {NextUIProvider} from "@nextui-org/react";

const App = () => {
  return (
    <NextUIProvider>
      <Neighbour />
      <Filters />
    </NextUIProvider>
  )
}

export default App