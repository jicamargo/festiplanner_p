import * as React from "react"
import styled from "styled-components"
import { TicketData } from "../contexts/venue_types"
import { seatChange, useAppDispatch, useAppSelector } from "../contexts/venue_context"

const stateColor = (status: string): string => {
  if (status === "unsold") {
    return "white"
  } else if (status === "held") {
    return "green"
  } else if (status === "purchased") {
    return "red"
  } else {
    return "yellow"
  }
}

const stateTextColor = (status: string): string => {
  if (status === "unsold") {
    return "black"
  } else if (status === "held") {
    return "white"
  } else if (status === "purchased") {
    return "white"
  } else {
    return "black"
  }
}

interface SquareProps {
  status: string
  className?: string
}
const buttonClass = "inline-block p-1 m-1 cursor-pointer font-bold text-center"

const ButtonSquare = styled.span.attrs({
  className: buttonClass,
})<SquareProps>`
  background-color: ${(props) => stateColor(props.status)};
  color: ${(props) => stateTextColor(props.status)};
  transition: all 0.3s ease-in-out;

  border-top-width: 1px; /* Borde superior más delgado */
  border-bottom-left-radius: 15px; /* Esquinas inferiores redondeadas */
  border-bottom-right-radius: 15px;
  border-left-width: 5px; /* Bordes laterales más gruesos */
  border-right-width: 5px;
  border-bottom-width: 3px;
  border-color: gray;
  border-style: solid; /* Tipo de borde */
  width: 50px;

  &:hover {
    background-color: ${(props) =>
      props.status === "unsold" ? "lightblue" : stateColor(props.status)};
  }
`

interface SeatProps {
  seatNumber: number
  rowNumber: number
}

export const Seat = ({
  seatNumber,
  rowNumber,
}: SeatProps): React.ReactElement => {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const seatMatch = (ticketList: TicketData[], exact = false): boolean => {
    for (const heldTicket of ticketList) {
      const rowMatch = heldTicket.row == rowNumber
      const seatDiff = heldTicket.number - seatNumber
      const diff = exact ? 1 : state.ticketsToBuyCount
      const seatMatch = seatDiff >= 0 && seatDiff < diff
      if (rowMatch && seatMatch) {
        return true
      }
    }
    return false
  }

  const currentStatus = (): string => {
    if (seatMatch(state.otherTickets, true)) {
      return "purchased"
    }
    if (seatMatch(state.myTickets, true)) {
      return "held"
    }
    if (
      seatMatch(state.otherTickets) ||
      seatMatch(state.myTickets) ||
      seatNumber + state.ticketsToBuyCount - 1 > state.seatsPerRow
    ) {
      return "invalid"
    }
    return "unsold"
  }

  const onSeatChange = (): void => {
    const status = currentStatus()
    if (status === "invalid" || status === "purchased") {
      return
    }
    dispatch(seatChange(status, rowNumber, seatNumber))
  }

  return (
    <td>
      <ButtonSquare status={currentStatus()} onClick={onSeatChange}>
        {seatNumber}
      </ButtonSquare>
    </td>
  )
}

export default Seat
