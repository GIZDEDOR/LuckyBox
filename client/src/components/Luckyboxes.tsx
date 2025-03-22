import giftImg from '../assets/gift.png'
import { UserProps } from '../interfaces/user';
import { useEffect, useState } from 'react';
import { request, TG } from "../api/requests";
import ReactConfetti from 'react-confetti';
import CountUp from 'react-countup';

function Luckyboxes(props: UserProps) {
  const [box, setBox] = useState(false)
  const [isClicked, setIsClicked ] = useState(false)
  const [win, setWin] = useState(999);
    
  useEffect (() => {
    setBox(true ? props.data.luckyboxes > 0 : false);
  },[]);
  
  function openBox() {
    setIsClicked(true)
    TG.HapticFeedback.impactOccurred("light")

    async function fetchData() {
      const response = await request("open", "POST")

      setWin(response.win)
      props.setUser({
        ...props.data,
        luckyboxes: response.current_luckyboxes,
        balance: response.current_balance,
      });
    }
    fetchData();
  }
  return (
    <div className= "bg-black flex justify-center items-center h-screen">
      <div className="text-center">
        {isClicked && (
          <>
          <ReactConfetti width={window.innerWidth} height={window.innerHeight}/>
            <span className="text-white font-semibold tracking-widest">
              <CountUp end={win} />
            </span>
          </>
        )}
        {box ? (
                    <img 
                    src={giftImg} 
                    alt= "gift" 
                    width={256} 
                    height={256} 
                    className="mx-auto animate-pulse active:scale-[0.98]"
                    onClick={isClicked ? () => {} : openBox} 
                  />
        ) : (
           <h1 className="text-white text-3x1 font-semibold">
            У тебя нет боксов!
           </h1> 
        )}
      </div>
    </div>
  );
}
  
export default Luckyboxes
  