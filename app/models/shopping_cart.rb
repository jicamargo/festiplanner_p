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

  def clear(concert_id:, tickets:)
    tickets.each do |ticket|
      db_ticket = Ticket.find_by(
        row: ticket["row"], number: ticket["number"], concert_id: concert_id
      )
      db_ticket&.update(status: :unsold)
    end
  end
end
