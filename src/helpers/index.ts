const capitilizeString = (input: string | undefined) => {
  if (!input || input.length <= 1) {
    return input;
  }

  return input[0].toUpperCase() + input.slice(1).toLowerCase()
}

const formatDateAndTime = (date?: string) => {
  if (!date) {
    return date;
  }

  return new Date(date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
}

export {
  capitilizeString,
  formatDateAndTime
}