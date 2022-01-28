// import React, { useState, useRef, useEffect, useCallback } from "react";
import React from 'react'
// interface DataProps{
//     version:string,
//     status:string,
//     event:string,
//     connectionID:string
// }

// const Primer: React.FC = () => {

//     const [status, setStatus] = useState<string>("");
//     const [data, setData] = useState<DataProps>();
//     const [isPaused, setIsPaused] = useState<boolean>(false);
//     const ws = useRef(new WebSocket("wss://ws.kraken.com/"));

//     useEffect(()=>{
//         if(!isPaused){
//             ws.current.onopen = () => setStatus("Соединение открыто");
//             ws.current.onclose = () => setStatus("Соединение закрыто");

//             gettingData();
//         }

//         return () => ws.current.close();
//     },[ws, isPaused])

//     const gettingData = useCallback(() => {
//         ws.current.onmessage = e => {
//             if (isPaused) return;
//             const message = JSON.parse(e.data);
//             setData(message);
//         };
//     },[isPaused])

//     const changeStatus = () => {
//         setIsPaused(!isPaused)
//     }

//     return(
//         <>
//             <div>
//                 <h2>{status}</h2>
//                 {!isPaused &&
//                     <>
//                         <p>{`connection ID: ${data?.connectionID}`}</p>
//                         <p>{`event: ${data?.event}`}</p>
//                         <p>{`status: ${data?.status}`}</p>
//                         <p>{`version: ${data?.version}`}</p>
//                     </>
//                 }
//             </div>
//             <button onClick={changeStatus}>
//                 {!isPaused ? 'Остановить соединение' : 'Открыть соединение' }
//             </button>
//         </>
//     )
// }

// export default Primer
