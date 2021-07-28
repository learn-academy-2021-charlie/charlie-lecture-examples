# Conditionals
# if
# else
# elsif
# end
# string interpolation 

my_num = 9
my_name = 'Learn Student'

if my_num < 10
    puts 'Your number is less than ten'
else
    puts 'Your number is greater or equal to ten'
end

if my_num < 10 && my_name == 'Learn Student'
    puts 'Your number is less tha ten and your name is Learn Student'
else
    puts 'your name is either greater than 9 or your name is not Learn Student'
end

my_num = 99

if my_num < 10
    puts "#{my_num} is less than ten"
elsif my_num >= 10 && my_num < 100
    puts "#{my_num} is greater than or equal to 10 and less than 100"
else
    puts "#{my_num} is greater than 100"
end

my_num = 21

 unless my_num > 20 
    puts "#{my_num} is not greater than 20"
 else
    puts "#{my_num} is greater than 20"
 end

#  side note, "unless" replaces the "if"