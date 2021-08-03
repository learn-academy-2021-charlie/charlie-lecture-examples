require'rspec'
require_relative 'car'

# TDD
# AAA
    # ARRANGE - inputs and targets. Object or special setting? create/ prep a DB? Does it need ot log in to an app?
    # ACT - focused on behavoir: log in, interactions, calling function webpage
    # ASSERT - outcomes. goodness or badness of repsponses. sometimes simple, sometimes complex - always passing or fail 

    # Some tests will lack one of the above depending oon the situation as devs. Thats okay this is a tool for us to use. The best thing is to try to find ways that it is working so we as developers can keep track of what we are testing vs. what we want to be testing. 

describe 'Car' do
    it 'when a car is instantiated' do
        #Assert #Act
        expect{ Car.new }.to_not raise_error
    end
    it 'has a make' do
        # Arrange
        rauls_car= Car.new
        # Act
        rauls_car.make = 'Toyota'
        # Assert
            # assertion on data type
        expect(rauls_car.make).to be_a String
            # assertion on the data specifics
        expect(rauls_car.make).to eq 'Toyota'
    end
    # raul's fav car color is grey
    it 'can be unpainted by default' do
        # Arrange
        my_car = Car.new
        # Assertion
        expect(my_car.color).to eq 'Unpainted'
        expect(my_car.color).to be_a String
    end
    it 'can be painted a color' do
        #Arrange #Act
        rauls_car = Car.new('Phantom Grey')
        # Assert
        expect(rauls_car.color).to be_a String
        expect(rauls_car.color).to eq 'Phantom Grey'
    end
    it 'has a speed' do
        amandas_car = Car.new('Tram Green')
        expect(amandas_car.speed).to be 0
        expect(amandas_car.speed).to be_a Numeric
    end
    it 'can accelerate by an amount' do
        # Arrange
        my_car = Car.new
        # Act
        my_car.accelerate 5
        # Assert
        expect(my_car.speed).to be 5
        #Act
        my_car.accelerate 90
        #Assert
        expect(my_car.speed).to be 95
    end
    it 'can decelerate by an amount' do
        # Arrange
        todds_car = Car.new
        # Act
        todds_car.accelerate 20
        # Assert
        expect{ todds_car.decelerate 5 }.to change{ todds_car.speed }.from(20).to(15)
    end
    it 'decelerate past zero sets to zero' do
       # Arrange
       todds_car = Car.new
       # Act
       todds_car.accelerate 20
       # Assert
       expect{ todds_car.decelerate 50 }.to change{ todds_car.speed }.from(20).to(0)
    end
end