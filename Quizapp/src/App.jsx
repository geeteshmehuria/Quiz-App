import "./App.css";

import Home from "./Pages/Home";
import AllRoutes from "./routes/AllRoutes";
// https://opentdb.com/api.php?amount=10
function App() {
  // const [data, setData] = useState();
  // const handleclick = async () => {
  //   const res = await axios.get("https://opentdb.com/api.php?amount=10");
  //   console.log(res.data);
  // };

  return (
    <>
      {/* <button onClick={handleclick}>click</button> */}
      <AllRoutes />
    </>
  );
}

export default App;
