# My Movie Blog

My Movie Blog is a simple web application that allows users to discover popular movies and search for their favorites. It is powered by the TMDB API for fetching movie data.

## Screenshoot
![Movies Sample](https://github.com/rimansingh/myMovieBlog/blob/main/images/sample.png)

## Features

- Discover Popular Movies: View a list of popular movies sorted by popularity.
- Search Movies: Search for movies by title.
- Dynamic Content: Content is dynamically loaded from the TMDB API.
- Responsive Design: The application is designed to work on various devices and screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- TMDB API
- Docker

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rimansingh/myMovieBlog.git
cd myMovieBlog
```
    
2. Open the index.html file in your web browser.

## Build and run the Docker container, passing your TMDB API key as a build argument

```bash
docker build --build-arg API_KEY=your_actual_api_key -t mymovieblog .
docker run -d -p 80:80 mymovieblog
```

1. Open your web browser and navigate to http://localhost to view the application.

## Configuration

Before running the application, obtain an API key from TMDB and update the `api.js` file with your API key.

```bash
// api.js
export const API_KEY = "YOUR_API_KEY";
```

## Git commands

```bash
```bash

# Initialize the Git repository (if not already initialized)
git init

# Add all files to the staging area
git add .

# Commit the changes with a message
git commit -m "Add comment"

# Configure your Git user information
git config --global user.email "your-email"
git config --global user.name "your-username"

# Check existing remotes
git remote -v

# If the URL for 'origin' is incorrect, update it
git remote set-url origin https://github.com/rimansingh/myMovieBlog.git

# Or, if you need to remove and re-add the remote
git remote remove origin
git remote add origin https://github.com/rimansingh/myMovieBlog.git

# Push the changes to the remote repository
git push -u origin main

```
```

## Contributing

Contributions are welcome! If you'd like to contribute to My Movie Blog, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/new-feature).
6. Create a new Pull Request.
