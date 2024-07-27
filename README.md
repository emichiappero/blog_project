# React Blog App

This is a React-based blog application that uses [the Dummy API](https://dummyjson.com/docs/posts) for fetching blog posts and user data. It includes features such as viewing posts, filtering by tags, and a protected user list view.

## Features

- View blog posts with images, tags, and author information
- Click on a post to view its details and comments
- Filter posts by tags
- Protected user list view (requires authentication)
- Google Sign-In for authentication

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory with the following variables:

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

4. Run `npm start` to start the development server

## Technologies Used

- React
- React Router
- Bootstrap
- Axios
- Firebase (Authentication and Firestore)

## Design Inspiration

The UI design for this project was inspired by [[Bootstrap Card Example](https://bootstrapbrain.com/demo/components/blogs/blog-2/)].

## Deployment

This project is deployed on GitHub Pages. You can view the live version [here](https://emichiappero.github.io/).

## Future Improvements

- Implement pagination for posts and user list
- Add a search functionality
- Improve error handling and loading states
