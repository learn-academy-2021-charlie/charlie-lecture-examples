class Car
attr_accessor :make
attr_reader :color, :speed

    def initialize color='Unpainted' 
        @color = color
        @speed = 0
    end
    def accelerate num
        @speed += num
    end
    def decelerate num
        if @speed >= num
            @speed -= num
        else
            @speed = 0
        end
    end
end