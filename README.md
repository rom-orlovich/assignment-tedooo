# Tedooo Assignment App:

## About my project:
A web application that display the Tedooo's feed page.
This application was part of home assignment for Front-End postition in Tedooo.

## Technologies:

- **[React](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**


## Packages:

- **Front-end** :

  - [Redux RTK & Query](https://www.npmjs.com/package/@reduxjs/toolkit) - For state and data-fetching management.
  - [React Router](https://www.npmjs.com/package/react-router-dom) - For routes management.
  - [Material UI](https://www.npmjs.com/package/@mui/material) - for UI components
  - [Date-fns](https://date-fns.org/)- For date manipulation.
  - [react-infinite-scroller](https://github.com/danbovey/react-infinite-scroller) - For feed infinte scrolling.
  - [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - For tracking over the posts that the user hasn't watched yet. 
 


## Installation

1. **Clone the repo**
   ```
   git clone git@github.com:rom-orlovich/tedooo-assignment.git
   ```
2. **Install all the dependencies**
   ```
   npm run ci
   ```
3. **Run Client**

   ```
   npm run start
   ```
4. **Go to http://localhost:3000 and have fun**!

## Main Features:
1. **Fetching Posts From Tedooo's API** - Fetching and displaying posts from Tedooo's api.
2. **Infinte Scrolling** - Scrolling down until all the posts will display. Each scroll event new 6 posts will be display. 
3. **Autocomplete Search Input** - Suggests a list of post's title options from the Tedooo's API. \
The user can search post by title and display the post it on the feed.
  
 
## Images: 
### Trainer's Profile
<img alt="trainer profile" src="./readme-images/trainer_profile.png" width="600" hight="600">

