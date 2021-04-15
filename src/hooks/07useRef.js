import { useRef, useState, useEffect} from "react";

// export default function App () {
//   const box = useRef()
//   return (
//     <div ref={box}>
//       <button onClick={() => console.log(box)}> DIV </button>
//     </div>
//   )
// }


export default function App () {
  const [count, setCount] = useState(0)
  let timeId = useRef() // 夸组件生命周期
  useEffect(() => {
    // 使用这个 ref 的 current 属性存储数据
    timeId.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  }, [])

  const stopCount = () => {
    console.log(timeId.current)
    clearInterval(timeId.current)
  }

  const box = useRef()
  return (
    <div ref={box}>
      <span>{count}</span>
      <button onClick={() => stopCount()}> 停止 </button>
    </div>
  )
}
