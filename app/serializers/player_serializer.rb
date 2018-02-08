class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :season, :age, :team, :gp, :g, :a, :pts, :s, :s_percentage, :toi

  belongs_to :user

end
