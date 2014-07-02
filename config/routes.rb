require 'modules/restrict_format'
require 'modules/api_constraints'

Kurkur::Application.routes.draw do

  resources :api_keys

  # devise_for :users

  # scope :admin do
  #   resources :articles
  # end

  # API EMBER
  namespace :api, defaults: {format: 'json'}, constraints: RestrictFormat.new(:json) do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :articles
      resources :users, only: [:create]
      resources :sessions, only: [:create, :destroy]
    end
    match '*path' => 'errors#not_found', via: [:get, :post, :put, :patch, :delete]
  end

  # TO EMBER APP
  get '*path', to: 'ember#index', constraints: RestrictFormat.new(:html)
  root :to => redirect('/andrkrn'), constraints: RestrictFormat.new(:html)
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
