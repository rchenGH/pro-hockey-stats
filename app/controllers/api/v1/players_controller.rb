class Api::V1::PlayersController < Api::ApplicationController
  before_action :authenticate_api_user
  def index
    @players = Player.order(created_at: :desc).limit(10)
    render json: @players
  end


  def show
    player = Player.find params[:id]
    render json: player
  end

  def create
    player = Player.new player_params
    player.user = current_user
    if player.save
      render json: player
    else
      render json: {errors: player.errors.full_messages}
    end
  end

  def update
    player = Player.find params[:id]
    if player.update player.params
      render jason: {success: true}
    else
      render json: {errors: players.errors.full_messages}
    end
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    render json: {success: true}
  end


  private

  def player_params
    params.require(:player).permit(:first_name, :last_name, :season, :age, :team, :gp, :g, :a, :pts)
  end

  def authorize_user!
    unless can?(:crud, player)
      head :unauthorized
    end
  end

end
