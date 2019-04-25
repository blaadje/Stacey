import {
  GET_DEPLOYS,
  TOGGLE_NOTIFICATIONS,
  TOGGLE_PELLET,
} from './constants'

export const toggleNotification = () => {
  return { type: TOGGLE_NOTIFICATIONS }
}

export const togglePellet = () => {
  return { type: TOGGLE_PELLET }
}

export const getDeploys = () => {
  return {
    type: GET_DEPLOYS,
    deploys: [
      {
        status: 'ongoing',
        deployer: {
          img: 'https://randomuser.me/api/portraits/women/65.jpg',
          name: 'blaadje',
        },
        date: 'October 13, 2014 11:13:00',
        hash: '1ca08d613db8558fefbc3fsefioujn8876fd3b7d',
        commit: 'prefeat(welove): Delete code from home page'
      },
      {
        status: 'done',
        deployer: {
          img: 'https://randomuser.me/api/portraits/men/61.jpg',
          name: 'Trapdafifou',
        },
        date: 'October 13, 2014 11:13:00',
        hash: '1ca08d613db8558fefbc3fcd988876seoifdjed',
        commit: 'prefeat(welove): Delete code from home page'
      },
      {
        status: 'done',
        deployer: {
          img: 'https://randomuser.me/api/portraits/women/45.jpg',
          name: 'Clement',
        },
        date: 'October 13, 2014 11:13:00',
        hash: '1ca08d613db8558fefed3seidfuh988876fd3b7d',
        commit: 'prefeat(welove): Delete code from home page'
      },
      {
        status: 'done',
        deployer: {
          img: 'https://randomuser.me/api/portraits/women/95.jpg',
          name: 'Marc',
        },
        date: 'October 13, 2014 11:13:00',
        hash: '1ca08d613db8558fefsedoij988876fd3b7d',
        commit: 'prefeat(welove): Delete code from home page'
      },
    ],
  }
}