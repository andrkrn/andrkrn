class Api::V1::ArticlesController < Api::V1::ApplicationController
  # before_filter :ensure_authenticated_user, only: [:index]

  # skip_before_filter :ensure_authenticated_user

  api :GET, '/articles'
  param :limit, :number, desc: "Total articles returned, default: 10", required: false
  param :order, ['desc', 'asc'], desc: "Sort articles time 'asc' or 'desc', default: 'desc'", required: false
  def index
    render json: Article.order("created_at #{order_params}").limit(limit_params)
  end

  def create
    article = Article.create(article_params)
    if article.new_record?
      render json: { errors: article.errors.map.each{|k, v| k.to_s + ' ' + v} }, status: 422
    else
      render json: article, status: 201
    end
  end
  
  api :GET, '/articles/:id'
  param :id, :number, desc: "Article id", required: true
  def show
    render json: Article.find(params[:id])
  end

  api :PUT, '/articles/:id'
  param :id, :number, desc: "Article id", required: true
  def update
    article = Article.find(params[:id])
    if article.update_attributes(article_params)
      render json: article
    else
      render json: {error: article.errors}, status: 422
    end
  end

  api :GET, '/articles/search'
  param :q, String, desc: "Query for search articles", required: true
  param :limit, :number, desc: "Total articles returned, default: 10", required: false
  def search
    render json: Article.search(params[:q], limit_params)
  end

  private
    def article_params
      params.require(:article).permit(:title, :description, :article_content)
    end

    def limit_params
      (params[:limit] || 10) rescue 10
    end

    def order_params
      (params[:order] || 'desc') rescue 'desc'
    end
end