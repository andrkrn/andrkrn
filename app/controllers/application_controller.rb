class ApplicationController < ActionController::Base
  ActionController::Parameters.permit_all_parameters = true
  
  before_filter :redirect_from_heroku
  before_filter :check_escaped_fragment

  def redirect_from_heroku
    # redirect_to "http://www.andrikurnia.com/", status: 301 if request.domain == "herokuapp.com"
  end

  def check_escaped_fragment
    puts "[DATA] #{params["_escaped_fragment_"]}"
  end
end
