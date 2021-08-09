Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/nachos' => 'food#nachos'
# ^Verb  ^route     ^controller ^method
  get '/tacos' => 'food#tacos'
  get '/' => 'food#home'
  get '/burritos' => 'food#burritos'
end
