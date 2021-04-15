import { useState,useEffect } from "react";
import ReactDOM from 'react-dom';
function App() {
  // useEffect
  // 组件挂载完成之后执行 组件数据更新之后执行
  useEffect(()=>{
    //console.log('123')
  })
  // 组件挂载完成之后执行
  useEffect(()=>{
    console.log(123)
  },[])
  // 组件被卸载之前执行
  useEffect(()=>{
    return ()=>{
      console.log('组件被卸载之前执行')
    }
  },[])

  // useEffect使用场景
  function onScroll (){
    console.log('滚动条在滚')
  }

  useEffect(()=>{
    document.addEventListener('scroll',onScroll)
    return ()=>{
      document.removeEventListener('scroll',onScroll)
    }
  },[])
 
  const [countEf,setCountEf] = useState(0);
  // useEffect 第二个参数是指定变量修改时才去执行
  useEffect(()=>{
    // countEf 被修改了
    console.log('countEf 被修改了')
    const timerId = setInterval(()=>{
      setCountEf((countEf)=>{
        const newCountEf = countEf+1;
        document.title = newCountEf;
        return newCountEf;
      })
    },1000)
    return ()=>{
      clearInterval(timerId)
    }
  },[countEf])
  // useEffect 异步函数的使用
  function getData (){
    return new Promise((resolve)=>{
      resolve(100)
    })
  }
  // 可以
  useEffect(()=>{
    getData().then(result=>{
      console.log(result)
    })
  },[])
  // 会报警告 因为返回了一个异步的promise
  // useEffect(async()=>{
  //   const result = await getData();
  //   console.log(result)
  // },[])
  // 添加函数自执行 使用异步函数
  useEffect(()=>{
    (async function(){
      const result = await getData();
      console.log(result)
    })()
  },[])

  return (
    <div className="App">
      <button onClick={()=>ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载</button>
      <br/>
      <span>{countEf}</span>
      <button onClick={()=>setCountEf(countEf+1)}>countEf+1</button>
    </div>
  );
}

export default App;
