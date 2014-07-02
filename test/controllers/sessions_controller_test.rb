require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "authenticate with email" do
    pw = 'secret'
    larry = User.create!(email: 'larry@example.com', full_name: 'Larry Moulders', password: pw, password_confirmation: pw)
    post 'create', { user: {email: larry.email, password: pw} }
    results = JSON.parse(response.body)
    assert results['api_key']['access_token'] =~ /\S{32}/
    assert results['api_key']['user_id'] == larry.id
  end

  test "authenticate with invalid info" do
    pw = 'secret'
    larry = User.create!(email: 'larry@example.com', full_name: 'Larry Moulders', password: pw, password_confirmation: pw)
    post 'create', { email: larry.email, password: 'huh' }
    assert response.status == 401
  end
end
