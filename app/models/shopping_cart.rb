# == Schema Information
#
# Table name: shopping_carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
class ShoppingCart < ApplicationRecord
  belongs_to :user

  def add_tickets (concert_id:, row:, seat_number:, tickets_to_buy_count:, status:)
    seat_range = seat_number...seat_number + tickets_to_buy_count
    tickets = Ticket.where(
      concert_id: concert_id, row: row, number: seat_range
    ).all
    tickets.update(status: status, user: user)
  end
end
