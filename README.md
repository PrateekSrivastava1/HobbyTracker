# Hobby Tracker Application

This Hobby Tracker Application is designed to help users track their hobbies by maintaining a calendar with statuses for each day.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **Calendar View:** Display a week or month view with the ability to mark dates as checked (Green color), crossed (Red color), or zero(white).
- **Week and Month View:** Switch between week and month views to see a detailed or broader perspective of the calendar.
- **Previous and Next:** Go to next and previous dates according to selected view, if view is week the it will shift 7 days otherwise it will shift month dates.
- **Add and Update Status:** Ability to add/update the status of a particular date.
- **Create New Hobby:** Add a new hobby to track.

## Installation

1. Clone the repository: `git clone git@github.com:PrateekSrivastava1/HobbyTracker.git`
2. Navigate to the project directory: `cd HobbyTracker`
3. Install dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Access the application through a web browser at `http://localhost:3000`.

## Technologies Used

- Node.js
- Express.js
- Mongoose (for database interaction)
- HTML/CSS/JavaScript
- EJS (Embedded JavaScript templates)

## Folder Structure

```plaintext
hobbyTracker/
|__ node_modules/
|__ src/
    |__ config/
    |__ views/
    |__ hobby/
        |__ controller/
        |__ repository/
        |__ routes/
        |__ schema/
|__ .env
|__ index.js
|__ server.js

```

```

```
