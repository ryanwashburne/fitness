export const rounded = (x, roundTo = 1) => {
  return Math.ceil(x / roundTo) * roundTo
}
