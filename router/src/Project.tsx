import React from "react";

export interface IProjectProps {
  appBarHeight: number;
}

export default function Project(props: IProjectProps) {
  console.log("Project render appBarHeight: " + props.appBarHeight)


  return (
    <div>
      <p>Project</p>
    </div>
  );
}


