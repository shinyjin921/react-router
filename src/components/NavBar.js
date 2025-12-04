import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/products">상품</Link>
    </nav>
  )
}

export default NavBar