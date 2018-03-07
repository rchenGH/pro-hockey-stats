class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :seasons
  # class SeasonSerializer < ActiveModel::Serializer
  #   attributes :id, :season, :age, :team, :gp, :g, :a, :pts, :plus_minus, :pim, :evg, :ppg, :sh, :gw, :eva, :ppa, :s, :s_percentage, :toi
  #
  # end

end
