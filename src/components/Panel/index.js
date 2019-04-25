import React from 'react';

import Status from '../Status'
import History from '../History'
import Options from '../../containers/Options'

import './style.css';
import ShortCut from '../Shortcut';

function Panel (props) {
  const { currentDeploy, deploys } = props
  return (
    <aside>
      <Status
        deploymentStatus={currentDeploy}
      />
      <div className="Panel-margin" >
        <History deploys={deploys}/>
      </div>
      <div className="Panel-margin" >
        <Options />
      </div>
      <div className="Panel-margin" >
        <ShortCut />
      </div>
    </aside>
  );
}

export default Panel;
