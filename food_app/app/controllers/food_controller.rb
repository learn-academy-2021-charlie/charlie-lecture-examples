class FoodController < ApplicationController
  def nachos
    @our_nachos = 'our nachos: Chicken, Jalepenos, cheese, gucamole, bacon, pineapples, cajun spices'
    render 'nachos.html.erb'
  end
  def tacos
    render 'tacos.html.erb'
  end
  def home
    render 'home.html.erb'
  end
  def burritos
    @burrito_choices = ['california burrito', 'bean and cheese', 'barbacoa', 'breakfast']
    render 'burritos.html.erb'
  end
end
