class Api::ApplicationController < ApplicationController

  def current_user
    token_type, token = request.headers['AUTHORIZATION']&split(' ') || []
    case token_type&.downcase
    when 'api_key'
      @user ||= User.find_by(api_key: token)
    when 'jwt'
      begin
        payload = JWT.decode(token, Rails.application.secrets.secret_key_base)&.first
        @user ||= User.find_by(email: payload['email'])
      rescue JWT::DecodeError => error
        nil
      end
    end
  end

  private
  def authenticate_api_user
    head :unauthorized unless current_user
  end

end
