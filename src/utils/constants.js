export const EXERCISES = ['Squat', 'Bench', 'Deadlift', 'Shoulder Press']

export const DAY_1 = [EXERCISES[0], [EXERCISES[1]]]
export const DAY_2 = [EXERCISES[2], EXERCISES[3]]
export const DAY_3 = [EXERCISES[1], [EXERCISES[0]]]
export const DAY_4 = [EXERCISES[3], EXERCISES[2]]

export const DAYS = [DAY_1, DAY_2, DAY_3, DAY_4]

const WEEK_1 = [
  { percentage: 40, sets: 1, reps: 5 },
  { percentage: 50, sets: 1, reps: 5 },
  { percentage: 60, sets: 1, reps: 5 },
  { percentage: 65, sets: 1, reps: 5 },
  { percentage: 75, sets: 1, reps: 5 },
  { percentage: 85, sets: 1, reps: 5 },
  { percentage: 65, sets: 5, reps: 5 },
]

const WEEK_2 = [
  { percentage: 40, sets: 1, reps: 5 },
  { percentage: 50, sets: 1, reps: 5 },
  { percentage: 60, sets: 1, reps: 5 },
  { percentage: 70, sets: 1, reps: 5 },
  { percentage: 80, sets: 1, reps: 5 },
  { percentage: 90, sets: 1, reps: 5 },
  { percentage: 70, sets: 5, reps: 5 },
]

const WEEK_3 = [
  { percentage: 40, sets: 1, reps: 5 },
  { percentage: 50, sets: 1, reps: 5 },
  { percentage: 60, sets: 1, reps: 5 },
  { percentage: 75, sets: 1, reps: 5 },
  { percentage: 85, sets: 1, reps: 5 },
  { percentage: 95, sets: 1, reps: 5 },
  { percentage: 75, sets: 5, reps: 5 },
]

export const WEEKS = [WEEK_1, WEEK_2, WEEK_3]
