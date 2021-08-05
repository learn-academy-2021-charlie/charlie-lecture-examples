# Commands 
 ### make the app
$ rails new video_game -d postgresql -T
$ cd video_game
$ rails db:create
$ rails g model VideoGame title:string
$ rails db:migrate
$ rails g migration add_column_to_table
---
$ rails db:migrate

 ### torubleshooting steps
 $ rails db:drop
 $ rails db:create

 # Change Method
 add_column :table_name, :column_name, :datatype
 rename_column :table, :old_column, :new_column
 remove_column :table_name, :column_name