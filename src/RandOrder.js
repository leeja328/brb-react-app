import React from 'react'
import { useMemo } from 'react';
import { useState, useEffect } from 'react';


export default function RandOrder({ setNewLst }) {
  const [lst, setLst] = useState([]);

  useEffect(() => {
    const generateRandomList = () => {
      const newLst = [];
      while (newLst.length < 8) {
        const ran_num = Math.floor(Math.random() * 15);
        if (!newLst.includes(ran_num) && ran_num !== 0) {
          newLst.push(ran_num);
        }
      }
      setLst(newLst);
      setNewLst(newLst);
      console.log(newLst);
    };

    generateRandomList();
  }, [setNewLst]);

  return <div></div>;
}



// export default function RandOrder({ setNewLst }) {
//     const [lst, setLst] = useState([]);
    
//     const asdf = useMemo(() => {
//       while (lst.length < 8) {
//         const ran_num = Math.floor(Math.random() * 15)
//         if (lst.includes(ran_num)) {
//           continue
//         } else if (ran_num === 0) {
//           continue
//         } else {
//           setLst(lst.push(ran_num))
//         }
//       }

//       setNewLst(lst);
//       console.log(lst)
//     }, [lst]);
    
//     return (
//     <div>
      
//     </div>
//   )
// }
