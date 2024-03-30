import * as React from "react";
import styled from "styled-components";
import { TicketData } from "../contexts/venue_types";
import { seatChange, useAppDispatch, useAppSelector } from "../contexts/venue_context";

const stateColor = (status: string): string => {
  if (status === "unsold") {
    return "white";
  } else if (status === "held") {
    return "green";
  } else if (status === "purchased") {
    return "red";
  } else {
    return "yellow";
  }
};

interface SquareProps {
  status: string;
  className?: string;
}

const buttonClass = "p-4 m-2 border-black border-4 text-lg cursor-pointer";

const ButtonSquare = styled.span.attrs({
  className: buttonClass,
})<SquareProps>`
  background-color: ${(props) => stateColor(props.status)};
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${(props) => 
      props.status === "unsold" ? "lightblue" : stateColor(props.status)};
  }
`;

interface SeatProps {
  seatNumber: number;
  rowNumber: number;
}

export const Seat = ({
  seatNumber,
  rowNumber,
}: SeatProps): React.ReactElement => {
  const myTickets = useAppSelector((state) => state.myTickets);
  const otherTickets = useAppSelector((state) => state.otherTickets);
  const ticketsToBuyCount = useAppSelector((state) => state.ticketsToBuyCount);
  const seatsPerRow = useAppSelector((state) => state.seatsPerRow);
  const dispatch = useAppDispatch();
  
  const seatMatch = (ticketList: TicketData[], exact = false): boolean => {
    for (const heldTicket of ticketList) {
      const rowMatch = heldTicket.row == rowNumber;
      const seatDiff = heldTicket.number - seatNumber;
      const diff = exact ? 1 : ticketsToBuyCount;
      const seatMatch = seatDiff >= 0 && seatDiff < diff;
      if (rowMatch && seatMatch) {
        return true;
      }
    }
    return false;
  };

  const currentStatus = (): string => {
    if (seatMatch(otherTickets, true)) {
      return "purchased";
    }
    if (seatMatch(myTickets, true)) {
      return "held";
    }
    if (
      seatMatch(otherTickets) ||
      seatMatch(myTickets) ||
      seatNumber + ticketsToBuyCount - 1 > seatsPerRow
    ) {
      return "invalid";
    }
    return "unsold";
  };

  const onSeatChange = (): void => {
    const status = currentStatus();
    if (status === "invalid" || status === "purchased") {
      return;
    }
    dispatch(seatChange(status, rowNumber, seatNumber));
  };

  return (
    <td>
      <ButtonSquare status={currentStatus()} onClick={onSeatChange}>
        {seatNumber}
      </ButtonSquare>
    </td>
  );
};

export default Seat;
