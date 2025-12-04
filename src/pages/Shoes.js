import { Link } from "react-router-dom"
import data from "../data/data.json"

const Shoes = () => {
  return (
    <div className="shoes-page">
      <h2>신발 페이지</h2>
      <p>신발 목록</p>
      <ul>
        {
          data.map((item)=>{
            return(
              <li key={item["id"]}>
              <h3>{item["product-name"]}</h3>
              <Link to={`${item["id"]}`}>
              <button>상세정보보기</button>
              </Link>
              </li>
            )
          })
        }
      </ul>
      </div>
  )
}

export default Shoes