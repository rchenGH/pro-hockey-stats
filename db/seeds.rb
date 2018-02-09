# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# WhateverModel.delete_all
#
# BASE_URL =
# PLAYER_URLS = {
#   "Sidney Crosby" => "https://www.hockey-reference.com/players/c/crosbsi01.html",
#   "Evgeni Malkin" => "https://www.hockey-reference.com/players/m/malkiev01.html",
#   }
#
# PLAYER_URLS.keys.each do |key|
#   scraper = NHLScraper.new(PLAYER_URLS[key])
#   scraper.scrape
#   # scraper data will be an array of data
#   # scraper.data.each do |data|
#     # SomeModel.create(data)
#   # end
# end

def obj_attrs(obj, keys_to_reject = [])
  obj.reject {|k,v| keys_to_reject.include?(k)}
end

######

User.destroy_all
Season.delete_all
Player.delete_all

user = User.create(
   first_name: 'Raymond',
   last_name: 'Chen',
   email: 'raymond@gmail.com',
   password: '1234',
   api_key: "7cfca90c1baa41f756b1eab860179e510019c506814d4a913940e908680bc03b8ef2e92c3a101d0bcd18b25e675dd611505fb57d7b7afae844b52c7ac72ab95f"
)


puts "Login email:#{user.email} and Password: #{user.password}"


PLAYERS = [
  {
    first_name: "Sidney",
    last_name: "Crosby",
    url: "https://www.hockey-reference.com/players/c/crosbsi01.html"
  },
  {
    first_name: "Evgeni",
    last_name: "Malkin",
    url: "https://www.hockey-reference.com/players/m/malkiev01.html"
  },
  {
    first_name: "Steven",
    last_name: "Stamkos",
    url: "https://www.hockey-reference.com/players/s/stamkst01.html"
  },
  {
    first_name: "Connor",
    last_name: "McDavid",
    url: "https://www.hockey-reference.com/players/m/mcdavco01.html"
  },
]

PLAYERS.each do |player_meta|
  scraper = NHLScraper.new(player_meta[:url])
  scraper.scrape

  player_attrs = obj_attrs(player_meta, [:url])
  player = Player.create(player_attrs)
  p "Seeding player: #{player_meta[:first_name]} #{player_meta[:last_name]}"


  scraper.data.each do |season|
    next if season.empty?
    season_attrs = obj_attrs(season, [:league])
    player.seasons.create(season_attrs)
    p season
  end
end











#
