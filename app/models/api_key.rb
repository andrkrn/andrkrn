class ApiKey < ActiveRecord::Base
  belongs_to :user

  validates :scope, inclusion: { in: %w( session api ) }
  validates :access_token, uniqueness: true
  validates :user_id, presence: true
  
  before_create :generate_access_token, :set_expiry_date
  
  scope :session, -> { where(scope: 'session') }
  scope :api,     -> { where(scope: 'api') }
  scope :active,  -> { where('expired_at >= ?', Time.now) }

  private
    def set_expiry_date
      self.expired_at = self.scope == 'session' ? 2.weeks.from_now : 2.years.from_now
    end

    def generate_access_token
      begin
        self.access_token = SecureRandom.hex
      end while self.class.where(access_token: access_token).exists?
    end

end
