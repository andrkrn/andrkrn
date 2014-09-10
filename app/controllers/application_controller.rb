class ApplicationController < ActionController::Base
  
  before_filter :redirect_from_heroku

  def redirect_from_heroku
    redirect_to "http://www.andrikurnia.com/", status: 301 if request.domain == "herokuapp.com"
  end
end
