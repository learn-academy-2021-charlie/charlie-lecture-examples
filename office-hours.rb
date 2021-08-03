# Office Hours Notes 7/29/2021

# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.


# create a method mult5
# takes an array as a parameter
# iterate - each
# mult all the values by 5
# store them in a new array
# return the array

# def mult5 array
#   new_array = []
#   array.each do |number|
#     new_array << number * 5
#   end
#   return new_array
# end
# p mult5 [3, 4, 5, 6]




# create a method mult5
# takes an array as a parameter
# iterate - map
# mult all the values by 5
# return the array


# def mult5 array
#   array.map do |value|
#     value * 5
#   end
# end
# p mult5 [5, 6, 7]

# def mult5 hello
#   hello.map {|banana| banana * 5}
# end
# p mult5 [5, 6, 7]



# Write a method that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.

# create a method - fizz_buzz
# don't need a paramter
# range 1..100
# iterate - each
# conditional - %5, %3, %3 && %5


# def fizz_buzz
#   (1..100).each do |num|
#     if num % 5 == 0 && num % 3 == 0
#       p 'fizzbuzz'
#     elsif num % 5 == 0
#       p 'buzz'
#     elsif num % 3 == 0
#       p 'fizz'
#     else
#       p num
#     end
#   end
# end
# fizz_buzz



# --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.


# Example input: 6
# Expected output: [1, 1, 2, 3, 5, 8]

# Example input: 10
# Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


# create a method fibonacci
# take in a number
# starter variable
# define index1
# define index2
# while pass the number to the while as a condition
# while << to the array
# update the indexes
# return array

# def fibonacci number
#   fib_array = [1, 1]
#   index1 = 0
#   index2 = 1
#   while index2 < number-1
#     fib_array << fib_array[index1] + fib_array[index2]
#     index1 += 1
#     index2 += 1
#   end
#   return fib_array
# end
# p fibonacci 5

# def fibonacci number
#   fib_array = [1, 1]
#   index1 = 0
#   index2 = 1
#   (3..number).each do |value|
#     fib_array << fib_array[index1] + fib_array[index2]
#     index1 += 1
#     index2 += 1
#   end
#   return fib_array
# end
# p fibonacci 5


# As a developer, I can use an enumerable method to return information about all of my_phone's applications.


my_phone = { twitter: 'people with bad opinions', gmail: 'check email'}

def get_info hash
  hash.map do |key, value|
    "#{key}: #{value}"
  end
end
p get_info my_phone
