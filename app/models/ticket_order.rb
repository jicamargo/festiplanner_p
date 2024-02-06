# == Schema Information
#
# Table name: ticket_orders
#
#  id                :bigint           not null, primary key
#  count             :integer
#  status            :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  concert_id        :bigint           not null
#  shopping_carts_id :bigint
#
class TicketOrder < ApplicationRecord
  belongs_to :concert
  belongs_to :shopping_cart
end
