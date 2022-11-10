# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Routes

| Method        | Path                      | Purpose                                        |
| ------------- | ------------------------  | ---------------------------------------------  |
| GET           | /                         | Home Page                                      |
| GET           | /places                   | Places index page                              |
| POST          | /places                   | Create new place                               |
| GET           | /places/new               | Form page foe creating new content             |
| GET           | /places/:id               | Details a particular place                     |
| PUT           | /places/:id               | Update a Particular Place                      |
| GET           | /places/:id               | Form page for editing an existing place        |
| DELETE        | /places/:id               | Delete a particular place                      |
| POST          | /places/:id/rant          | Create a rant (comment) about a place          |
| DELETE        | /places/:id/rant/:rantId  | Delete a rant (comment) about a place          |
| GET           | &                         | 404 page (matches any route not defined above) |



This will be a service-side rendering app