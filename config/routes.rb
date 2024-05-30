Rails.application.routes.draw do
  resources :favorites
  resource :schedule
  resources :shopping_carts
  resources :ticket_orders
  resources :tickets
  resources :gigs
  resources :concerts
  resources :bands
  resources :venues
  resource(:sold_out_concerts, only: :show)
  devise_for :users
  root to: "schedules#show"

  #monta el servidor ActionCable (para cuando esta en produccion en un servidor web como Apache o Nginx)
  mount ActionCable.server => '/cable'
end
