import {useState, useMemo,memo } from "react";
function App() {
  const [countEf,setCountEf] = useState(1);
  // useMemo 计算属性 组件重新渲染也不会计算能避免在每个渲染上昂贵的计算 只有被计算的属性变化时才会执行
  const compute = useMemo(()=>{return countEf*2},[countEf])
  
  return (
    <div className="App">
      <span>计算属性{compute}<Child></Child></span>
    </div>
  );
}
// memo 没有状态更新不让子组件渲染
const Child = memo(function Child() {
  console.log('Child组件重新渲染了')
  return <div>我是Child组件</div>
})
export default App;
