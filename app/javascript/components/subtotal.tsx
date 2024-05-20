import * as React from "react"
import styled from "styled-components"
import { clearCart, useAppDispatch, useAppSelector } from "../contexts/venue_context"

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`

const buttonClassSmall =
  "px-3 py-2 m-1 my-1 w-30 text-center text-white transition-colors cursor-pointer " +
  "duration-150 rounded-lg focus:shadow-outline "

const Subtotal = (): React.ReactElement => {
  const myTickets = useAppSelector((state) => state.myTickets)
  const dispatch = useAppDispatch()

  const onClear = () => {
    dispatch(clearCart())
  }
  return (
    <div className="flex border border-slate-400 rounded-lg w-full mx-auto mt-2 md:w-4/5">
      <div className="flex flex-col grow justify-center mr-4">
        <Header>
          <span>Tickets Purchased: &nbsp;</span>
          <span>{myTickets.length}</span>
        </Header>
        <Header>
          <span>Tickets Cost: &nbsp;</span>
          <span>${myTickets.length * 15}.00</span>
        </Header>
      </div>
      <div className="flex flex-col grow-0 justify-center">
        <div className={buttonClassSmall + " bg-gray-600 hover:bg-gray-900"} onClick={onClear}>
          Clear Tickets
        </div>
        <div className={buttonClassSmall + " bg-green-600 hover:bg-green-700"} onClick={() => alert("Payment not implemented in this demo")}>
          Pay Now
        </div>
      </div>
    </div>
  )
}

export default Subtotal
