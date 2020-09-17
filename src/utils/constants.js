export const EXCERCISES = ['Squat', 'Bench', 'Deadlift', 'Shoulder Press']

export const DAY_1 = [EXCERCISES[0], [EXCERCISES[1]]]
export const DAY_2 = [EXCERCISES[2], EXCERCISES[3]]
export const DAY_3 = [EXCERCISES[1], [EXCERCISES[0]]]

export const DAYS = [DAY_1, DAY_2, DAY_3]

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
