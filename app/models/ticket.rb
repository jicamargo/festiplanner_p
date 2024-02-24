# == Schema Information
#
# Table name: tickets
#
#  id                :bigint           not null, primary key
#  number            :integer
#  row               :integer
#  status            :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  concert_id        :bigint           not null
#  shopping_carts_id :bigint
#  ticket_orders_id  :bigint
#  user_id           :bigint
#
class Ticket < ApplicationRecord
  belongs_to :concert
  belongs_to :user, optional: true
  belongs_to :ticket_order, optional: true
  belongs_to :shopping_cart, optional: true

  enum status: {
    unsold: "unsold",
    held: "held",
    purchased: "purchased",
    refunded: "refunded"
  }

  def toggle_for(user)
    return unless user
    return if self.user && self.user != user
    case status
    when "unsold"
      update(status: "held", user: user)
    when "held"
      update(status: "unsold", user: user)
    end
  end

  def to_concert_h
    {
      id: id,
      row: row,
      number: number,
      status: status
    }
  end
end
