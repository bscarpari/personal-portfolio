// import { useRef, useEffect } from 'react';
// import { Application } from '@splinetool/runtime';

// export default function SplineObject() {
//   const cube = useRef<any>();
//   const canvasRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (canvasRef.current) {
//       const app = new Application(canvasRef.current);
//       app.load('https://prod.spline.design/ShAbGrvlZcUT1DrH/scene.splinecode').then(() => {
//         const obj = app.findObjectByName('Cube');
//         cube.current = obj;
//       });
//     }
//   }, []);

//   function moveObj() {
//     console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

//     // move the object in 3D space
//     if (cube.current) {
//       cube.current.position.x += 10;
//     }
//   }

//   return (
//     <div className="border-2 border-red-500" ref={canvasRef} onClick={moveObj}></div>
//   );
// }