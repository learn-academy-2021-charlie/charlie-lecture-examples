# Introduction to Ruby 7/28/2021

# Creating a file in ruby - extension .rb
# ruby-intro.rb
# $ ruby ruby-intro.rb

# Dynamic, scripting language, open source, oop, general purpose

# Matz - MINASWAN, Matz is nice and so we are nice.

# Dynamic - Ruby doen't care what data types are held by a variable
# General purpose scripting language - performs logical operations
# Interpreted - read line by line with an interpretor
# Open source - the code is available online for free and be modified by anyone
# OOP - object-oriented programming


# Check your Ruby version: ruby -v
# IRB - interactive ruby, the Ruby shell on that can be accessed in the terminal
# $ irb
# Getting out of the shell and back to the terminal: $ exit

# Data Types
# Integers - add, subract, multiply, divide, exponents, modulo
# Floats - separate class in Ruby, if you want a float you have to introduce a float to the program
# Strings - single quotes around characters, exception is the use of punctuation
# Boolean
  # - equality operators, only the == single Ruby doesn't support type coersion
  # - relational operators - < > <= >= !=
  # - Logical operators && ||
# Nil - equal to nothing else in the program
# Symbol - unique key

# Variables
# No variable declaration
# Casing convention - snake_case
my_name = 'sarah'
# String interpolation:
"Hi, my name is #{my_name}"

# Most built in methods are accessors
# Built in methods:
my_name.length
# => 5
my_name.upcase
# => "SARAH"
my_name.capitalize
# => "Sarah"
my_name.reverse
# => "haras"
my_name.delete'h' # or my_name.delete('h')
# => "sara"
my_name.include?'s' # question marks at the end of methods will return a Boolean value
# => true

# Checking what class something belongs to:
my_name.class
# => String
3.class
# => Integer
4.0.class

# To String
4.to_s

# To Integer
'9'.to_i


# Log information to the terminal:
# puts 'hello'

# print 123
# print 'hello'
# print true

# p 'hello'


# Arrays

my_nums = [2, 3, 4, 5]
# puts my_nums (puts all the content)
# p my_nums.length
# p my_nums[2]
# p my_nums[-2]
# p my_nums.first
# p my_nums.last
# my_array_reversed = my_nums.reverse
# p my_array_reversed
# p my_nums.reverse.first; p my_nums

# Mutators in Ruby
# p my_nums.reverse!
# p my_nums

my_nums[2] = 99
p my_nums

# Shovel operator - like .push
my_nums << 22
p my_nums
