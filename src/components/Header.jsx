import './Css/hp.css';

function Header(props){

   return (
      <>
         <div className="r-top">
            <div className="novbar">{props.title}</div>
            {/* <input type="button" value=" ok"  id='Theme'/>                */}
         </div>
      </>
   )
}

export default Header;
