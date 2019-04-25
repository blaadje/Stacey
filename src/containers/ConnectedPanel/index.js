import React, { Component } from 'react'
import Panel from '../../components/Panel'

class ConnectedPanel extends Component {
  render () {
    return <Panel
      currentDeploy={{
        status: 'ongoing',
        deployer: {
          img: 'https://randomuser.me/api/portraits/women/65.jpg',
          name: 'blaadje',
        },
        date: 'October 13, 2014 11:13:00',
        hash: '1ca08d613db8558fefbc3fcc988876fd3b7d',
        commit: 'prefeat(welove): Delete code from home page'
      }}
      deploys={[
        {
          status: 'ongoing',
          deployer: {
            img: 'https://randomuser.me/api/portraits/women/65.jpg',
            name: 'blaadje',
          },
          date: 'October 13, 2014 11:13:00',
          hash: '1ca08d613db8558fefbc3fcc988876fd3b7d',
          commit: 'prefeat(welove): Delete code from home page'
        },
        {
          status: 'done',
          deployer: {
            img: 'https://randomuser.me/api/portraits/men/61.jpg',
            name: 'Trapdafifou',
          },
          date: 'October 13, 2014 11:13:00',
          hash: '1ca08d613db8558fefbc3fcd988876fd3b7d',
          commit: 'prefeat(welove): Delete code from home page'
        },
        {
          status: 'done',
          deployer: {
            img: 'https://randomuser.me/api/portraits/women/45.jpg',
            name: 'Clement',
          },
          date: 'October 13, 2014 11:13:00',
          hash: '1ca08d613db8558fefed3fcc988876fd3b7d',
          commit: 'prefeat(welove): Delete code from home page'
        },
        {
          status: 'done',
          deployer: {
            img: 'https://randomuser.me/api/portraits/women/95.jpg',
            name: 'Marc',
          },
          date: 'October 13, 2014 11:13:00',
          hash: '1ca08d613db8558fefed3fcc988876fd3b7d',
          commit: 'prefeat(welove): Delete code from home page'
        },
      ]}
    />;
  }
}

export default ConnectedPanel;
