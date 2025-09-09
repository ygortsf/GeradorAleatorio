'use client';

import { useState } from 'react';

export  function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (

    <div className="  flex colum justify-center items-center my-100  bg-white p-6 mx-180 " style={{borderRadius: 50}}>
    <button className="text-yellow-500 bg-pink-900 flex flex colum justify-center p-5 items-center" style={{borderRadius: 50}}  onClick={handleClick}>
      You pressed me {count} times
    </button>
    </div>
  );
}
