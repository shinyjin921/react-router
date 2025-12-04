import { useParams } from "react-router-dom"
import data  from "../data/data.json";

const DetailShoes = () => {
  let {id} =useParams();
  const product = data.filter((item)=>{
    return item["id"] === Number(id);
  })
  return (
    <div className="detail">
      <p>DetailShoes 페이지</p>
      <p>전달받은 id={id}</p>
      <p>선택된 제품:{product[0]["product-name"]}</p>
      <p>선택된 제품가격:{product[0]["price"]}</p>
      <p>선택된 제품설명:{product[0]["desc"]}</p>
      </div>
  )
}

export default DetailShoes