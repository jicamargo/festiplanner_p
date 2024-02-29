# README

# FESTIPLANNER

## Description
This application is a powerful tool to help you plan your next festival. It allows you to create a festival, add bands to it, and create a schedule for the festival. It also allows you to create a user account, and add bands to your favorites list.
You can create venues, and add them to your festival, and also add bands to the venues. You can also create a list of bands you want to see, and add them to your festival schedule.
You can configure every venue with the number of rows and seats, and add tickets to the festival, and sell them to the users.
The application controls the number of tickets sold, and the number of tickets available for each venue, updates on the fly, and allows you to see the number of tickets sold and the number of tickets available for each venue.

* Ruby version
  - 3.0.2

* System dependencies

* Configuration

* Database creation
  - Run the following commands to create the database and run the migrations:
  ```rails db:create```
  ```rails db:migrate```

* Database initialization
  - Run the following command to seed the database with some initial data:
  ```rails db:seed```

* How to run the test suite
  - Run the following command to run the test suite:
  ```rspec```

* Services (job queues, cache servers, search engines, etc.)
  - Redis: This application uses Redis to allow ActionCable (websockets) to work properly. 
  To run Redis on Docker, use the following command:
  ```docker run --rm -it -p 6379:6379 redis:latest``` 

* Deployment instructions
  - To run the application, use the following command:
  ```rails s```

* Author
  - JIC Software - Jorge Camargo
  - [GitHub](https://github.com/jicamargo)
  - [LinkedIn](https://www.linkedin.com/in/jorgecamargog/?locale=en_US)
