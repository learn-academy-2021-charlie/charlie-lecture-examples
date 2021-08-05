# Active Record Intro 8/4/2021

ORM - Object Relational Mapping, translators from two languages that don't talk to each other
Active Record is the ORM for Rails


To create table:
1) Rails generate command
  - $ rails generate model ....
  - name of the table (PascalCase)
  - name of the columns - day, date, event
2) AR data types
  - data type for each column
  - string, text, boolean, integers, date, datetime, time

$ rails generate model Schedule day:string event_date:date event:string
- model class file
- migration - which makes changes to the db

$ rails db:migrate


Interacting with the db:
- rails c

## CRUD Actions

### READ
- Display information
All - Schedule.all  
One thing - Schedule.find(2), Schedule.first, etc  
A set of particular things - Schedule.where(day: 'Tuesday')  

### CREATE
- Create/post - adding information
Schedule.create(day: 'Tuesday', event_date: '2021-08-03', event: 'Yoga')

### UPDATE
- Patch/put - changing existing information  
yoga = Schedule.find 1  
yoga.update event_date: '2021-08-10'

### DELETE
- Delete - remove items  
ama = Schedule.find 2  
ama.destroy  
