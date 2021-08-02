#  ChildClass < ParentClass

#  def initialize()
#          super()
#   end


class Orderer
    attr_accessor :shop, :user, :order
    def initialize(shop, user, order)
        @shop = shop
        @user = user
        @order = order
        @date = Time.now
    end
    def get_order
        @order_string = "#{@user} has ordered a/an #{@order} from #{@shop} on/at #{@date}"
    end
end

t_shirt = Orderer.new("amazon", "Amanda F.", "Monty Python Shirt -- autonomus collective commune")
# p t_shirt

# _______________________________________________________________________________________
class T_shirt_orderer < Orderer
    def initialize(shop, user, order, number, style)
        super(shop, user, order)
        # the super() method is used in the child class. It calls on the initialize method of the parent class-- after which the child class has access to the variables in the parent class.
        @number_of_shirts = number
        @style_of_shirts = style
    end
end

monty_python = T_shirt_orderer.new( "amazon", "Amanda F.", "t-shirts", 12, "semi autonomus anchro syndicate commune")
# p monty_python
forty_two = T_shirt_orderer.new("wish", "Trey", "t-shirt", 42000, "The question?" )
# p forty_two
 order_array = []
 order_array << monty_python
 order_array << forty_two
#  p order_array
 # _______________________________________________________________________________________
class CarOrderer < Orderer
    attr_accessor :ssn, :deposit_type, :location
    def initialize(shop, user, order)
        super(shop, user, order)
    end
    def set_background_info(ssn, deposit_type, location)
        @ssn = ssn
        @deposit_type = deposit_type
        @location = location
    end
end

hesinberg_mobile = CarOrderer.new("Pontiac", "Walter White", "Aztec")
# hesinberg_mobile.get_order
hesinberg_mobile.set_background_info(123456789, "cash", "ABQ")
hesinberg_mobile.user = "J pinkman"
hesinberg_mobile.location = "random desert"
order_array << hesinberg_mobile
# p order_array

# _______________________________________________________________________________________

class FoodOrderer < Orderer
    def initialize(shop, user, order)
        super(shop, user, order)
    end
    def order_number_1(entree, side, drink)
        @entree_one = entree
        @side_one = side
        @drink_one = drink
    end
    def order_number_2(entree, side, drink)
        @entree_two = entree
        @side_two = side
        @drink_two = drink
    end
    def get_order_details
        get_order
        p @order_string + "An order for #{@entree_one}, and #{@entree_two}"
    end
end

jj = FoodOrderer.new("Jimmy Johns", "Austin", "Food")
jj.order_number_1("No.7, no mayo", "Chips", "coke")
jj.order_number_2("No.17 Ultimate Porker", "Chips: Salt Vinegar", "Sprite")
jj. get_order_details