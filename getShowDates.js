const getShowDates = () => {
  const today = new Date()
  const dayOfWeek = today.getDay()
  let lastFriday
  let twoFridaysAgo

  if (dayOfWeek > 5) {
    // Today is later than Friday in the week
    lastFriday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - (dayOfWeek - 5) - 7
    )
    twoFridaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - (dayOfWeek - 5) - 14
    )
  } else {
    // Today is earlier in the week
    lastFriday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - (dayOfWeek + 2)
    )
    twoFridaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - (dayOfWeek + 2) - 7
    )
  }
  return [lastFriday, twoFridaysAgo]
}

exports.getShowDates = getShowDates
