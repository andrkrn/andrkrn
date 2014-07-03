class Api::V1::ArticlesController < Api::V1::ApplicationController
  # before_filter :ensure_authenticated_user, only: [:index]

  def index
    render json: Article.all
  end

  def show
    render json: Article.find(params[:id])
  end
end