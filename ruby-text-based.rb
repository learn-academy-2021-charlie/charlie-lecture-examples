# Text-based Game 7/29/2021

# Warmup Prompt
# Create a method that takes in an array of words and returns all the words that start with a particular letter. Ex) Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].

# Create a method - given_letter
# Parameter - array, letter
# Iteration - select
# Compare the zeroth index of the string with the letter

def given_letter(array, letter)
  array.select do |value|
    value.upcase[0] === letter.upcase
  end
end
# p given_letter ['Apple', 'Avocado', 'Banana', 'Mango'], 'a'
# p given_letter ['Apple', 'Avocado', 'Banana', 'Mango'], 'm'
# p given_letter ['Apple', 'Avocado', 'Banana', 'Mango'], 'A'

# puts 'Please enter you name:'
# name = gets.chomp
# p name
#
# puts 'Please enter you age:'
# age = gets.chomp.to_i
# p age


# Checkout ASCii art https://www.asciiart.eu/nature


def start_game
  'Here is the set up for our story. Please enter your name:'.each_char do |value|
    putc value
    sleep 0.05
  end
  # creates a return line
  puts
  # is the return value from the function - implicit return
  gets.chomp
end

# calling the function and saving the return value of the function in a variable
# can be passed into another function as an argument
player_name = start_game

def game_intro name
  # using enter in your string will create line breaks in the terminal
  "Welcome, #{name} it is time to pick your fate.
  1) Option one
  2) Option two
  3) Option three
  Type the number below:".each_char do |value|
    putc value
    sleep 0.05
  end
  puts
  gets.chomp
end

# variable is calling the function and holding the return value of the function
selection = game_intro player_name

def option_one
  'Here is the first option.'.each_char do |value|
    putc value
    sleep 0.05
  end
end

def option_two
  'Here is the second option.'.each_char do |value|
    putc value
    sleep 0.05
  end
end

def option_three
  'Here is the third option.'.each_char do |value|
    putc value
    sleep 0.05
  end
end


def start_path num
  if num.to_i == 1
    option_one
  elsif num.to_i == 2
    option_two
  elsif num.to_i == 3
    option_three
  end
end

path = start_path selection
