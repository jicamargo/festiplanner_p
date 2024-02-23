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
end
