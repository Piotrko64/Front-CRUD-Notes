import '../styles/Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPlusSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Header(props) {
  
    return (
    <div className="Title m-5">
      <div className="Title__main ">
      <h1>CRUD NOTE</h1>
      <h6> v1.0.4</h6>
      <h5>Front and Backend simple app by Piotrko64</h5>
      </div>
      <div className="Title__buttons mt-5">
          <button className="btn btn-outline-primary" onClick={()=>{props.showNewNote()}}> <div className="textmargin">New Note</div>  <div className="btn__icon"><BsFillPlusSquareFill/></div></button>
          <a href="http://piotrko67.ct8.pl"><button className="btn btn-outline-danger"> <div className="textmargin">Piotrko64</div> <div className="btn__icon"><BsFillArrowRightSquareFill/></div></button></a>
          <a href="https://github.com/Piotrko64"><button className="btn btn-secondary"> <div className="textmargin">Github</div><div className="btn__icon"><FaGithub/></div></button></a>
      </div>
      </div>
    );
  }
  
  export default Header;