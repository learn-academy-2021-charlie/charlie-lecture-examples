# Ruby Classes 7/30/2021

# Ruby - everything is an object, everything is an instance of a class

# p 4.class
# Integer

# p true.class
# p 5.0.class
# p nil.class

# Defining a class:
# class NetflixRipOff
# end

# Calling .new which creates an object from a class
# Many unique objects
# p NetflixRipOff.new
# p NetflixRipOff.new
# p NetflixRipOff.new


# Getting and Setting data
# class NetflixRipOff
#   def set_title title
#     @title = title
#   end
# end
# Creating a method that sets data and assigns it to an instance varibale

# class NetflixRipOff
#   def set_info title, run_time
#     @title = title
#     @run_time = run_time
#   end
# end

# Error - (given 1, expected 2) - need to update the num of arguments/parameters

# Getters:
# class NetflixRipOff
#   def set_info title, run_time
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
# end
#
#
# tv = NetflixRipOff.new
# tv.set_info 'Charlie class learning adventure', '30min'
# p tv.get_title
# carbon = NetflixRipOff.new
# carbon.set_info 'Altered Carbon', '45min'
# p carbon


class NetflixRipOff
  def initialize title, run_time
    @title = title
    @run_time = run_time
    @watched = false
  end
  def get_title
    @title
  end
  def done_on_watched_it
    @watched = true
  end
  def show_info
    if @watched
      "You have watched the show called #{@title} which is #{@run_time}."
    else
      "You have not watched the show called #{@title} which is #{@run_time}."
    end
  end
end


# tv = NetflixRipOff.new 'Charlie class learning adventure', '30min'
# p tv.get_title
carbon = NetflixRipOff.new 'Altered Carbon', '45min'
p carbon.show_info
p carbon.done_on_watched_it
p carbon.show_info
