import React, { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AccountURL, HomeURL, NewProjectURL, ProjectURL, SettingsURL } from './Constants';
import AppBarMenu, { IAppBarMenuProps } from './AppBarMenu';
import Account, { IAccountProps } from './Account';
import Home, { IHomeProps } from './Home';
import NewProject, { INewProjectProps } from './NewProject';
import Project, { IProjectProps } from './Project';
import Settings, { ISettingsProps } from './Settings';

interface IAppState {
  appBarHeight: number;
}

export default function App() {
  const [state, setState] = useState<IAppState>(createInitialState());

  console.log("App Render appBarHeight: " + state.appBarHeight);

  function createInitialState(): IAppState {
    return {
      appBarHeight: 0
    }
  }

  const appBarMenuProps: IAppBarMenuProps = {
    notifyAppBarHeight: (height) => setState({ ...state, appBarHeight: height })
  }

  const homeProps: IHomeProps = {
    appBarHeight: state.appBarHeight
  }

  const accountProps: IAccountProps = {
    appBarHeight: state.appBarHeight
  }

  const newProjectProps: INewProjectProps = {
    appBarHeight: state.appBarHeight
  }

  const projectProps: IProjectProps = {
    appBarHeight: state.appBarHeight
  }

  const settingsProps: ISettingsProps = {
  }

  return (
    <div>
      <AppBarMenu {...appBarMenuProps} />
      <Routes>
        <Route path={HomeURL} element={<Home {...homeProps} />} />
        <Route path={AccountURL} element={<Account {...accountProps} />} />
        <Route path={ProjectURL} >
          <Route index={true} element={<Project {...projectProps} />} />
          <Route path={NewProjectURL} element={<NewProject {...newProjectProps} />} />
        </Route>

        <Route path={SettingsURL} element={<Settings {...settingsProps} />} />
      </Routes>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function (event) {
  const container = document.getElementById('root');
  const root = ReactDOMClient.createRoot(container);

  root.render(<BrowserRouter><App /></BrowserRouter>);
})

