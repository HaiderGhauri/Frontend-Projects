// Get DOM element from index.html
const container = document.getElementById('container');
const mainLoginBtn = document.getElementById('login');
const mainLogoutBtn = document.getElementById('logout')
const password = document.getElementById('password');
const username = document.getElementById('username');
const eyeicon = document.getElementById('eyeicon');
const loginbtn = document.getElementById('loginbtn');
const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const closebtn = document.getElementById('close');
const mainAddBookBtn = document.getElementById('add-book');
const addBookContainer = document.getElementById('add-book-container');
const addBookForm = document.getElementById('add-book-form');
const closeAddBookBtn = document.getElementById('close-add-book');
const bookImage = document.getElementById('book-image');
const bookTitle = document.getElementById('book-title')

// Make an books array which contains the object of every book 
const books = [
    {
        id: 1, img: './Image/to kill a mockingbird.jpg', title: 'To Kill a Mockingbird', reviews: []
    },
    {
        id: 2, img: './Image/1984 by george orwell.jpg', title: '1984 by George Orwell', reviews: []
    },
    {
        id: 3, img: './Image/the great gatsby.jpg', title: 'The Great Gatsby', reviews: []
    },
    {
        id: 4, img: './Image/pride and prejudice.jpg', title: 'Pride and Prejudice', reviews: []
    },
    {
        id: 5, img: './Image/moby-dick.jpg', title: 'Moby-Dick', reviews: []
    },
    {
        id: 6, img: './Image/the catcher in the rye.jpg', title: 'The Catcher in the Rye', reviews: []
    },
    {
        id: 7, img: './Image/jane eyre.jpg', title: 'Jane Eyre', reviews: []
    },
    {
        id: 8, img: './Image/the hobbit.jpg', title: 'The Hobbit', reviews: []
    },
    {
        id: 9, img: './Image/war and peace.jpg', title: 'War and Peace', reviews: []
    },
    {
        id: 10, img: './Image/crime and punishment.jpg', title: 'Crime and Punishment', reviews: []
    },
    {
        id: 11, img: './Image/brave new world.jpg', title: 'Brave New World', reviews: []
    },
    {
        id: 12, img: './Image/the alchemist.jpg', title: 'The Alchemist', reviews: []
    },
    {
        id: 13, img: './Image/wuthering heights.jpg', title: 'Wuthering Heights', reviews: []
    },
    {
        id: 14, img: './Image/the odyssey.jpg', title: 'The Odyssey', reviews: []
    },
    {
        id: 15, img: './Image/the kite runner.jpg', title: 'The Kite Runner', reviews: []
    },
    {
        id: 16, img: './Image/anna karenina.jpg', title: 'Anna Karenina', reviews: []
    },
    {
        id: 17, img: './Image/the divine comedy.jpg', title: 'The Divine Comedy', reviews: []
    },
    {
        id: 18, img: './Image/a tale of two cities.jpg', title: 'A Tale of Two Cities', reviews: []
    }
    // {
    //     id: 19, img: './Image/the brothers karamazov.jpg', title: 'The Brothers Karamazov', reviews: []
    // },
    // {
    //     id: 20, img: './Image/great expectations.jpg', title: 'Great Expectations', reviews: []
    // }
];

// Function to get books data from local storage
function loadBooks() {
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks) {
        books.length = 0;
        savedBooks.forEach((book) => {
            books.push(book);
        });
    }
    renderBooks();
};

// Function to dynamically add each book in the DOM using foreach func on books array
function renderBooks() {
    container.innerHTML = "";
    books.forEach((book, bookIndex) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <div class="book-info">
                <h3 class="title">${book.title}</h3>
                <input type="text" class="review" id="review-${bookIndex}" placeholder="Write your review here">
                <select id="rating-${bookIndex}">
                    <option value="">Rate this book</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                ${!isAdminLoggedIn() ?
                ` <button class="btn add-review" onclick="addReview(${bookIndex})">Add Review</button>` : ""}
               

                <div class="review-container" id="review-container${bookIndex}">
                    ${book.reviews
                .map((review, reviewIndex) =>
                    `<div class="review">
                                <p class="review-text"><strong>Rating:</strong> ${review.rating} Star(s) <br> <strong>Review:</strong> ${review.text}</p>
                                 ${!isAdminLoggedIn() ? `<button class="edit-btn" onclick="editReview(${bookIndex}, ${reviewIndex})">Edit</button>` : ""}
                            
                                ${isAdminLoggedIn() ?
                        `<button class="btn delete-review" onclick="deleteReview(${bookIndex}, ${reviewIndex})">Delete review</button>` : ""}
                            </div>`
                ).join("")
            }
                </div>
            </div>
             ${isAdminLoggedIn() ?
                `<button class="btn delete-book"  onclick="deleteBook(${bookIndex})">Delete Book</button>` : ""}
        `;

        container.appendChild(bookDiv)
    })
};

// Function to addreview in the DOM using input and select element value
function addReview(index) {
    const reviewInput = document.getElementById(`review-${index}`);
    const reviewText = reviewInput.value;

    const ratingInput = document.getElementById(`rating-${index}`);
    const rating = ratingInput.value;

    if (reviewText.trim() === "" || rating === "") {
        alert('Please provide valid review & rating');
        return
    }

    books[index].reviews.push({ text: reviewText, rating });

    localStorage.setItem("books", JSON.stringify(books));

    renderBooks();

    reviewInput.value = "";
    ratingInput.value = "";
};

// Function to editreview using prompt
function editReview(bookIndex, reviewIndex) {
    const review = books[bookIndex].reviews[reviewIndex];
    const newReviewText = prompt("Edit your review", review.text);
    const newRating = prompt("Edit your ratings (1 - 5)", review.rating);

    if (newReviewText.trim() === "" || isNaN(newRating) || newRating < 1 || newRating > 5) {
        alert('Please provide valid review & rating');
        return;
    }

    books[bookIndex].reviews[reviewIndex] = { text: newReviewText, rating: newRating };

    localStorage.setItem("books", JSON.stringify(books));

    renderBooks();
};

// Store the value of admin credentials in const variable
const adminUsername = "admin";
const adminPassword = "admin123";

// Function to check is admin login from local storage
function isAdminLoggedIn() {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
};

// Function display the elements when admin is not login
function showAdminLogin() {
    mainLoginBtn.style.display = 'block';
    mainLogoutBtn.style.display = 'none'
    mainAddBookBtn.style.display = 'none';
};

// Function display the elements when admin is login
function showAdminLogout() {
    mainLoginBtn.style.display = 'none'
    mainLogoutBtn.style.display = 'block'
    mainAddBookBtn.style.display = 'block';
};

// Function to check the inputs value are match if match then add to local storage
function adminlogin() {
    const usernameInput = username.value;
    const passwordInput = password.value;

    if (usernameInput === adminUsername && passwordInput === adminPassword) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        renderBooks();
        showAdminLogout();

    } else {
        alert('Unauthorized credentials');
    }
};

// Function to logout and remove the is admin login function from the local storage
function adminlogout() {

    if (isAdminLoggedIn) {
        localStorage.removeItem('isAdminLoggedIn')
        renderBooks();
        showAdminLogin();
    }
};

// Function to delete the book only for admin
function deleteBook(bookIndex) {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
        books.splice(bookIndex, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }
};

// Function to add the book only for admin
function addBook() {

    const title = bookTitle.value;
    const imageFile = bookImage.files[0];

    if (title && imageFile) {

        const imageFileName = imageFile.name;
        const newBook = {
            id: books.length + 1, img: `./Image/${imageFileName}`, title: title, reviews: []

        };

        books.push(newBook);

        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    } else {
        alert('Please provide valid details')
    }

};

// Function to delete the review only for admin
function deleteReview(bookIndex, reviewIndex) {

    const confirmDelete = confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
        books[bookIndex].reviews.splice(reviewIndex, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    }
};

// Event on Header login btn to show login form
mainLoginBtn.addEventListener('click', () => {
    loginContainer.classList.add('show');
});

// Event on Header add book btn to show add book form only for admin
mainAddBookBtn.addEventListener('click', () => {
    addBookContainer.classList.add('show')
});

// Event on close icon to close the add book form
closeAddBookBtn.addEventListener('click', () => {
    addBookContainer.classList.remove('show')
});

// Event on close icon to close the login form
closebtn.addEventListener('click', () => {
    loginContainer.classList.remove('show');
    password.value = '';
    username.value = '';
});

// Function to hide and show password
function showHidePassword() {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.classList.remove('fa-eye-slash');
        eyeicon.classList.add('fa-eye');
    } else {
        password.type = "password";
        eyeicon.classList.remove('fa-eye');
        eyeicon.classList.add('fa-eye-slash');
    }
};

// Condition to check is admin loggin or not and show the element as needed
if (isAdminLoggedIn()) {
    showAdminLogout();
} else {
    showAdminLogin();
};

// Call function to get books data from local storage on page reload
window.onload = function () {
    loadBooks();
};
