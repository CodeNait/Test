const gridContainer = document.getElementById('gridContainer');
const resetButton = document.getElementById('resetButton');
const plantCheckboxes = document.querySelectorAll('.plant-checkbox');
const selectedVegetables = document.getElementById('selectedVegetables');
const plantButton = document.getElementById('plantButton');

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-item');
      square.addEventListener('click', () => {
        square.classList.toggle('planted');
      });
      gridContainer.appendChild(square);
    }
  }
}

function resetGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.classList.remove('planted');
  });
}

function updateSelectedVegetables() {
  selectedVegetables.innerHTML = ''; // Clear existing vegetables
  plantCheckboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const plantName = checkbox.dataset.plant;
      const selectedVegetable = document.createElement('div');
      selectedVegetable.textContent = plantName;
      selectedVegetables.appendChild(selectedVegetable);
    }
  });
}

function plantSelectedVegetables() {
  const selectedPlants = document.querySelectorAll('.plant-checkbox:checked');
  const plantedVegetablesContainer = document.getElementById('plantedVegetables');
  
  selectedPlants.forEach(checkbox => {
    const plantName = checkbox.dataset.plant;
    const plantedVegetable = document.createElement('div');
    plantedVegetable.textContent = plantName;
    plantedVegetablesContainer.appendChild(plantedVegetable);
  });
}

createGrid(10); // Create a 10x10 grid

resetButton.addEventListener('click', resetGrid);

plantCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateSelectedVegetables);
});

plantButton.addEventListener('click', plantSelectedVegetables);
