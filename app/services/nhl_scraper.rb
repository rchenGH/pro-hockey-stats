class NHLScraper
  attr_accessor :mechanizer, :data, :base_url

  # BASE_URL = "https://www.hockey-reference.com/players/c/crosbsi01.html"
  # BASE_URL = "https://www.hockey-reference.com/players/m/malkiev01.html"
  # DATA_COLS = [:season, :age, :team, :league,:gp,:g,:a,:pts,:plus_minus,:pim,:evg,:ppg,:sh,:gw,:eva,:ppa,:sh,:s,:s_percentage,:tsa,:toi,:atoi]
  DATA_COLS = [:season, :age, :team, :league,:gp,:g,:a,:pts,:plus_minus,:pim,:evg,:ppg,:sh,:gw,:eva,:ppa,:sh,:s,:s_percentage]


  # DATA_COLS = [:season, :age, :team, :league,:gp,:g,:a,:pts]

  def initialize(url)
    @base_url = url
    @mechanizer = Mechanize.new { |agent|
      agent.user_agent_alias = 'Windows Chrome'
    }
    @data = []
  end

  def scrape
    mechanizer.get(base_url) do |page|
      table = page.search("#div_stats_basic_plus_nhl").children[1]
      tbody = table.children[6]
      seasons = tbody.children
      seasons.each do |season|
        next if season.text == "\n"
        season_data = {}
        season.children.each_with_index do |data_col, index|
          if DATA_COLS[index].present?
            season_data[DATA_COLS[index]] = data_col.children[0].try(:text)
          end
        end
        @data << season_data

      end

    end
  end
end

# class NHLScraper
#   attr_accessor :mechanizer, :data, :base_url
#
#
#   BASE_URL =
#   PLAYER_URLS = {
#     "Sidney Crosby" => "https://www.hockey-reference.com/players/c/crosbsi01.html",
#     "Evgeni Malkin" => "https://www.hockey-reference.com/players/m/malkiev01.html",
#   }
#
#
#   # DATA_COLS = [:season, :age, :team, :league,:gp,:g,:a,:pts,:plus_minus,:pim,:evg,:ppg,:sh,:gw,:eva,:ppa,:sh,:s,:s_percentage,:tsa,:toi,:atoi]
#
#   DATA_COLS = [:season, :age, :team, :league,:gp,:g,:a,:pts]
#
#   def initialize()
#     @base_url = BASE_URL
#     @mechanizer = Mechanize.new { |agent|
#       agent.user_agent_alias = 'Windows Chrome'
#     }
#     @data = []
#   end
#
#   def scrape
#     mechanizer.get(base_url) do |page|
#       table = page.search("#div_stats_basic_plus_nhl").children[1]
#       tbody = table.children[6]
#       seasons = tbody.children
#       seasons.each do |season|
#         next if season.text == "\n"
#         # binding.pry
#         season_data = {}
#         season.children.each_with_index do |data_col, index|
#           if DATA_COLS[index].present?
#             season_data[DATA_COLS[index]] = data_col.children[0].try(:text)
#           end
#         end
#
#         @data << season_data
#
#           PLAYER_URLS.keys.each do |key|
#           scraper = NHLScraper.new(PLAYER_URLS[key])
#           scraper.scrape
#           scraper.data.each do |d|
#             puts d
#           end
#
#         end
#
#
#
#       end
#
#     end
#   end
# end
