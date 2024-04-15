 

import { useNavigate } from "react-router-dom";
const Labs=()=>{
       let navigate = useNavigate();
    function clickHandler(){
          navigate(-1)
    }
    return(
      <div>
          <div>
            <h1>This is Labs page</h1>
        </div>
        <button onClick={clickHandler}>Back</button>
      </div>
    );
}


export default Labs;