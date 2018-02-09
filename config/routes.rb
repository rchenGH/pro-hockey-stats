Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

   get('/', { to: 'welcome#index', as: :home })

   namespace :api, defaults: {format: :json} do
     namespace :v1 do
       resources :players do
          resources :seasons
        end
       resources :tokens
     end
   end
end
