# Frontend Projects Collection

## 1. Sign Up Form

- A user registration form with real-time validation for each field.

### Validates that all fields are filled before submission.

  - **Username:** Must be at least 3 characters and no more than 10 characters.

  - **Email:** Must be in a valid email format (e.g., user@example.com).

  - **Password:** Must be at least 6 characters.

  - **Confirm Password:** Must match the password field. Displays error messages if fields are invalid or empty.

## 2. Movie Seat Selection

- Allows users to select a movie and choose seats from a seating chart.

### Features:
  - Movies are selectable via a dropdown, and their ticket prices are displayed.
  - Seats are color-coded to indicate availability (available, occupied, selected).
  - When a seat is selected, its color changes, and a summary below shows the number of seats selected and the total cost.
  - Changing the movie updates the ticket price dynamically.
  - All selections are saved to local storage, so the data persists on page reload.

## 3. Custom Video Player
A custom video player with the following features:

### Features:
- **Video and Cover Image:** The video is initially stopped, and a cover image is displayed.
- **Play/Pause Button:** Clicking the play button starts the video and turns it into a pause button. Clicking the pause button will pause the video.
- **Stop Button:** Clicking the stop button resets the video to the beginning (time 0) and stops it.
- **Progress Bar:** The progress bar updates as the video plays. Users can click anywhere on the progress bar to jump to that point in the video.
- **Video Time Update:** The current video time is updated in real-time to show how much time has been played and how much time remains.

## 4. Exchange Rate Calculator
This project allows users to convert an amount from one currency to another by selecting two countries and using their respective exchange rates fetched from an API.

### Features:
- **Country Selection (Top and Bottom):**
  - A dropdown is used to select the first country, and next to it, there's an input box to enter the amount.
  - A second dropdown is used to select the target country, and its input box will automatically update the amount according to the exchange rate from the first country.
  
- **Swap Button:**
  - A button allows users to swap the positions of the two selected countries.
  - When clicked, the countries and their corresponding amounts are swapped.
  - A text shows the exchange rate between the two currencies, e.g., "1 USD = 278.5137 PKR."

- **Dynamic Conversion:**
  - The exchange rates are fetched from an API and automatically applied to the input amount to display the converted value.

## 5. DOM Array Methods - User Wealth
This project involves displaying random users and their calculated wealth, fetched from an API. It uses various DOM array methods for user interaction.

### Features:
- **Random User Fetch:** A random user is fetched from an API and their wealth is calculated using `Math.random()` and multiplied to generate a random value for wealth.
  
- **Add User Button:**
  - Initially, only one user is displayed. Clicking the "Add User" button adds another user with a new wealth value.
  
- **Double Wealth Button:**
  - Clicking the "Double" button doubles the displayed user's wealth.
  
- **Filter Millionaire Button:**
  - Clicking the "Filter Millionaire" button filters out users with a wealth of one million or more, displaying only those users.
  
- **Sort by Wealth Button:**
  - Clicking the "Sort by Wealth" button sorts the displayed users based on their wealth in descending order.
  
- **Add All Wealth Button:**
  - Clicking the "Add All Wealth" button adds up the wealth of all displayed users and shows the total wealth at the bottom.
 
## 6. Landing Page
This project is a simple landing page with the following features:

### Features:
- **Signup Button:** In the header, a "Signup" button opens a signup form when clicked.
- **Close Signup Form:** The signup form can be closed by clicking the cross button on the form.
- **Hamburger Menu:** A hamburger menu is positioned on the left. Clicking the hamburger icon opens a side navigation menu.
- **Toggle Navigation:** Clicking the hamburger icon again closes the side navigation menu.
