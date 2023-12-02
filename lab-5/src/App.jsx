import React from "react";
import "./App.css";

import MyBox from "./components/MyBox";

function App() {
  return (
    <div className="App">
      <h1 className="TextHead">โหวตอาหาร</h1>
      <MyBox
        topic="อาหารคาว"
        secondary="ข้าวคลุกกะปิ"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia incidunt ipsam provident est sit, culpa ad eius quidem velit harum distinctio, doloremque cupiditate voluptates sint alias, suscipit hic eligendi?"
        imgLink="https://www.matichonacademy.com/wp-content/uploads/2018/07/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B8%9B%E0%B8%B4%E0%B8%9B%E0%B8%81.jpg"
      />
       <MyBox
        topic="อาหารหวาน"
        secondary="บิงซู"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia incidunt ipsam provident est sit, culpa ad eius quidem velit harum distinctio, doloremque cupiditate voluptates sint alias, suscipit hic eligendi?"
        imgLink="http://www.cocobings.com/wp-content/uploads/2016/02/Strawberry-Milk-Bingsu.jpg"
      />
    </div>
  );
}

export default App;