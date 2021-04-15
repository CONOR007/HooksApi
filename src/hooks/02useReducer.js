import { useReducer } from "react";
function App() {
  // useReducer => 提供redux
  function reducer (state,action){
    switch (action.type) {
      case 'increment':
        return state+1
      case 'decrement':
        return state-1
      default:
        return state;
    }
  }
  const [countState ,dispatch] = useReducer(reducer,0)
  return (
    <div className="App">
      <span>{countState}</span>
      <button onClick={()=>dispatch({type:'increment'})}>+1</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-1</button>
    </div>
  );
}
export default App;
