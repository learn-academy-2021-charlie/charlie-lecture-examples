# Active Record Associations 8/5/2021


- $ rails new ar-associations -d postgresql -T
- $ rails db:create
- $ rails g model Cohort name:string year:string
- $ rails g model Student name:string cohort_id:integer
- cohort_id - foreign key, creating the connection between cohort and student
- foreign key - always lives on the belongs_to side
- $ rails db:migrate

Creating a has_many - belongs_to relationship

app/models/cohort.rb
```
class Cohort < ApplicationRecord
  has_many :students
end
```

app/models/student.rb
```
class Student < ApplicationRecord
  belongs_to :cohort
end
```

Adding data in Rails c:
- Cohort.create name: 'Charlie', year: '2021'
- Cohort.create name: 'Bravo', year: '2021'
- Cohort.all
- charlie = Cohort.first
- charlie.students.create name: 'Galadoe'
- charlie.students.create name: 'Chris'
- b = Cohort.where(name: 'Bravo').first
- b.students.create name: 'Erik'
- Cohort.all
- Student.all

Looking at all the data that belongs to a particular instance:
- charlie.students
