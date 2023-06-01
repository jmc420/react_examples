import React from "react";

export interface IAccountProps {
  appBarHeight: number;
}

export default function Account(props: IAccountProps) {
  console.log("Account render appBarHeight: " + props.appBarHeight)
  return (
    <div>
      <p>Account</p>
    </div>
  );
}

