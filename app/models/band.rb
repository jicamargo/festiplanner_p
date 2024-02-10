# == Schema Information
#
# Table name: bands
#
#  id          :bigint           not null, primary key
#  description :text
#  genre_tags  :text
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Band < ApplicationRecord
  def genres
    genre_tags.split(",")
  end
end
