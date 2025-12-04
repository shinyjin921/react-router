import { Routes,Route, useNavigate, Outlet } from "react-router-dom";

const Products = () => {
  const categories = ['신발','모니터','머그컵'];
  const path = ['','moniter','cup'];
  const navigate = useNavigate(); //Navigate 함수를 생성
  const handleClick = (idx)=>{
    navigate(path[idx]);
  }
  return (
    <div id="products">
      {
      categories.map((item,idx)=>{
        return<button 
        key={idx} 
        onClick={()=>{handleClick(idx)}}>{item}
        </button>
      })
    }
    <div className="items">
      <Outlet />
    </div>
    </div>
  )
}

export default Products