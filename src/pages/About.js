import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const About = () => {
  const navigator = useNavigate();
  const handleClick = () =>{
    //홈으로 이동
    navigator("/"); //홈으로 이동해라
  }
  //about 페이지로 이동 후 5초 뒤에 다시 home으로 이동
  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigator("/");
    },5000);
    return ()=>clearTimeout(timer);
  },[navigator]);
  return (
    <div id="about">
      <h2>소개</h2>
      <p>여기는 소개 페이지 입니다</p>
      {/* <button><Link to="/">홈으로 이동</Link></button> */}
      <button onClick={handleClick}>홈으로 이동</button>
    </div>
  )
}

export default About