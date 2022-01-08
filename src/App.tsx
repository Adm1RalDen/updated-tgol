import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { AppContainer } from "./styles";
import { generateGridState } from "./utils/generateGridState";
import { generateNextGridState } from "./utils/generateNextGridState";

function App() {
  const [gridState, setGridState] = useState(generateGridState())

  const generateNewState = () => {
    setGridState((prev) => generateNextGridState(prev))
  }

  useEffect(() => {
    const interval = setInterval(generateNewState, 400);
    return () => clearInterval(interval)
  }, [])

  return (
    <AppContainer>
      <Grid gridState={gridState} />
    </AppContainer>
  );
}

export default App;
