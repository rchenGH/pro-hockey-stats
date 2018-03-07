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
  {
    first_name: "Nikita",
    last_name: "Kucherov",
    url: "https://www.hockey-reference.com/players/k/kucheni01.html"
  },
  {
    first_name: "Phil",
    last_name: "Kessel",
    url: "https://www.hockey-reference.com/players/k/kesseph01.html"
  },
  {
    first_name: "Johnny",
    last_name: "Gaudreau",
    url: "https://www.hockey-reference.com/players/g/gaudrjo01.html"
  },
  {
    first_name: "Jakub",
    last_name: "Voracek",
    url: "https://www.hockey-reference.com/players/v/voracja01.html"
  },
  {
    first_name: "John",
    last_name: "Tavares",
    url: "https://www.hockey-reference.com/players/t/tavarjo01.html"
  },
  {
    first_name: "Nathan",
    last_name: "MacKinnon",
    url: "https://www.hockey-reference.com/players/m/mackina01.html"
  },
  {
    first_name: "Claude",
    last_name: "Giroux",
    url: "https://www.hockey-reference.com/players/g/giroucl01.html"
  },
  {
    first_name: "Josh",
    last_name: "Bailey",
    url: "https://www.hockey-reference.com/players/b/bailejo01.html"
  },
  {
    first_name: "Blake",
    last_name: "Wheeler",
    url: "https://www.hockey-reference.com/players/w/wheelbl01.html"
  },
  {
    first_name: "Alex",
    last_name: "Ovechkin",
    url: "https://www.hockey-reference.com/players/o/ovechal01.html"
  },
  {
    first_name: "Anze",
    last_name: "Kopitar",
    url: "https://www.hockey-reference.com/players/k/kopitan01.html"
  },
  {
    first_name: "Mathew",
    last_name: "Barzal",
    url: "https://www.hockey-reference.com/players/b/barzama01.html"
  },
  {
    first_name: "Jonathan",
    last_name: "Marchessault",
    url: "https://www.hockey-reference.com/players/a/audymjo01.html"
  },
  {
    first_name: "Taylor",
    last_name: "Hall",
    url: "https://www.hockey-reference.com/players/h/hallta02.html"
  },
  {
    first_name: "Sean",
    last_name: "Couturier",
    url: "https://www.hockey-reference.com/players/c/coutuse01.html"
  },
  {
    first_name: "Brayden",
    last_name: "Schenn",
    url: "https://www.hockey-reference.com/players/s/schenbr01.html"
  },
  {
    first_name: "Jack",
    last_name: "Eichel",
    url: "https://www.hockey-reference.com/players/e/eicheja01.html"
  },
  {
    first_name: "Alexander",
    last_name: "Radulov",
    url: "https://www.hockey-reference.com/players/r/radulal01.html"
  },
  {
    first_name: "Patrick",
    last_name: "Kane",
    url: "https://www.hockey-reference.com/players/k/kanepa01.html"
  },
  {
    first_name: "Jamie",
    last_name: "Benn",
    url: "https://www.hockey-reference.com/players/b/bennja01.html"
  },
  {
    first_name: "Evgeny",
    last_name: "Kuznetsov",
    url: "https://www.hockey-reference.com/players/k/kuzneev01.html"
  },
  {
    first_name: "John",
    last_name: "Klingberg",
    url: "https://www.hockey-reference.com/players/k/klingjo01.html"
  },
  {
    first_name: "Tyler",
    last_name: "Seguin",
    url: "https://www.hockey-reference.com/players/s/seguity01.html"
  },
  {
    first_name: "David",
    last_name: "Pastrnak",
    url: "https://www.hockey-reference.com/players/p/pastrda01.html"
  },
  {
    first_name: "Brad",
    last_name: "Marchand",
    url: "https://www.hockey-reference.com/players/m/marchbr03.html"
  },
  {
    first_name: "Jonathan",
    last_name: "Huberdeau",
    url: "https://www.hockey-reference.com/players/h/huberjo01.html"
  },
  {
    first_name: "Mikko",
    last_name: "Rantanen",
    url: "https://www.hockey-reference.com/players/r/rantami01.html"
  },
  {
    first_name: "Sean",
    last_name: "Monahan",
    url: "https://www.hockey-reference.com/players/m/monahse01.html"
  },
  {
    first_name: "Eric",
    last_name: "Staal",
    url: "https://www.hockey-reference.com/players/s/staaler01.html"
  },
  {
    first_name: "Vladamir",
    last_name: "Tarasenko",
    url: "https://www.hockey-reference.com/players/t/tarasvl01.html"
  },
  {
    first_name: "David",
    last_name: "Perron",
    url: "https://www.hockey-reference.com/players/p/perroda01.html"
  },
  {
    first_name: "Vincent",
    last_name: "Trocheck",
    url: "https://www.hockey-reference.com/players/t/trochvi01.html"
  },
  {
    first_name: "William",
    last_name: "Karlsson",
    url: "https://www.hockey-reference.com/players/k/karlswi01.html"
  },
  {
    first_name: "Brock",
    last_name: "Boeser",
    url: "https://www.hockey-reference.com/players/b/boesebr01.html"
  },
  {
    first_name: "Aleksander",
    last_name: "Barkov",
    url: "https://www.hockey-reference.com/players/b/barkoal01.html"
  },
  {
    first_name: "Brent",
    last_name: "Burns",
    url: "https://www.hockey-reference.com/players/b/burnsbr01.html"
  },
  {
    first_name: "Patrice",
    last_name: "Bergeron",
    url: "https://www.hockey-reference.com/players/b/bergepa01.html"
  },
  {
    first_name: "Brayden",
    last_name: "Point",
    url: "https://www.hockey-reference.com/players/p/pointbr01.html"
  },
  {
    first_name: "Leon",
    last_name: "Draisaitl",
    url: "https://www.hockey-reference.com/players/d/draisle01.html"
  },
  {
    first_name: "Anders",
    last_name: "Lee",
    url: "https://www.hockey-reference.com/players/l/leean01.html"
  },
  {
    first_name: "Rickard",
    last_name: "Rakell",
    url: "https://www.hockey-reference.com/players/r/rakelri01.html"
  },
  {
    first_name: "Reilly",
    last_name: "Smith",
    url: "https://www.hockey-reference.com/players/s/smithre01.html"
  },
  {
    first_name: "Mark",
    last_name: "Stone",
    url: "https://www.hockey-reference.com/players/s/stonema01.html"
  },
  {
    first_name: "Auston",
    last_name: "Matthews",
    url: "https://www.hockey-reference.com/players/m/matthau01.html"
  },
  {
    first_name: "P.K.",
    last_name: "Subban",
    url: "https://www.hockey-reference.com/players/s/subbapk01.html"
  },
  {
    first_name: "Mikael",
    last_name: "Granlund",
    url: "https://www.hockey-reference.com/players/g/granlmi01.html"
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
