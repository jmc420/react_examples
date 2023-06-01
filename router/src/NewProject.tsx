import React from "react";

export interface INewProjectProps {
  appBarHeight: number;
}

export default function NewProject(props: INewProjectProps) {
  console.log("NewProject render appBarHeight: " + props.appBarHeight)
  return (
    <div>
      <p>New Project</p>
    </div>
  );
}

