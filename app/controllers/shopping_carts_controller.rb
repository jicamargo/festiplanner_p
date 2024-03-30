class ShoppingCartsController < ApplicationController
  def create
    seat_number = params[:seatNumber]
    seat_range = seat_number...seat_number + params[:ticketsToBuyCount]
    tickets = Ticket.where(
      concert_id: params[:concertId],
      row: params[:row],
      number: seat_range
    ).all

    tickets.update(
      status: params[:status],
      user: params[status] == "held" ? current_user.id : nil,
    )
    json = tickets.map(&:to_concert_h)
    render(json: json)
  end
end
