// Global variable to store selected options
var selectedOptions = [];

// Global variable to store the grid
var grid = [];

// Function to initialize the grid array with empty values
function initializeGrid(rows, columns) {
    grid = new Array(rows);
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            grid[i][j] = ''; // Initialize each cell with an empty string
        }
    }
}

// Function to update the color of individual squares based on the content of the grid array
function updateSquareColor(row, column, rows, columns, selectedOptions) {
    var squareId = `square_${row}_${column}`;
    var square = document.getElementById(squareId);
    if (grid[row][column] !== '') {
        square.textContent = grid[row][column];
        square.style.backgroundColor = grid[row][column] === 'option1' ? 'green' : 'blue'; // Set color based on the content of the grid
    } else {
        square.textContent = ''; // Clear the content of the square
        square.style.backgroundColor = ''; // Clear the background color
    }
}




// Function to populate the grid
function populateGrid() {
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);

    // Initialize the grid array with empty values
    initializeGrid(rows, columns);

    var totalSquares = rows * columns; // Calculate total number of squares

    var gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous grid

    // Check if totalSquares is greater than 0
    if (totalSquares <= 0) {
        return; // Don't populate grid if totalSquares is less than or equal to 0
    }

    for (var i = 0; i < totalSquares; i++) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        var squareId = `square_${Math.floor(i / columns)}_${i % columns}`; // Generate unique identifier for each square
        gridItem.setAttribute('id', squareId); // Set the id attribute of the square

        // Add event listener to the first square
        if (i === 0) {
            var firstSquareClick = function() {
                if (selectedOptions.length > 0) {
                    this.style.backgroundColor = 'green'; // Turn the first square green if any options are selected
                    this.textContent = selectedOptions[selectedOptions.length - 1]; // Display the selected option in the square
                    this.removeEventListener('click', firstSquareClick); // Remove the event listener after first click
                    var row = parseInt(this.id.split('_')[1]);
                    var column = parseInt(this.id.split('_')[2]);
                    grid[row][column] = selectedOptions[selectedOptions.length - 1]; // Update grid array with selected option
                }
            };
            gridItem.addEventListener('click', firstSquareClick);
        } else {
            gridItem.addEventListener('click', function() {
                if (this.style.backgroundColor !== 'green') {
                    placeOption(this); // Add event listener to place selected option on click
                }
            });
        }

        gridContainer.appendChild(gridItem);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 100px)`; // Adjust size of grid items
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 100px)`; // Adjust size of grid items

    // Call function to update square colors
    updateGridColors(rows, columns, selectedOptions);
}


// Function to place selected option in the clicked grid item
function placeOption(square) {
    // Check if the square is already locked
    if (square.dataset.locked === 'true') {
        return; // Exit if the square is already locked
    }

    var selectedOption = selectedOptions[selectedOptions.length - 1];
    
    // Get the row and column of the clicked square
    var row = parseInt(square.id.split('_')[1]);
    var column = parseInt(square.id.split('_')[2]);

    // Check if placing Option 1 violates the rule
    if (selectedOption === 'option1') {
        // Prevent placing Option 2 if Option 1 is already placed
        var option1Placed = false;
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 'option1') {
                    option1Placed = true;
                    break;
                }
            }
            if (option1Placed) {
                break;
            }
        }
        if (option1Placed) {
            return;
        }
    }
    
    // Place the selected option if no violation found
    square.textContent = selectedOption;
    square.style.backgroundColor = selectedOption === 'option1' ? 'green' : 'blue'; // Set color based on the option
    square.dataset.locked = 'true'; // Mark the square as locked
    grid[row][column] = selectedOption; // Update grid array with selected option

    // Update the color of adjacent squares based on the new selection
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);
    updateGridColors(rows, columns, selectedOptions);
}



// Add event listeners to checkboxes to detect selection
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            selectedOptions.push(this.name);
        } else {
            var index = selectedOptions.indexOf(this.name);
            if (index !== -1) {
                selectedOptions.splice(index, 1);
            }
        }

        // After changing selections, update grid colors
        var rows = parseInt(document.getElementById('rows').value);
        var columns = parseInt(document.getElementById('columns').value);
        updateGridColors(rows, columns, selectedOptions);
    });
});

// Call this function after populating the grid to update square colors
function updateGridColors(rows, columns, selectedOptions) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            updateSquareColor(i, j, rows, columns, selectedOptions);
        }
    }
}

// Add event listener to create grid button
document.getElementById('createGridButton').addEventListener('click', populateGrid);
