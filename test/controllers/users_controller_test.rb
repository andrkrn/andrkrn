require 'test_helper'

class UsersControllerTest < ActionController::TestCase

  setup do
    @controller = Api::V1::UsersController.new
  end

  test "#create" do
    post 'create', {
      user: {
        full_name: 'Billy Blowers',
        email: 'billy_blowers@example.com',
        password: 'secret',
        password_confirmation: 'secret'
      }
    }
    results = JSON.parse(response.body)
    assert results['api_key']['access_token'] =~ /\S{32}/
    assert results['api_key']['user_id'] > 1
  end

  test "#create with invalid data" do
    post 'create', {
      user: {
        full_name: '',
        email: 'foo',
        password: 'secret',
        password_confirmation: 'something_else'
      }
    }
    results = JSON.parse(response.body)
    assert results['errors'].size == 3
  end
end
