# == Schema Information
#
# Table name: gigs
#
#  id               :bigint           not null, primary key
#  duration_minutes :integer
#  order            :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  band_id          :bigint           not null
#  concert_id       :bigint           not null
#
class Gig < ApplicationRecord
  belongs_to :band
  belongs_to :concert
end
