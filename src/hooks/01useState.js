import { useState} from "react";
function App(props) {
  // useState 因为组件是单向数据流 这里提供参数缓存
  const propsCount = props.count || 0;
  const [count,setCount] = useState(propsCount);//useState只在第一次渲染的时候执行一次 参数可以是函数，只会被调用一次
  const [person,setPerson] = useState({name:'rengar',age:20});
  function handleCount () {
    // setCount是一个异步函数
    setCount(count => {
      const newCount = count + 1;
      return newCount;
    })
    document.title = count
  }
  return (
    <div className="App">
      <span>{count}{person.name}{person.age}</span>
      <button onClick={handleCount}>+1</button>
      <button onClick={()=>setPerson({name:'rengar',age:person.age+1})}>setPerson</button>
      <br/>
    </div>
  );
}
export default App;
