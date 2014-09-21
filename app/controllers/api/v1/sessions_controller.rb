class Api::V1::SessionsController < Api::V1::ApplicationController

  # skip_before_filter :ensure_authenticated_user, only: [:create]

  api :POST, '/sessions/create'
  def create
    user = User.where(email: params[:user][:email]).first
    if user && user.authenticate(params[:user][:password])
      render json: user.session_api_key, status: 201
    else
      render json: {error: 'Invalid email or password'}, status: 422
    end
  end
end