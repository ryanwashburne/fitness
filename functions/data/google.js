import { GoogleSpreadsheet } from 'google-spreadsheet'
if (process.env.NODE_ENV !== 'production' || process.env.NETLIFY_DEV === 'true')
  require('dotenv').config()

const loadDoc = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_KEY)
  doc.useApiKey(process.env.GOOGLE_API_KEY)
  await doc.loadInfo()
  return doc
}
const loadSheet = async () => {
  const doc = await loadDoc()
  return doc.sheetsByIndex[0]
}

export const getValues = async () => {
  const sheet = await loadSheet()
  await sheet.loadCells()
  const cells = await Promise.all([
    await sheet.getCell(2, 2),
    await sheet.getCell(2, 3),
    await sheet.getCell(2, 4),
    await sheet.getCell(2, 5),
  ])
  return cells.map((cell) => cell.value)
}
