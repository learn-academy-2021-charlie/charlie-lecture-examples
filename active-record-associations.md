# Active Record Associations 8/5/2021


$ rails new ar-associations -d postgresql -T
$ rails db:create
$ rails g model Cohort name:string year:string
$ rails g model Student name:string cohort_id:integer

- cohort_id - creating the connection between cohort and student, foreign key
- foreign key - always lives on the belongs_to side

- $ rails db:migrate

Creating a has_many - belongs_to relationship

class Cohort < ApplicationRecord
  has_many :students
end


class Student < ApplicationRecord
  belongs_to :cohort
end


Adding data:
- charlie = Cohort.first
- charlie.students.create name: 'Galadoe'

Looking at all the data that belongs to a particular instance
charlie.students
