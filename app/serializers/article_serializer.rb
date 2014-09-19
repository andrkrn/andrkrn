class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :article_content, :description, :created_at, :updated_at
end
