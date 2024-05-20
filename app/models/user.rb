# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  full_name              :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :concerts, through: :favorites

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  kredis_unique_list :concerts_being_edited, typed: :integer

  def is_editing?(concert)
    concerts_being_edited.elements.include?(concert.id)
  end

  def start_editing(concert)
    concerts_being_edited.append(concert.id)
  end

  def end_editing(concert)
    concerts_being_edited.remove(concert.id)
  end

  def self.hoarder
    User.find_by(email: "thoarder@example.com")
  end

  def favorite(concert)
    favorites.find_by(concert_id: concert.id)
  end
end
