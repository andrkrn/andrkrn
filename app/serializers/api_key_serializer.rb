class ApiKeySerializer < ActiveModel::Serializer
  attributes :id, :access_token, :scope, :expired_at, :created_at
  has_one :user
end
