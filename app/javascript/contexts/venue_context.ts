import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { VenueState, VenueAction } from "./venue_types"

export const initialState = {
  rowCount: 1,
  seatsPerRow: 1,
  concertId: 0,
  otherTickets: [],
  ticketsToBuyCount: 1,
  myTickets: [],
}

export const venueReducer = (
  state: VenueState = initialState,
  action: VenueAction
): VenueState => {
  // console.log("venueReducer state, action:", state,  action)
  switch (action.type) {
    case "initFromProps":
      return {
        ...state,
        concertId: action.props.concertId,
        rowCount: action.props.rowCount,
        seatsPerRow: action.props.seatsPerRow,
      }

    case "setTickets":
      return {
        ...state,
        otherTickets: action.tickets.filter(
          (ticket) => ticket.status === "purchased"
        ),
        myTickets: action.tickets.filter(
          (ticket) => ticket.status === "held"
        ),
      }
    case "setTicketsToBuy":
      return {
        ...state,
        ticketsToBuyCount: action.amount,
      }
    case "holdTicket": {
      const newTickets = Array.from(
        Array(state.ticketsToBuyCount).keys()
      ).map((index) => {
        return {
          id: 0,
          row: action.rowNumber,
          number: action.seatNumber + index,
          status: "held",
        }
      })
      const newState = {
        ...state,
        myTickets: [...state.myTickets, ...newTickets],
      }
      return newState
    }
    case "unholdTicket": {
      const newTickets = state.myTickets.filter((ticket) => {
        const rowMatch = ticket.row === action.rowNumber
        const seatDiff = ticket.number - action.seatNumber
        const seatMatch = seatDiff >= 0 && seatDiff < state.ticketsToBuyCount
        return !(rowMatch && seatMatch)
      })
      return {
        ...state,
        myTickets: newTickets,
      }
    }
    case "clearHolds": {
      return {
        ...state,
        myTickets: []
      }
    }
    default:
      return state
  }
}

export const venueStore = configureStore({ reducer: venueReducer })
export type RootState = ReturnType<typeof venueStore.getState>
export type AppDispatch = typeof venueStore.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
