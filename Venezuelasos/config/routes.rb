Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'home#index'

  get '/index/:id', to: 'admin#index'

  get '/new', to: 'sessions#new', as: 'users'
  post '/new', to: 'sessions#user_create'

  get '/login', to: 'sessions#admin'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/reset_user', to: 'sessions#reset_user'
end
