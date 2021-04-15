import { createContext,useContext } from "react";
function App() {
  // createContext 方便跨组件层级传值
  // useContext 简化接受传值组件的代码
  const countContext = createContext();

  function Foo () {
    const value = useContext(countContext)
    return  <div>{value}</div>
    // <countContext.Consumer>
    //   {
    //     value => {
    //       return <div>{value}</div>
    //     }
    //   }
    // </countContext.Consumer>
  }
  
  return (
    <div className="App">
      <countContext.Provider value={100}>
        <Foo />
      </countContext.Provider>
    </div>
  );
}

export default App;
