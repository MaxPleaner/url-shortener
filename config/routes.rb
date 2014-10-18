Rails.application.routes.draw do
  root to: "backbone_pages#first"
  get "alias/:alias_name", to: "api/urls#redirect_alias"
  post "api/urls/search", to: "api/urls#search"
  namespace :api do
    resources :urls
  end
end
