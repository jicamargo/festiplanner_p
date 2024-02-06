# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  concert_id :bigint           not null
#  user_id    :bigint           not null
#
class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :concert
end
