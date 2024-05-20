import { AppProps } from "../components/app"

export interface TicketData {
  id: number
  number: number
  row: number
  status: string
}

export interface VenueState {
  concertId: number
  myTickets: TicketData[]
  otherTickets: TicketData[]
  rowCount: number
  seatsPerRow: number
  ticketsToBuyCount: number
  loading: boolean
}

interface InitFromProps {
  type: "initFromProps"
  props: AppProps
}

interface SetTicketToBuy {
  type: "setTicketsToBuy"
  amount: number
}

interface HoldTicket {
  type: "holdTicket"
  seatNumber: number
  rowNumber: number
}

interface UnholdTicket {
  type: "unholdTicket"
  seatNumber: number
  rowNumber: number
}

interface ClearHolds {
  type: "clearHolds"
}

interface SetTickets {
  type: "setTickets"
  tickets: TicketData[]
}

interface SetLoading {
  type: "setLoading"
  loading: boolean
}

export type VenueAction =
  | InitFromProps
  | SetTicketToBuy
  | HoldTicket
  | UnholdTicket
  | ClearHolds
  | SetTickets
  | SetLoading
  