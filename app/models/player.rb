class Player < ApplicationRecord
  has_many :seasons

  def full_name
    "#{first_name} #{last_name}"
  end

end
