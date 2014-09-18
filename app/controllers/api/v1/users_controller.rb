class Api::V1::UsersController < Api::V1::ApplicationController

  # skip_before_filter :ensure_authenticated_user, only: [:create]

  api :POST, '/users/create'
  def create
    user = User.create(users_params)
    if user.new_record?
      render json: { errors: user.errors.map.each{|k, v| k.to_s + ' ' + v} }, status: 422
    else
      render json: user.session_api_key, status: 201
    end
  end

  private
    def users_params
      params.require(:user).permit(:full_name, :email, :password, :password_confirmation)
    end
end
