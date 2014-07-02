class Api::V1::ArticlesController < Api::V1::ApplicationController
  def index
    render json: Article.all
  end
end