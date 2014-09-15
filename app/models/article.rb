class Article < ActiveRecord::Base
  belongs_to :user

  has_many :tags, dependent: :destroy

  # Validations
  validates :title, uniqueness: true
end
