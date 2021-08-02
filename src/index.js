import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myName="ha van dung";
// const myStatus = true;
// const myAge = 20;
// const myClass = [
//   {
//     name: 'react'
//   },
//   {
//     name: 'angular'
//   }
// ]

// function ShowInfo(){
//   return (
//     <ul>
//     <li>Xin chao {myName}</li>
//     <li>tinh trang: {myStatus ? 'da ket hon' : 'chua ket hon'}</li>
//     <li>tuoi: {myAge}</li>
//     <li>nhung mon da hoc
//       <ul>
//         {
//           myClass.map((clas, index) => <li key={index}>{clas.name}</li>)
//         }
//       </ul>
//     </li>
//   </ul>
//   )
// }
ReactDOM.render(
    // <ShowInfo />,
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
