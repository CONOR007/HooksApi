import { Link, Route } from "react-router-dom";
import Home from './pages/home';
import List from './pages/list';

export default function App () {
  return (
    <>
      <div>
        <Link to="/home/zhangsan">首页</Link>
        <Link to="/list">列表页</Link>
      </div>
      <div>
        <Route path="/home/:name" component={Home} />
        <Route path="/list" component={List} />
      </div>
    </>
  )
}
