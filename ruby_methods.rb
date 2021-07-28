# Goal
# CREATE a simple method using Ruby syntax and name 
# PASS the me thod an argument
# CALL the methid and log the outcome

# Key Words
    # def - name
    # end

# Key Term
    # implicit return
    # code block

    # def greeter
    #    puts "Hello World"
    # end

    # greeter

    def greeter2 name
        "Hello, #{name}"
    end

    puts greeter2 'LEARN student'
    puts greeter2 'RUBYROD'

    # def sum_of(num1, num2)
    #     num1 + num2
    # end

    # p sum_of(1, 6)
    # p sum_of 1, 6

    def rock_paper_scissors(player1, player2)
        if player1 == player2
            true
        else
            "the game is being played"
        end
    end

  p rock_paper_scissors("rock", "rock")

#   Wrap Up
    # def name
    # code block
    # end

    # Ruby has implicit returns
    # Consistent argument / parameter syntax
