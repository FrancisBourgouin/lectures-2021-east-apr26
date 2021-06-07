export const timeAgo = date => {
  const currentDate = new Date()
  const dateToCheck = new Date(date)

  const diffInMs = currentDate.getTime() - dateToCheck.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  return diffInDays
}