import React from "react";

export interface IHomeProps {
  appBarHeight: number;
}

export default function Home(props: IHomeProps) {
  console.log("Home render appBarHeight: " + props.appBarHeight)
  return (
    <div>
      <p>Home</p>
    </div>
  );
}


