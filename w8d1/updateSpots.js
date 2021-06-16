const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
    appointments: [1, 2, 3]
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
    appointments: []
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 4,
    appointments: [4]
  }
];
const appointments = {
  1: {
    id: 1,
    time: "1pm",
    interview: {
      student: "Bob",
      interviewer: 1
    }
  },
  2: {
    id: 2,
    time: "2pm",
    interview: null
  },
  3: {
    id: 3,
    time: "3pm",
    interview: null
  },
  4: {
    id: 4,
    time: "4pm",
    interview: null
  }
}
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const state = {
  day: 'Monday',
  days,
  appointments,
  interviewers
}


// Spots is inside days[], days[] is in my state{}
// state.days[n].spots

// How do I count how many spots ?
// Appointments{} that have a null interview key -> free
// Amount of appointments that has a null interview key === number of spots

// WHat are the appointments given for a specific day?
// Inside the day, we have a list of appointment ids, 
// we can then use those keys to fetch the appointment info

const findDay = (days, dayToUpdate) => {
  return days.reduce((acc, day, index) => {
    if (day.name === dayToUpdate) {
      acc.push(day.appointments)
      acc.push(day)
      acc.push(index)
    }
  }, [])
}

const updateSpots = (state, day) => {
  const dayToUpdate = day || state.day
  // const dayObj = state.days.find(day => day.name === dayToUpdate)
  // const dayObjIndex = state.days.findIndex(day => day.name === dayToUpdate)
  const [listOfApptIds, dayObj, dayObjIndex] = findDay(state.days, dayToUpdate)
  // const spots = listOfApptIds.filter(apptId => !state.appointments[apptId].interview).length
  const spots = listOfApptIds.reduce((spots, apptId) => spots += state.appointments[apptId].interview ? 1 : 0, 0)

  const newDay = { ...dayObj, spots }
  const newDays = [...state.days]
  newDays[dayObjIndex] = newDay

  return { ...state, days: newDays }
}

const updateSpotsButBetterQuestionMark = (state, day) => {
  // Let the user choose between the selected day in state or specific day.
  const dayToUpdate = day || state.day

  // Extract the list of appointment ids, the day object and its id.
  const { listOfApptIds, dayObj, dayObjIndex } = days.reduce((acc, dayObj, index) => {
    if (day.name === dayToUpdate) {
      acc.listOfApptIds = dayObj.appointments
      acc.dayObj = dayObj
      acc.dayObjIndex = index
    }
  }, {})

  // Extract the number of spots from the appointments object.
  const spots = listOfApptIds.reduce((spots, apptId) => !state.appointments[apptId].interview && spots + 1, 0)

  // Let's not mutate our things, so spreading step by step here.
  const newDay = { ...dayObj, spots }
  const newDays = [...state.days]
  newDays[dayObjIndex] = newDay
  const newState = { ...state, days: newDays }

  // Return a new state
  return newState
}

const bookInterview = () => {
  // ...
  // newAppointment

  const appointments = {}

  setState(prev => {
    const newState = { ...prev, appointments }
    const newNewState = updateSpots(newState)

    return newNewState
  })

}