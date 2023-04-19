import { useState, useEffect } from 'react';
import SlideIn from "../helpers/SlideIn"
export default function Command() {
	 const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
    return (
    	<SlideIn speed={200} delay={2800} >
        <div className='flex font-["monospace"] '>
            <div className='text-green-400'>╓[✗]-[</div>
            <div className='text-purple-400'>guest</div>
            <div className='text-green-400'> @ </div>
            <div className='text-purple-400'>sijan</div>
            <div className='text-green-400'>]-[</div>
            <div className='text-red-400'>/usr/home</div>
            <div className='text-green-400'>] </div>
        </div>
        <div className="flex">
        <div className="text-green-400  text-green-400">╙╼</div>
        <div className="text-green-400  text-red-400">$</div>
<div className={`${showCursor ? 'opacity-100' : 'opacity-0'} font-bold`} >┃</div>       
</div>
</SlideIn>



    );
}
