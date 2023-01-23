Rails.application.routes.draw do
  get '/events', to: 'events#index'
  get 'events/:id', to: 'events#show'
  patch '/events/:id', to: 'events#update'
  post '/events', to: 'events#create'
  delete '/events/:id', to: 'events#destroy'

  get '/hosts', to: 'hosts#index'
  get '/hosts/:id', to: 'hosts#show'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
end
