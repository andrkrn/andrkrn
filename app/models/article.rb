class Article < ActiveRecord::Base
  belongs_to :user

  has_many :tags, dependent: :destroy

  # Validations
  validates :title, uniqueness: true

  class << self
    def search(q, limit = 10, order = 'desc')
      articles = Article.where("title ILIKE ? or content ILIKE ?", "%#{q}%", "%#{q}%").limit(limit.to_i).order("created_at #{order}")
    end
  end
end
