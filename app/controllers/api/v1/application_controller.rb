class Api::V1::ApplicationController < ActionController::API

  # Allow request from domain ip
  before_filter :allow_request_from_domain

  # Ensure user exits
  # before_filter :ensure_authenticated_user

  private

  def allow_request_from_domain
    if Rails.env == "production"
      puts "[IP] #{request.ip}"
      puts "[IP] #{request.remote_ip}"
      puts "[IP] #{request.referrer}"
      unless ['104.28.4.69', '104.28.5.69'].include?(request.ip)
        ensure_authenticated_user
      end
    elsif Rails.env == "development"
    end
  end

  protected

  # Renders a 401 status code if the current user is not authorized
  def ensure_authenticated_user
    render json: {message: 'Unauthorized'}, status: 401 unless current_user
    # head :unauthorized unless current_user
  end

  # Returns the active user associated with the access token if available
  def current_user
    api_key = ApiKey.active.where(access_token: token).first
    if api_key
      return api_key.user
    else
      return nil
    end
  end

  # Parses the access token from the header
  def token
    bearer = request.headers["HTTP_AUTHORIZATION"]

    # allows our tests to pass
    bearer ||= request.headers["rack.session"].try(:[], 'Authorization')

    if bearer.present?
      bearer.split.last
    else
      nil
    end
  end

end