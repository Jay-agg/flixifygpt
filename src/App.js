import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "NetflixGPT";
  }, []);
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
