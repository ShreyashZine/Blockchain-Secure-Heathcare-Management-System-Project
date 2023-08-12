import {React,useState,useEffect} from 'react'
import Loader from './Loader'
import '../Typewriter.css';

function ForceLogin() {

  const [text, setText] = useState("");
  const messages = ["Blockchain Web3", "Store Patient Data", "A Secure Blockchain"];

  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setText(messages[i]);
      i = (i + 1) % messages.length;
    }, 2000);
    return () => clearInterval(timer);
  }, []);


  return (
  <>
  <Loader></Loader>
    <div className="home-page">
      <img 
      className='bg-img'
      src={process.env.PUBLIC_URL + "/bg.jpg"} 
      alt="Background" 
      style={{ 
          width: '100%', 
          //height: '500px', 
          objectFit: 'cover' 
        }} 
      />
       <div className="typewriter-text my-div">
        {text}
      </div>
    </div>
        
  </>
  )
}

export default ForceLogin