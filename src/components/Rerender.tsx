import React, { useState } from "react";

function Rerender() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="ABBC" />
    </div>
  );
}

function Header(props: any) {
  return <div>{props.title}</div>;
}

function HeaderWithButton(props: any) {
  const [firstTitle, setFirstTitle] = useState("My Name is Satyadeep");
  const changeTitle = () => {
    setFirstTitle("I am a Full Stack" + Math.random());
  };
  return (
    <div>
      <button onClick={changeTitle}>Click to change title</button>
      <Header title={firstTitle} />
    </div>
  );
}

export default Rerender;
