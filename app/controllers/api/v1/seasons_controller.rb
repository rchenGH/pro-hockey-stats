class Api::V1::SeasonsController < Api::ApplicationController

  before_action :find_player
  before_action :authenticate_api_user

  # def create
  #   # season = @player.seasons.build(season_params)
  #   season.user = current_user
  #   if season.save
  #     render json: @player
  #   else
  #     render json: {errors: season.errors.full_messages}
  #   end
  # end


  # private
  #
  # def find_player
  #   @player = Player.find(params[:player_id])
  # end
  #
  # def find_season
  #   @season = Season.find(params[:id])
  # end


end
