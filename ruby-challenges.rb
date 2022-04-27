# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a method - returned 
# Parameter - array, letter
# Filter through the array using the .select method 
# Determine if the value in the array includes the letter using the .includes? to determine if it is true
# Return the array with the elements containing the letter 

def returned (array, letter) 
    array.select { |value| value.include?(letter) }
end 

p returned beverages_array, letter_o
p returned beverages_array, letter_t

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Create a method - added_up
# Parameter - array 
# Use the .sum method to add the elements in the array 
# Return the sum total 

def added_up array 
    array.sum
end 

p added_up nums_array1
p added_up nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Create a class Bike 
# Add the structure for a Ruby Class
# Add parameters to plug-in

class Bike 
    attr_accessor :model
    def initialize(model, current_speed=0)
        @model = model
        @wheels = 2
        @current_speed = current_speed
        def bike_info 
            "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
        end 
        def pedal_faster new_speed
            @current_speed += new_speed
        end 
        def brake brake_speed
            @current_speed = @current_speed - brake_speed
            if @current_speed.positive?
                @current_speed 
            elsif  @current_speed.negative?
                @current_speed = 0
            end
        end 
    end
end 

# Create a method to hold the input in a string interpolation

my_bike = Bike.new 'Trek'
p my_bike.bike_info

# Actual Output: "The Trek bike has 2 wheels and is going 0 mph"
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Create a method to hold the @current_speed updated with increase
# Create a method to hold the @current_speed updated with decrease, have a conditional to account for negative integers. 

my_bike = Bike.new 'Trek'
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)


# Actual Outputs: 
# 10
# 28
# 23
# 0
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
