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
end
