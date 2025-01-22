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

## 7. Hangman Game
This is a Hangman game where users have to guess a word by selecting letters.

### Features:
- **Guessing the Word:** The user must guess a word by selecting letters. Incorrect guesses reveal parts of the hangman figure.
- **Hangman Parts:** Each wrong guess adds a new part to the hangman figure (e.g., head, body, arms, legs).
- **Already Guessed Letters:** If the user guesses a letter that has already been guessed, a popup appears with the message "You have already guessed this letter."

## 9. Expense Tracker
This project allows users to track their expenses by adding transactions with descriptions and amounts.

### Features:
- **Transaction Description and Amount:** Users can add a transaction description and an amount (either positive or negative).
- **Transaction Types:** 
  - If the amount is positive, it is added to the "credit" balance.
  - If the amount is negative, it is added to the "debit" balance.
- **Balance Display:** The current balance is displayed at the top.
- **Transaction Deletion:** Users can delete any transaction that they no longer wish to track.

## 10. Music Player
A music player with the following features:

### Features:
- **Play/Pause Button:** Clicking the play button starts the music and turns it into a pause button. Clicking the pause button stops the music.
- **Previous and Next Buttons:** These buttons allow users to navigate through different tracks.
- **Title and Progress Bar:** When the music is playing, the track title and progress bar are displayed and updated in real-time.
- **Rotating Image:** While the music is playing, the album image rotates.

## 11. News Feed Website
A news feed website where random posts are fetched from an API and displayed.

### Features:
- **Initial Post Load:** The website loads 5 random posts from the API initially.
- **Scroll to Load More:** When the user scrolls to the bottom of the page, 5 more posts are fetched and displayed.
- **Search Bar:** At the top of the page, a search bar allows users to filter posts by keywords. Only posts that match the keyword will be displayed.

## 12. Typing Game
A typing game where users are given a word to type, and their score increases for each correct word typed.

### Features:
- **Word Display:** A word is displayed for the user to type within a time limit of 10 seconds.
- **Difficulty Levels:** The game has three difficulty levels:
  - **Easy Mode:** Adds 5 seconds to the timer for each correct word typed.
  - **Medium Mode:** Adds 4 seconds to the timer for each correct word typed.
  - **Hard Mode:** Adds 3 seconds to the timer for each correct word typed.
- **Score:** The score increases for every correct word typed within the time limit.
- **Local Storage:** The selected difficulty is saved in local storage.
- **Time Up Popup:** When the time runs out, a popup appears showing the user's score, with a "Play Again" button.

## 13. Memory Card Game
This project is a memory card game where users can add, view, and delete cards containing questions and answers.

### Features:
- **Add Card:** A plus icon opens a form where users can input a question and an answer. Clicking the "Add" button adds the card to the game.
- **Card Flip:** Clicking on a card flips it to reveal the answer.
- **Delete Card:** A delete icon next to the plus icon allows users to delete cards.
- **Local Storage:** The cards are saved to local storage, so they persist even after the page is reloaded.

## 14. Web Speech
This project uses the Web Speech API to read aloud text when interacting with images or custom input.

### Features:
- **Image and Text:** Initially, there are several images with corresponding text. When the user clicks on an image, the text is read aloud.
- **Custom Text:** A button opens a form where users can type their own text. Once entered, clicking the "Read Custom Text" button will read the typed text aloud.

## 15. Search Lyrics
This project allows users to search for song lyrics based on song or artist names.

### Features:
- **Search Box:** Users can type a song name or artist name to search for related results.
- **Pagination:** If the search returns more than 15 results, only the first 15 are shown. There is a "Next" button to show the next 15 results and a "Previous" button to go back.
- **Get Lyrics:** Each song has a "Get Lyrics" button. When clicked, it shows the lyrics of that song.

## 16. Book Review Website
This project allows users to leave reviews and ratings for books. Admin users have additional privileges to manage the books and reviews.

### Features:
- **Book Display:** Some books are displayed with an input field for users to add reviews and a select box for rating the books.
- **Add Review:** Users can add a review for a book, and if the values are invalid, an alert is shown.
- **Edit Review:** After a review is added, it can be edited by clicking the "Edit Review" button. A prompt will appear for the review and rating, and the updated review will be saved.
- **Local Storage:** All reviews and ratings are saved in local storage.
- **Login and Admin Access:** There is a login button in the header that opens a login form. The admin credentials are hardcoded in the code. If the admin logs in successfully, the admin view is opened.
- **Admin Actions:** Admin can delete books and reviews, and a "Logout" button is available. The admin can also add new books by selecting a file and entering a book title.
- **Delete Actions:** Each book and review has a delete button that removes the respective item when clicked. When logged out, the admin credentials are removed from local storage.

## 8. Meal Generator
This project allows users to search for meals and view detailed information about each meal.

### Features:
- **Search Bar:** Users can input keywords in the search bar, and meals related to the keyword are displayed.
- **Meal Details:** Clicking on a meal's image will show detailed information about that meal, including:
  - The meal's name
  - Meal image
  - Category
  - Region
  - Instructions for preparation
  - Ingredients and measurements
- **Random Meal Generator:** A button allows users to generate a random meal. When clicked, a random meal is displayed.
- **API Data:** All meal information is fetched from an API.




