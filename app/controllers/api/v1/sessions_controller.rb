class Api::V1::SessionsController < Api::V1::ApplicationController

  def create
    user = User.where(email: params[:user][:email]).first
    if user && user.authenticate(params[:user][:password])
      render json: user.session_api_key, status: 201
    else
      render json: {error: 'Invalid email or password'}, status: 401
    end
  end
end