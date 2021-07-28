# Ruby Blocks and Iterables 7/28/2021

# Iteration - performing logic over and over until a condition is met

# While - takes a condition that is true and will execute until the condition is false

# num = 1
# while num <= 10
#   p num
#   num += 1
# end

# num = 1
# nums_array = []
# while num <= 10
#   nums_array << num
#   num += 1
# end
# p nums_array


# In Ruby there are lots of methods for iteration. Methods can get passed anonymous functions, in Ruby is called a block
# Blocks - can be defined with the keywords do/end or with {}

# Times - executes a block a certian number of times

# Block defined with do/end:
# 5.times do
#   p 'hello'
# end

# Block defined with {}:
# 5.times {p 'hello'}

# num = 10
# num.times do
#   p 'hello'
# end


# Each - an iterator that works on a list of items, runs the length of the array, can pass info into the block using pipes

# nums = [3, 4, 5, 6, 7]
# nums.each do
#   p 'hello'
# end
# nums.each do |value|
#   p value * 3
# end


# Ranges - objects with an starting and ending point that fills in the content between
# my_range = 1..40
# my_range = 'a'..'g'


# my_range.each do |value|
#   p value
# end


# Using a range to populate an array
# p Array(1..10)
# p (1..10).to_a


# Map - iterator, return an array, same length of the thing it is acting on

# Mapping over a range and returning an array of each num multiplied by 3:
nums = 1..10
mapped_ranged = nums.map do |value|
  value * 3
end

# Mapping over a range and returning either 'even' the number:
mapped_ranged = nums.map do |value|
  if value % 2 == 0
    'even'
  else
    value
  end
end

# Same as above but using the Ruby even method:
mapped_ranged = nums.map do |value|
  if value.even?
    'even'
  else
    value
  end
end

# Wrapping the logic in a custom method:
def even_or_odd array_of_nums
  array_of_nums.map do |value|
    if value.even?
      'even'
    else
      value
    end
  end
end
p even_or_odd 1..10
p even_or_odd 1..20
p even_or_odd [2, 3, 4, 5]


# Select - iterator, has a built in if statement that will return a subset of the array (or range)

# Create a method that takes in an array of numbers and returns an array of only odd numbers:
def only_odds iterable
  iterable.select do |value|
    value.odd?
  end
end

# Playing around with negating a Ruby method:
def only_odds iterable
  iterable.select do |value|
    !value.odd?
  end
end
p only_odds 1..10
