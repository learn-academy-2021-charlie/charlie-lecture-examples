# Rails Validations 8/6/2021

Creating a new app:
- $ rails new validations -d postgresql -T

Adding RSpec:
- $ bundle add rspec-rails
- $ rails g rspec:install


Creating the model:
- $ rails g model PaintingSupply medium:string color:string
- $ rails db:migrate


Validations:  
app/models/painting_supply.rb
```
class PaintingSupply < ApplicationRecord
  validates :medium, :color, presence: true
  validates :medium, length: { minimum: 3 }
  validates :medium, uniqueness: true
end
```

Model specs:
spec/models/painting_supply_spec.rb
```
require 'rails_helper'

RSpec.describe PaintingSupply, type: :model do
  it 'is valid with valid attributes' do
    bluecrayon = PaintingSupply.create(medium: 'crayon', color: 'blue')
    expect(bluecrayon).to be_valid
  end
  it 'is not valid without a medium' do
    paint = PaintingSupply.create(color: 'periwinkle')
    expect(paint.errors[:medium]).to_not be_empty
  end
  it 'is not valid without a color' do
    paint = PaintingSupply.create(medium: 'watercolor')
    expect(paint.errors[:color]).to_not be_empty
  end
  it 'is not valid if less than 3 characters' do
    paint = PaintingSupply.create(medium: 'p', color: 'fushia')
    expect(paint.errors[:medium]).to_not be_empty
  end
  it 'is not valid if not unique' do
    paint1 = PaintingSupply.create(medium: 'oil paint', color: 'lemon')
    paint2 = PaintingSupply.create(medium: 'oil paint', color: 'lemon')
    expect(paint2.errors[:medium]).to_not be_empty
  end
end
```
