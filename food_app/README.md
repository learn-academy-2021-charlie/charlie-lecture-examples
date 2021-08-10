# Set Up Commands
$ rails new app_name -d postgresql -T -G
$ cd food_app
$ rails db:create
### A new rails Generate command
$ rails g controller Food
$ rails s

# Overview
- request & repsonse cycle
- Route
    - Http verb
    - Url
    - controller
    - method
- Controllers
    - generate command
    - Methods invloved
- View
    - how to create a view
    - how to use HTML ERB
    - linking between pages

### controller
    def name_of_method
     thing method should do
     end

### config/routes.rb
 verb '/route' => 'controller#method'
 root_to (Please look that up)

### the view
This hangs people up
we need to create the view associated with each method name --
(ex.
app/views/controller_name/method_name.html.erb)


<html></html>
ruby <%= %> <% %>

# methods and instance variables
 def method_names
 @variable
 end


# link_to

/views/controller/home.html.erb
<%= link_to "Method1", "/method1" %>
<%= link_to "Other method", "/other_method" %>
____________________________________________
/views/food/method1.html.erb
<%= link_to "Home", "/" %>
____________________________________________

# "each do" in HTML ERB
app/controllers/controller_name

def method
    @choices = ["value", "value", "value"]
end
_____________________________
app/views/method.html.erb

<ul>  
<li>
<% @variable.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>

# Overview
1. made an app
2. created a db
3. generated a controller
4. set up our controller
5. set up some routes
6. bounced back and fourth a bit making methods and routes
7. made a couple of views
8. mapped our controller to our views
9. we set up instance variables in our methods that our views can call on
10. we linked our views together



# Params

Params are the way to pass additional information into the controller methods
$ rails g controller Italian


Passing params directly in the URL:
```ruby
def pasta
  @pasta_type = params[:pasta_order]
end
```
get '/pasta' => 'italian#pasta'
http://localhost:3000/pasta?pasta_order=ravioli
Parameters: {"pasta_order"=>"ravioli"}

Expecting parameters in route:
```ruby
def pasta
  @pasta_type = params[:pasta_order]
end
get '/pasta/:pasta_order' => 'italian#pasta'
```
Pulling the value from the params hash

Params are always a string:
Parameters: {"number"=>"3"}
