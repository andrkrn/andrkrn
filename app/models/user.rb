class User < ActiveRecord::Base
  has_many :articles
  has_many :api_keys

  has_secure_password

  # Api keys
  def session_api_key
    api_keys.active.session.first_or_create
  end

  def api_api_key
    api_keys.active.api.first_or_create
  end
end
