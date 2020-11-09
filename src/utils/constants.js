const SQUAT = 'Squat'
const BENCH = 'Bench'
const DEADLIFT = 'Deadlift'
const SHOULDER = 'Shoulder Press'
const ROW = 'Bent Row'

export const EXERCISES = [SQUAT, BENCH, DEADLIFT, SHOULDER, ROW].sort()

export const DAY_1 = [BENCH, SQUAT]
export const DAY_2 = [ROW, SHOULDER]
export const DAY_3 = [DEADLIFT, BENCH]
export const DAY_4 = [SQUAT, ROW]
export const DAY_5 = [SHOULDER, DEADLIFT]

export const DAYS = [DAY_1, DAY_2, DAY_3, DAY_4, DAY_5]

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
