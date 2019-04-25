export const getColorFromStatus = status => {
  switch (status) {
    case 'ongoing': return '#f9dc93'
    case 'done': return '#a4f1a7'
    case 'failed': return '#ed7161'
  }
}