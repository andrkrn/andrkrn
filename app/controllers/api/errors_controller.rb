class Api::ErrorsController < ApplicationController
  def not_found
    render json: {message: '404 Not found'}, status: 404
  end
end
