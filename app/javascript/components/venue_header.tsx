import * as React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from "../contexts/venue_context"

const Header = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 15px;
  margon-left: 15px;
`
const options = (seatsPerRow: number) => {
  const arrayOfNumbers = Array.from(Array(seatsPerRow).keys())
  return arrayOfNumbers.map((i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))
}

export const VenueHeader = (): React.ReactElement => {
  const seatsPerRow = useAppSelector((state) => state.seatsPerRow)
  const dispatch = useAppDispatch()
  const setTickectsOnChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLSelectElement
    dispatch({
      type: "setTicketsToBuy",
      amount: parseInt(target.value, 10),
    })
  }

  return (
    <div>
      <Header>
        How many tickets would you like?:
        <span className="select ml-2">
          <select onChange={setTickectsOnChange}>
            {options(seatsPerRow)}
          </select>
        </span>
      </Header>
    </div>
  )
}

export default VenueHeader