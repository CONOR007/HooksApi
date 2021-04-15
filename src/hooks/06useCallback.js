import { useState, memo, useCallback } from "react";

const Foo = memo(function Foo (props) {
  console.log('Foo 重新渲染了')
  return <div>
    <span>I am Foo</span>
    <button onClick={props.resetCount}>resetCount</button>
  </div>
})

export default function App () {

  const [count, setCount] = useState(0)
  const resetCount = useCallback(() => {
    setCount(0)
  }, [setCount])

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}> + 1</button>
      <Foo resetCount={resetCount} />
    </div>
  )
}
