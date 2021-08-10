class ItalianController < ApplicationController
  def pasta
    @pasta_type = params[:pasta_order]
  end

  def breadsticks
    @number_o_sticks = params[:number]
    if @number_o_sticks.to_i >= 10
      @number_o_sticks = 'a platter of'
    else
      @number_o_sticks
    end
  end

  def dessert
    @selection = params[:selection]
    @beverage = params[:beverage]
  end

end
