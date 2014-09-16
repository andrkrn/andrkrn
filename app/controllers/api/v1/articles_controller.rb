class Api::V1::ArticlesController < Api::V1::ApplicationController
  # before_filter :ensure_authenticated_user, only: [:index]

  # skip_before_filter :ensure_authenticated_user

  api :GET, '/articles'
  def index
    render json: Article.all
  end
  
  api :GET, '/articles/:id'
  def show
    render json: Article.find(params[:id])
  end
end