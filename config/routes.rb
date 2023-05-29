Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # FETCH TESTING
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show,  :index]
    resources :cart_items, only: [:index, :update, :create, :destroy]
    resources :reviews, only:[:index, :update, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
