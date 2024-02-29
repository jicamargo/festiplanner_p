class ConcertChannel < ApplicationCable::Channel
  def subscribed
    stream_from("concert_#{params[:concertId]}")
    puts ">>>>>>>>>>>>>>>>> hello from concert_channel.rb >>>>>>>>>>>>>>>>> subscribed to concert_#{params[:concertId]} ############################"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def added_to_cart(data)
    cart = ShoppingCart.find_or_create_by(user_id: data["user_id"])
    cart.add_tickets(
      concert_id: data["concertId"],
      row: data["row"],
      seat_number: data["seatNumber"],
      tickets_to_buy_count: data["ticketsToBuyCount"],
      status: data["status"]
    )
    result = Ticket.grouped_for_concert(data["concertId"])
    puts ">>>>>>>>>>>>>>>>> concert_channel.rb >>>>>>>>>>>>>>>>> broadcasting result from added_to_cart for concert_#{data["concertId"]}" 
    ActionCable.server.broadcast("concert_#{data["concertId"]}", result)

    concert = Concert.find(data["concertId"])
    ActionCable.server.broadcast(
      "schedule",
      {
        concerts: [
          {
            concertId: data["concertId"],
            ticketsRemaining: concert.tickets.unsold.count
          }
        ]
      }
    )
    puts ">>>>>>>>>>>>>>>>> concert_channel.rb >>>>>>>>>>>>>>>>> broadcasting schedule &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"
    puts "concert.tickets.unsold.count: #{concert.tickets.unsold.count}"
  end
end
