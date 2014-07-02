class Api::V1::SessionsController < Api::V1::ApplicationController

  def create
    puts permitted_params
    user = User.where(email: params[:user][:email])
    
  end

  private
    def permitted_params
      params[:user].permit(:email, :password)
    end
end