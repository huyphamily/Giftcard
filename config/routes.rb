Rails.application.routes.draw do
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'
  root 'pages#index'

  namespace :api, defaults: {format: 'json'} do

    namespace :v1 do
      resources :merchants
    end

  end

end
