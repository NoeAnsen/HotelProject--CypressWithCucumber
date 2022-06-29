Feature: Hotel Page


Scenario: Go to Reserve
Given A User with the App URL
When Go to the Reserve part
Then Can access that part

Scenario: Book a hotel
Given A user that choose a room
When Complete all the fields
And Submit the reservation
Then The room is booked.


