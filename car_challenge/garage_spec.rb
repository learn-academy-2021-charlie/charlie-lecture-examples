require 'rspec'
require_relative 'garage'
require_relative 'car'

describe 'Garage' do
    it 'has to be real' do
        expect{ Garage.new }.to_not raise_error
    end
    it 'can hold a collection of cars' do
        my_garage = Garage.new
        # shovel opperator
        my_garage.cars << Car.new
        expect(my_garage.cars.length).to eq 1
        expect(my_garage.cars).to be_a Array
    end
end

# gems
# rspec
# require
# AAA
# TDD - red green refactor
# describe do
# it do
# expect that check data
# expect that check datatypes
# expect that check behavior
# Testing interaction between files