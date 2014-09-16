class Api::V1::ArticlesController < Api::V1::ApplicationController
  # before_filter :ensure_authenticated_user, only: [:index]

  # skip_before_filter :ensure_authenticated_user

  api :GET, '/articles'
  param :limit, :number, desc: "Total articles returned, default: 10", required: false
  param :order, String, desc: "", required: false
  def index
    render json: Article.all
  end
  
  api :GET, '/articles/:id'
  param :id, :number, desc: "Article id", required: true
  def show
    render json: Article.find(params[:id])
  end

  api :GET, '/articles/search'
  param :q, String, desc: "Query for search articles", required: true
  param :limit, :number, desc: "Total articles returned, default: 10", required: false
  def search
    render json: Article.search(params[:q], limit_params)
  end

  private
    def limit_params
      (params[:limit] || 10) rescue 10
    end
end