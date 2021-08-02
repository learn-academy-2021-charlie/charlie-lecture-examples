# Ruby Hashes 8/2/2021


# Ruby class called Hash

# 1) Define keys and values
# learn_staff = {marketing: 'TJ', career: 'Jake'}
# p learn_staff

# => {:marketing=>"TJ", :career=>"Jake"}
# symbol - :symbol_name, or as a key in a hash
# => hash rocket, seperates keys and values

# 2) Create a new instance of class Hash
# content = Hash.new
# p content


# READ
learn_staff = {marketing: 'TJ', career: 'Jake'}
# Read the entire hash:
# p learn_staff
# Read specific values:
# p learn_staff[:marketing]

# CREATE
# Create new key values pairs inside the hash:
learn_staff[:enrollment] = 'Kumba'
# p learn_staff
learn_staff[:boss_lady] = 'Chelsea'
# p learn_staff

# UPDATE
learn_staff[:boss_lady] = 'Chelsea K'
# p learn_staff

# DELETE
learn_staff.delete(:career)
# p learn_staff


# Module - a grouping of like things with similar properites

# Enumerable - grouping of things that are iterable, arrays, ranges, hashes

# Duck Typing - grouping methods by their action rather than defining particular data types

# Iterate on a hash

# learn_staff.each do |key, value|
#   p "#{value}'s job is #{key}"
# end


def my_coworkers hash
  hash.map do |key, value|
    "My coworker is #{value}"
  end
end
p my_coworkers learn_staff
