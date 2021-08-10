Rails.application.routes.draw do
  get '/nachos' => 'food#nachos'
  # ^Verb  ^route  ^controller ^method
  get '/tacos' => 'food#tacos'
  get '/' => 'food#home'
  get '/burritos' => 'food#burritos'
  get '/pasta/:pasta_order' => 'italian#pasta'
  get '/breadsticks/:number' => 'italian#breadsticks'
  get '/dessert/:selection/:beverage' => 'italian#dessert'
end
