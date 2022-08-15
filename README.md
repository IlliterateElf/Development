# Development
## Current projects:
**my-favorite-movies** (Started 08/14/2022)

### Intro
A website where users will be able to choose their 100 favorite movies.

### Architecture
A React frontend communicating with an API from TMDB for the movies and a Postresql database for user account data.

### Website Structure
**NavBar** is always in view to jump around the website. Search is easily available in order to search for a film at any time. Tabs will be Home, Account/Login, My
Favorites, and Explore

**Home** will display a random set of movies at first. Eventually, I would like to make the choices more tailored to the user. Perhaps by having them pick their favorite genres and then basing this information off of that. Obviously, when a user is logged in this would mean that their results are much more tailored to them. However, I would be interested in implementing this for when a user is not logged in as well.

**Account** is where the user can perform basic functions such as change password and delete account.

**Login** is self explanatory. However, I would like to persue trying to email a user their password reset should they forget their password.

**My Favorites** is where a user will be able to go to see the films that they've already favorited. As well, they will be able to rank their films there, too.

**Explore** is where the user will be able to search for movies to add to their lists. Searchable by title and genre for now.

### Design Process
**08/14/2022**

Currently laying out the core of the website and finishing the initial README to assist in getting an idea of where I want the website to be. Planning on reviewing the API of TMDB more before building any more webpages, however I will finish creating the NavBar tabs and at least get all of the routing functional before reading the API.

After reading the API, it was clear that discover would be the call that I would want. I decided that it was perfect for the Home page. I also saw during testing that I would need the configurations call as well to get the current valid parameters for picture sizes. For now, I decided to have an api call at every load of the Home page which gets the latest trending films and places them on the home screen. They are placed by a new MovieItem.jsx which is mapped from the movies.results array of the converted movies from the API call. Also, for now the picture size is hardcoded instead of loaded from the configuration JSON. It is entirely possible to load it with the config I have in place, but for testing purposes it was easier to hardcode it. I will use the configuration JSON the next chance I get.
