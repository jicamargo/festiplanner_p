import * as React from "react"
import Row from "./row"
import { useAppSelector } from "../contexts/venue_context"

const rowItems = (rowCount: number) => {
  const rowNumbers = Array.from(Array(rowCount).keys())
  return rowNumbers.map((rowNumber) => (
    <Row key={rowNumber + 1} rowNumber={rowNumber + 1} />
  ))
}

export const VenueBody = (): React.ReactElement => {
  const rowCount = useAppSelector((state) => state.rowCount)
  return (
    <div className="flex flex-col items-center">
      <table className="table border border-slate-400">
        <caption className="text-xl py-2 mt-2 font-bold text-slate-500 bg-slate-200">
            S T A G E
        </caption>
        <tbody>{rowItems(rowCount)}</tbody>
      </table>
    </div>
  )
}

export default VenueBody