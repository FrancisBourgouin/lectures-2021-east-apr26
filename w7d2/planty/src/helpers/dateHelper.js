const chillingObject = {
  bob: true
}

const toDay = (ms) => {
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}

export const timeAgo = date => {
  const currentDate = new Date()
  const dateToCheck = new Date(date)
  console.log(chillingObject)
  const diffInMs = currentDate.getTime() - dateToCheck.getTime()
  const diffInDays = toDay(diffInMs)

  return diffInDays
}