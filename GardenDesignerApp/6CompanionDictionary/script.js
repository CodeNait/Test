document.addEventListener("DOMContentLoaded", function() {
    var selectPlantButton = document.getElementById("selectPlant");
    var selectPlantOptions = document.getElementById("selectPlantOptions");
    var confirmSelectionButton = document.getElementById("confirmSelection");
    var plantColumns = {
        "Vegetable": document.getElementById("vegetableColumn"),
        "Herb": document.getElementById("herbColumn"),
        "Fruit": document.getElementById("fruitColumn")
    };
    var plantDropdown = document.getElementById("dropdown");
    var plantImage = document.getElementById("plantImage"); // Image container
    var companionDropdown = document.getElementById("dropDownCompanion"); 


    var plantOptions = [
        // This is the Vegetable section
        { name: 'Artichoke', type: "Vegetable", image:"Artichoke.jpg", companion: ['Tarragon', 'Marigolds', 'Lettuce', 'Mint', 'Nasturtiums', 'Chives', 'Coriander', 'Borage', 'Rosemary' ],},
        { name: 'Arugula', type: "Vegetable", image:"Arugula.jpg", companion: ['Nasturtiums', 'Mint', 'Dill', 'Lettuce', 'Chervil','Basil', 'Sage', 'Broccoli','Cabbage', 'Cauliflower', 'Radishes',], enemy: ['Beans', 'Potatoes', 'Fennel', 'Cucumbers', 'Sunflowers', 'Tomatoes','Anise', 'Rue'] },
        { name: 'Asparagus', type: "Vegetable", image: "Asparagus.jpg", companion: ['Tomatoes', 'Parsley', 'Basil', 'Nasturtiums', 'Marigolds','Calendula', 'Dill', 'Cilantro','Chervil', 'Comfrey', 'Borage',], enemy: ['Onions', 'Garlic', 'Leeks', 'Shallots', 'Potatoes', 'Gladiolus','Chives', 'Shallots', 'Strawberries'] },
        { name: 'Bean', type: "Vegetable", image: "Green_bean.jpg", companion: ['Corn', 'Cucumbers', 'Potatoes', 'Carrots', 'Broccoli','Cabbage', 'Cauliflower', 'Summer Savory','Marigolds', 'Nasturtiums', 'Rosemary', 'Radishes', 'Sunflowers', 'Strawberries'], enemy: ['Onions', 'Garlic', 'Leeks', 'Shallots', 'Chives', 'Beets','Kohlrabi', 'Alliums'] },
        { name: 'Beet', type: "Vegetable", companion: ['Broccoli', 'Cabbage', 'Cauliflower', 'Onions', 'Garlic','Lettuce', 'Kohlrabi', 'Swiss Chard','Bush Beans', 'Catnip', 'Mint', 'Marigolds'], enemy: ['Pole Beans', 'Field Mustard', 'Charlock', 'Wild Radish'] },
        { name: 'Bell Pepper', type: "Vegetable", companion: ['Tomatoes', 'Basil', 'Oregano', 'Parsley', 'Carrots','Onions', 'Garlic', 'Marjoram','Petunias', 'Chives', 'Rosemary', 'Spinach'], enemy: ['Fennel', 'Kohlrabi', 'Broccoli', 'Cabbage', 'Cauliflower', 'Beans','Kale', 'Anise', 'Dill','Eggplant'] },
        { name: 'Borage', type: "Vegetable", companion: ['Tomatoes', 'Squash', 'Zucchini', 'Strawberries', 'Beans','Cauliflower', 'Cabbage', 'Kale','Garden Cress', 'Bok Choy', 'Broccoli', 'Brussel Sprouts', 'Mustard Plant', 'Lettuce', 'Thyme','Sage', 'Rosemary', 'Cucumbers','Marigolds', 'Calendula', 'Nasturtiums', 'Dill'], enemy: ['Basil', 'Fennel', 'Lavender', 'Rosemary', 'Mint', 'Oregano'] },
        { name: 'Broccoli', type: "Vegetable", image:"Broccoli_Picture.jpg", companion: ['Basil', 'Chamomile', 'Dill', 'Mint', 'Nasturtiums','Onions', 'Oregano', 'Potatoes','Rosemary', 'Sage', 'Spinach', 'Swiss Chard'], enemy: ['Strawberries', 'Tomatoes', 'Beans', 'Grapes', 'Mustard', 'Cabbage','Cauliflower', 'Brussel Sprouts', 'Kohlrabi','Turnips', 'Rutabagas'] },
        { name: 'Brussel Sprout', type: "Vegetable", companion: ['Beets', 'Bush Beans', 'Carrots', 'Celery', 'Chamomile','Dill', 'Mint', 'Nasturtiums','Onions', 'Oregano', 'Sage', 'Thyme'], enemy: ['Strawberries', 'Tomatoes', 'Beans', 'Grapes', 'Mustard', 'Cabbage','Cauliflower', 'Brussel Sprouts', 'Kohlrabi','Turnips'] },
        { name: 'Cabbage', type: "Vegetable", companion: ['Beets', 'Celery', 'Chamomile', 'Dill', 'Mint','Nasturtiums', 'Onions', 'Oregano','Potatoes', 'Sage', 'Thyme', 'Rosemary', 'Tomatoes', 'Spinach'], enemy: ['Strawberries', 'Grapes', 'Mustard', 'Kohlrabi', 'Turnips', 'Radishes','Broccoli', 'Cauliflower', 'Brussel Sprouts','Kale' ] },
        { name: 'Carrot', type: "Vegetable", image: "Fresh_orange_carrots.jpg", companion: ['Chives', 'Onions', 'Leeks', 'Rosemary', 'Sage','Tomatoes', 'Lettuce', 'Peas','Radishes', 'Spinach', 'Cilantro', 'Beans', 'Nasturtiums', 'Marigolds',], enemy: ['Dill', 'Parsnips', 'Celery', 'Queen Anne Lace', 'Anise','Fennel', 'Cilantro', 'Cress','Yarrow', 'Wormwood'] },        { name: 'Cauliflower', type: "Vegetable", companion: ['Beans', 'Celery', 'Dill', 'Mint', 'Nasturtiums','Onions', 'Oregano', 'Potatoes','Sage', 'Thyme', 'Beets', 'Chamomile', 'Broccoli', 'Cabbage', 'Rosemary'], enemy: ['Strawberries', 'Tomatoes', 'Grapes', 'Mustard', 'Peppers', 'Eggplant','Radishes', 'Kohlrabi', 'Turnips','Rutabagas'] },
        { name: 'Cucumber', type: "Vegetable", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Corn','Dill', 'Nasturtiums', 'Sunflowers','Radishes', 'Lettuce', 'Marigolds', 'Oregano', 'Peas', 'Carrots', 'Chives', 'Onions'], enemy: ['Potatoes', 'Sage', 'Rosemary', 'Thyme', 'Melons', 'Tomatoes','Rue', 'Fennel', 'Broccoli','Cabbage', 'Cauliflower', 'Eggplant', 'Pumpkins', 'Squash'] },
        { name: 'Celeriac', type: "Vegetable", image:"Celeriac.jpg", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Lettuce','Onions', 'Spinach', 'Tomatoes','Carrots', 'Celery', 'Chives', 'Parsley', 'Thyme', 'Sage'], enemy: ['Fennel', 'Cilantro', 'Anise', 'Dill', 'Caraway', 'Parsnips','Potatoes', 'Carrots'] },
        { name: 'Chili Pepper', type: "Vegetable", companion: ['Basil', 'Tomatoes', 'Oregano', 'Marjoram', 'Rosemary','Thyme', 'Cilantro', 'Spinach','Lettuce', 'Onions', 'Garlic', 'Chives', 'Nasturtiums', 'Calendula'], enemy: ['Fennel', 'Broccoli', 'Cabbage', 'Cauliflower', 'Beans', 'Peas','Kohlrabi', 'Parsley', 'Dill','Potatoes', 'Tomatoes'] },
        { name: 'Chives', type: "Vegetable", companion: ['Tomatoes', 'Carrots', 'Lettuce', 'Broccoli', 'Peas','Rosemary', 'Strawberries', 'Cauliflower','Cabbage', 'Kale', 'Garden Cress', 'Bok Choy', 'Brussel Sprouts', 'Marigolds', 'Calendula', 'Nasturtiums', 'Basil'], enemy: ['Beans', 'Sage', 'Garlic'] },
        { name: 'Collard Greens', type: "Vegetable", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Brussel Sprouts','Carrots', 'Celery', 'Cilantro','Dill', 'Kale', 'Lettuce','Mint', 'Onions', 'Peas','Potatoes', 'Radishes', 'Spinach','Tomatoes'], enemy: ['Mustard Greens', 'Turnips', 'Peppers', 'Tomatillos', 'Sunflowers', 'Pole Beans','Strawberries'] },
        { name: 'Corn', type: "Vegetable", companion: ['Beans', 'Cucumbers', 'Melons', 'Potatoes', 'Pumpkins','Squash', 'Sunflowers', 'Peas','Radishes', 'Nasturtiums', 'Marigolds', 'Amaranth', 'Oregano', 'Tansy'], enemy: ['Tomatoes', 'Celery', 'Broccoli', 'Cabbage', 'Cauliflower', 'Onions','Garlic', 'Leeks', 'Beets','Carrots', 'Rutabagas', 'Turnips', 'Kohlrabi', 'Cress'] },
        { name: 'Eggplant', type: "Vegetable", image:"FwE66qpeemfXhSH4VKNvBKcC6osDUcMwALAwkVXd.jpg", companion: ['Basil', 'Beans', 'Marjoram', 'Peppers', 'Spinach','Thyme', 'Tomatoes', 'Potatoes','Nasturtiums', 'Amaranth', 'Tarragon', 'Calendula', 'Chives',], enemy: ['Fennel', 'Potatoes', 'Tomatoes', 'Peppers', 'Beans', 'Dill','Cucumbers', 'Rue', 'Broccoli','Cabbage', 'Cauliflower', 'Kohlrabi',] },
        { name: 'Garlic', type: "Vegetable", companion: ['Beets', 'Broccoli', 'Cabbage', 'Cauliflower', 'Carrots','Celery', 'Chamomile', 'Lettuce','Parsley', 'Spinach', 'Tomatoes', 'Roses', 'Potatoes', 'Peppers', 'Eggplant', 'Strawberries', 'Kale', 'Brussel Sprouts'], enemy: ['Beans', 'Peas', 'Asparagus', 'Sage', 'Rosemary', 'Basil','Parsnips', 'Mint', 'Onions','Shallots', 'Leeks'] },
        { name: 'Kale', type: "Vegetable", companion: ['Beets', 'Celery', 'Chamomile', 'Cilantro', 'Dill','Nasturtiums', 'Onions', 'Potatoes','Sage', 'Thyme', 'Carrots', 'Broccoli', 'Cabbage', 'Cauliflower', 'Lettuce', 'Radishes', 'Spinach'], enemy: ['Beans', 'Peas', 'Tomatoes', 'Strawberries', 'Grapes', 'Mustard Greens','Peppers', 'Eggplant', 'Potatoes','Rue', 'Wormwood'] },
        { name: 'Kohlrabi', type: "Vegetable", companion: ['Beets', 'Celery', 'Chamomile', 'Dill', 'Nasturtiums','Onions', 'Oregano', 'Potatoes','Sage', 'Thyme', 'Carrots', 'Broccoli', 'Cabbage', 'Cauliflower', 'Lettuce', 'Radishes', 'Spinach',], enemy: ['Beans', 'Peas', 'Tomatoes', 'Strawberries', 'Grapes', 'Mustard Greens','Peppers', 'Eggplant', 'Potatoes','Rue', 'Wormwood'] },
        { name: 'Leek', type: "Vegetable", companion: ['Carrots', 'Celery', 'Lettuce', 'Onions', 'Spinach','Strawberries', 'Broccoli', 'Cabbage','Cauliflower', 'Beets', 'Chamomile', 'Marigolds', 'Dill', 'Nasturtiums', 'Peas',], enemy: ['Beans', 'Peppers', 'Garlic', 'Shallots', 'Chives', 'Onions','Garlic', 'Asparagus', 'Broccoli','Cabbage', 'Cauliflower', 'Parsley', 'Cucumbers'] },
        { name: 'Lettuce', type: "Vegetable", companion: ['Beets', 'Carrots', 'Radishes', 'Strawberries', 'Onions','Garlic', 'Chives', 'Celery','Broccoli', 'Cabbage', 'Cauliflower', 'Spinach', 'Dill', 'Chamomile', 'Nasturtiums', 'Mint', 'Marigolds',], enemy: ['Kale', 'Brussel Sprouts', 'Parsley', 'Fennel', 'Beans', 'Peas','Tomatoes', 'Corn', 'Sunflowers','Cucumbers', 'Potatoes'] },
        { name: 'Mustard Greens', type: "Vegetable", companion: ['Beets', 'Carrots', 'Celery', 'Lettuce', 'Onions','Spinach', 'Strawberries', 'Broccoli','Cabbage', 'Cauliflower', 'Dill', 'Chamomile', 'Nasturtiums', 'Mint', 'Marigolds',], enemy: ['Beans', 'Peas', 'Tomatoes', 'Kale', 'Brussel Sprouts', 'Sunflowers','Potatoes', 'Cucumbers', 'Corn'] },
        { name: 'Okra', type: "Vegetable", companion: ['Eggplant', 'Peppers', 'Tomatoes', 'Basil', 'Cucumbers','Nasturtiums', 'Marigolds', 'Lettuce','Onions', 'Sunflowers', 'Broccoli', 'Cabbage', 'Cauliflower', 'Melons', 'Spinach', 'Radishes'], enemy: ['Potatoes', 'Carrots', 'Celery', 'Parsley', 'Kale', 'Brussel Sprouts','Beets', 'Fennel', 'Leeks','Onions', 'Shallots'] },
        { name: 'Onions', type: "Vegetable", companion: ['Beets', 'Carrots', 'Broccoli', 'Cabbage', 'Cauliflower','Lettuce', 'Chamomile', 'Tomatoes','Strawberries', 'Peppers', 'Spinach','Parsley', 'Chives', 'Celery','Basil', 'Nasturtiums', 'Marigolds',], enemy: ['Beans', 'Peas', 'Asparagus', 'Leeks', 'Shallots', 'Garlic','Onions', 'Leeks', 'Sage','Brussel Sprouts', 'Potatoes'] },
        { name: 'Parsnip', type: "Vegetable", companion: ['Beans', 'Beets', 'Broccoli', 'Cabbage', 'Cauliflower','Carrots', 'Corn', 'Garlic','Onions', 'Peas', 'Radishes','Spinach', 'Lettuce', 'Lettuce','Marjoram', 'Peppers', 'Sunflowers',], enemy: ['Parsley', 'Celery', 'Caraway', 'Fennel', 'Dill', 'Cilantro','Anise', 'Lovage', 'Chervil'] },
        { name: 'Peas', type: "Vegetable", companion: ['Carrots', 'Beans', 'Corn', 'Cucumbers', 'Potatoes','Radishes', 'Spinach', 'Lettuce','Onions', 'Tomatoes', 'Marigolds', 'Celery', 'Sweet Alyssum', 'Chives', 'Garlic',], enemy: ['Onions', 'Garlic', 'Leeks', 'Shallots', 'Gladiolus', 'Potatoes','Onions', 'Leeks', 'Shallots'] },
        { name: 'Potato', type: "Vegetable", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Corn','Marigolds', 'Nasturtiums', 'Parsley','Peas', 'Spinach', 'Sweet Alyssum', 'Basil', 'Cilantro', 'Horseradish', 'Celery', 'Chamomile'], enemy: ['Tomatoes', 'Cucumbers', 'Pumpkins', 'Squash', 'Sunflowers', 'Carrots','Kohlrabi', 'Turnips', 'Radishes','Fennel'] },
        { name: 'Radish', type: "Vegetable", companion: ['Carrots', 'Peas', 'Cucumbers', 'Lettuce', 'Spinach','Beets', 'Nasturtiums', 'Chervil','Broccoli', 'Cabbage', 'Cauliflower', 'Beans', 'Tomatoes', 'Parsnips', 'Mint', 'Tarragon', 'Rosemary',], enemy: ['Hyssop', 'Potatoes', 'Turnips', 'Mustard Greens', 'Sunflowers', 'Celery','Onions', 'Garlic', 'Cress'] },
        { name: 'Rutabaga', type: "Vegetable", companion: ['Beets', 'Cabbage', 'Cauliflower', 'Celery', 'Chervil','Lettuce', 'Onions', 'Peas','Spinach', 'Nasturtiums', 'Radishes', 'Carrots', 'Beans', 'Marigolds', 'Dill',], enemy: ['Mustard Greens', 'Turnips', 'Broccoli'] },
        { name: 'Spinach', type: "Vegetable", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Carrots','Celery', 'Lettuce', 'Onions','Peas', 'Radishes', 'Strawberries', 'Tomatoes', 'Mint', 'Nasturtiums', 'Oregano', 'Potatoes', 'Swiss Chard'], enemy: ['Beets', 'Kale', 'Brussel Sprouts', 'Sunflowers', 'Fennel', 'Rhubarb','Chives', 'Parsley', 'Cress','Leeks', 'Garlic'] },
        { name: 'Summer Squash', type: "Vegetable", companion: ['Nasturtiums', 'Marigolds', 'Radishes', 'Corn', 'Beans','Peas', 'Oregano', 'Dill','Nasturtiums', 'Borage', 'Tansy', 'Tarragon', 'Chives', 'Mint', 'Sunflowers',], enemy: ['Potatoes', 'Pumpkins', 'Winter Squash', 'Broccoli', 'Cabbage', 'Cauliflower','Cucumbers', 'Melons', 'Tomatoes','Fennel', 'Rosemary', 'Sage'] },
        { name: 'Sweet Potato', type: "Vegetable", companion: ['Beans', 'Corn', 'Peas', 'Nasturtiums', 'Oregano','Marigolds', 'Sunflowers', 'Sweet Alyssum','Radishes', 'Spinach', 'Lettuce', 'Chives', 'Celery', 'Basil', 'Thyme',], enemy: ['Potatoes', 'Pumpkins', 'Squash', 'Cucumbers', 'Melons', 'Tomatoes','Broccoli', 'Cabbage', 'Cauliflower','Fennel', 'Rosemary', 'Sage'] },
        { name: 'Swiss Chard', type: "Vegetable", companion: ['Beans', 'Broccoli', 'Cabbage', 'Cauliflower', 'Carrots','Celery', 'Lettuce', 'Onions','Peas', 'Radishes', 'Spinach', 'Tomatoes', 'Beets', 'Nasturtiums', 'Dill', 'Chives', 'Marigolds'], enemy: ['Kale', 'Brussel Sprouts', 'Sunflowers', 'Fennel', 'Rhubarb', 'Chives','Parsley', 'Cress', 'Leeks','Garlic', 'Potatoes'] },
        { name: 'Tomato', type: "Vegetable", companion: ['Basil', 'Marigolds', 'Nasturtiums', 'Oregano', 'Parsley','Chives', 'Borage', 'Carrots','Celery', 'Dill', 'Mint', 'Onions', 'Garlic', 'Rosemary', 'Asparagus',], enemy: ['Broccoli', 'Cabbage', 'Cauliflower', 'Fennel', 'Corn', 'Potatoes','Peppers', 'Eggplant', 'Cucumbers','Kohlrabi', 'Rutabagas', 'Turnips' ] },
        { name: 'Turnip', type: "Vegetable", companion: ['Beets', 'Carrots', 'Celery', 'Chives', 'Onions','Spinach', 'Broccoli', 'Cabbage','Cauliflower', 'Lettuce', 'Radishes', 'Peas', 'Beans', 'Nasturtiums', 'Dill', 'Marigolds', 'Sage',], enemy: ['Mustard Greens', 'Potatoes', 'Parsnips', 'Sunflowers', 'Cress', 'Rutabagas' ] },
        { name: 'Winter Squash', type: "Vegetable", companion: ['Beans', 'Corn', 'Nasturtiums', 'Marigolds', 'Radishes','Oregano', 'Peas', 'Sunflowers','Sweet Alyssum', 'Chives', 'Tansy', 'Tarragon', 'Dill', 'Basil', 'Mint',], enemy: ['Potatoes', 'Pumpkins', 'Summer Squash', 'Broccoli', 'Cabbage', 'Cauliflower','Cucumbers', 'Melons', 'Tomatoes','Fennel', 'Rosemary', 'Sage' ] },
        { name: 'Zucchini', type: "Vegetable", companion: ['Beans', 'Nasturtiums', 'Marigolds', 'Radishes', 'Oregano','Peas', 'Sunflowers', 'Sweet Alyssum','Chives', 'Tansy', 'Tarragon', 'Dill', 'Basil', 'Mint', 'Lettuce',], enemy: ['Potatoes', 'Pumpkins', 'Winter Squash', 'Broccoli', 'Cabbage', 'Cauliflower','Cucumbers', 'Melons', 'Tomatoes','Fennel', 'Rosemary', 'Sage' ] },
        // { name: '', type: "Vegetable", companion: ['', '', '', '', '','', '', '','', '', '',], enemy: ['', '', '', '', '', '','', '', '','', '', '',] },
    
    
    
    
        // This is the Herb section
        { name: 'Anise Hyssop', type: "Herb", companion: ['Bee Balm', 'Echinacca', 'Lavender', 'Assters', 'Oregano','Agastache', 'Coreopsis', 'Marigold','Calendula', 'Nasturtium', 'Dill','Chamomile' ], enemy: ['Mint', 'Tomatoes', 'Fern', 'Hostas', 'Blueberries' ] },
        { name: 'Basil', type: "Herb", companion: ['Tomatoes', 'Oregano', 'Thyme', 'Marigolds', 'Nasturtium','Chamomile', 'Borage', 'Beans','Lettuce', 'Carrots', 'Radishes','Cucumbers', 'Spinach' ], enemy: ['Fennel', 'Cabbage', 'Anise', 'Rue', 'Sage', 'Mint','Rosemary', 'Cilantro' ] },
        { name: 'Bay Leaf', type: "Herb", companion: ['Rosemary', 'Thyme', 'Sage', 'Oregano', 'Lavender','Marjoram', 'Lemon Balm', 'Chives','Parsley', 'Dill', 'Chamomile','Beans' ], enemy: ['Trees', 'Potatoes' ] },
        { name: 'Bee Balm', type: "Herb", companion: ['Lavender', 'Echinacea', 'Agastache', 'Phlox', 'Rudbeckia','Asters', 'Monkshood', 'Chives','Marigolds', 'Calendula', 'Cosmos','Dill' ], enemy: ['Mint', 'Fennel', 'Basil', 'Oregano', 'Lemon Balm', 'Chrysanthemums' ] },
        { name: 'Bronze Fennel', type: "Herb", companion: ['Dill', 'Lavender', 'Chamomile', 'Borage', 'Cilantro','Roses', 'Sage', 'Thyme','Marigolds', 'Calendula', 'Nasturtium','Chives'], enemy: ['Other Fennel Types', 'Celery', 'Cauliflower', 'Cabbage', 'Kale', 'Garden Cress','Bok Choy', 'Broccoli', 'Brussel Sprouts','Mustard Plant', 'Lettuce', 'Carrots' ] },
        { name: 'Chamomile', type: "Herb", companion: ['Cauliflower', 'Cabbage', 'Kale', 'Garden Cress', 'Bok Choy','Broccoli', 'Brussel Sprouts', 'Onion','Garlic', 'Mint', 'Cucumber','Basil', 'Oregano', 'Thyme','Lavender', 'Marigolds', 'Nasturtium', 'Dill' , 'Calendula' ], enemy: ['Chrysanthemums', 'Fennel', 'Sunflowers', 'Black Walnut Tree', 'Lily of the Valley', 'Boxwood' ] },
        { name: 'Chervil', type: "Herb", companion: ['Lettuce', 'Rashishes', 'Carrots', 'Cilantro', 'Dill','Chives', 'Basil', 'Marigolds','Calendula', 'Nasturtium', 'Thyme' ], enemy: ['Fennel', 'Parsley', 'Cauliflower', 'Cabbage', 'Kale', 'Garden Cress','Bok Choy', 'Broccoli', 'Brussel Sprouts','Boxwood' ] },
        { name: 'Cilantro', type: "Herb", companion: ['Anise', 'Dill', 'Chervil', 'Basil', 'Mint','Nasturtium', 'Lettuce', 'Marigolds','Chives', 'Calendula', 'Thyme' ], enemy: ['Fennel', 'Lavender', 'Cauliflower', 'Cabbage', 'Kale', 'Garden Cress','Bok Choy', 'Broccoli', 'Brussel Sprouts','Chrysanthemums' ] },
        { name: 'Cress', type: "Herb", companion: ['Lettuce', 'Basil', 'Chervil', 'Dill', 'Chives','Spinach', 'Arugula', 'Marigolds','Calendula', 'Nasturtiums', 'Thyme' ], enemy: ['Fennel', 'Lavender', 'Chrysanthemums', 'Cauliflower', 'Cabbage', 'Kale','Bok Choy', 'Broccoli', 'Brussel Sprouts' ] },
        { name: 'Cumin', type: "Herb", companion: ['Coriander', 'Fennel', 'Dill', 'Nasturtium', 'Basil','Marjoram', 'Chamomile', 'Calendula','Sage', 'Tansy', 'Carrots','Tomatoes', 'Onions', 'Garlic','Lettuce', 'Spinach', 'Radishes', 'Peas', 'Beans', 'Cabbage' ], enemy: ['Sunflowers', 'Mustard', 'Chervil', 'Wild Radish', 'Amaranth', 'Sweetcorn','Dill' ] },
        { name: 'Dill', type: "Herb", companion: ['Cabbage', 'Lettuce', 'Onions', 'Corn', 'Cucumbers','Broccoli', 'Brussel Sprouts', 'Kale','Cauliflower', 'Tomatoes', 'Peppers','Radishes', 'Nasturtiums', 'Chamomile','Chamomile', 'Chives', 'Basil' ], enemy: ['Carrots', 'Parsnips', 'Lovage', 'Angelica', 'Cilantro', 'Anise','Fennel' ] },
        { name: 'Epazote', type: "Herb", companion: ['Beans', 'Corn', 'Squash', 'Tarragon', 'Marjoram','Savory', 'Oregano', 'Nasturtium','Tomatoes', 'Peppers', 'Onions','Garlic', 'Lettuce', 'Spinach','Radishes', 'Carrots', 'Chives', 'Cabbage' ], enemy: ['Mint', 'Basil', 'Cilantro', 'Fennel', 'Anise', 'Dill' ] },
        { name: 'Lavendar', type: "Herb", companion: ['Rosemary', 'Thyme', 'Marjoram', 'Catmint', 'Yarrow','Echinacea', 'Santolina', 'Roses','Penstemon', 'Sedum', 'Dianthus','Coreopsis', 'Agastache', 'Gaillardia','Lavandin', 'Achillea' ], enemy: ['Dill', 'Oregano', 'Basil', 'Mint', 'Sage' ] },
        { name: 'Lemon Balm', type: "Herb", companion: ['Basil', 'Chives', 'Marjoram', 'Oregano', 'Rosemary','Sage', 'Thyme', 'Mint','Nasturtium', 'Lavender', 'Tomatoes','Peppers', 'Lettuce', 'Spinach','Cabbage', 'Carrots', 'Swiss Chard', 'Radishes' ], enemy: ['Dill', 'Fennel', 'Rue', 'Tarragon' ] },
        { name: 'Lemongrass', type: "Herb", companion: ['Basil', 'Mint', 'Chives', 'Cilantro', 'Sage','Thyme', 'Lavender', 'Oregano','Tomatoes', 'Peppers', 'Onions','Garlic', 'Lettuce', 'Spinach','Cabbage', 'Carrots' ], enemy: ['Dill', 'Fennel', 'Tarragon', 'Parsley', 'Rosemary' ] },
        { name: 'Lovage', type: "Herb", companion: ['Tomatoes', 'Lettuce', 'Spinach', 'Cabbage', 'Carrots','Onions', 'Celery', 'Basil','Chervil', 'Marjoram', 'Mint','Sage', 'Thyme', 'Rosemary','Oregano', 'Cilantro', 'Parsley', 'Chives' ], enemy: ['Fennel', 'Dill', 'Rue', 'Lavender', 'Anise' ] },
        { name: 'Marjoram', type: "Herb", companion: ['Basil', 'Oregano', 'Thyme', 'Rosemary', 'Sage','Chives', 'Nasturtium', 'Tarragon','Lovage', 'Tomatoes', 'Peppers','Onions', 'Garlic', 'Lettuce','Spinach', 'Cabbage', 'Carrots' ], enemy: ['Fennel', 'Dill', 'Rue', 'Lavender', 'Anise' ] },
        { name: 'Mint', type: "Herb", companion: ['Chives', 'Dill', 'Rosemary', 'Sage', 'Cilantro','Cilantro', 'Nasturtium', 'Peppers','Lettuce', 'Spinach', 'Swiss Chard','Fennel', 'Radishes' ], enemy: ['Basil', 'Oregano', 'Thyme', 'Cabbage', 'Tomatoes', 'Carrots' ] },
        { name: 'Nasturtium ', type: "Herb", companion: ['Tomatoes', 'Cucumbers', 'Radishes', 'Cabbage', 'Kale','Beans', 'Sunflowers', 'Marigolds','Thyme', 'Rosemary', 'Zinnias','Lettuce', 'Spinach', 'Carrots','Peas', 'Beets', 'Dill', 'Chives', 'Basil', 'Parsley', 'Cilantro' ], enemy: ['Cabbage', 'Broccoli', 'Cauliflower' ] },
        { name: 'Oregano', type: "Herb", companion: ['Basil', 'Thyme', 'Rosemary', 'Sage', 'Marjoram','Chives', 'Nasturtium', 'Beans','Cabbage', 'Tomatoes', 'Lettuce','Spinach', 'Carrots', 'Onions','Garlic', 'Cilantro', 'Dill', 'Radishes' ], enemy: ['Fennel', 'Parsley', 'Mint' ] },
        { name: 'Papalo', type: "Herb", companion: ['Basil', 'Chives', 'Mint', 'Lettuce', 'Spinach','Arugula', 'Kale', 'Tomatoes','Peppers', 'Onions', 'Garlic','Carrots', 'Radishes', 'Cucumbers','Beans', 'Nasturtium', 'Marigolds' ], enemy: ['Dill', 'Fennel', 'Parsley', 'Cilantro' ] },
        { name: 'Parsley', type: "Herb", companion: ['Basil', 'Chives', 'Tomatoes', 'Carrots', 'Onions','Garlic', 'Roses', 'Celery','Spinach', 'Cabbage', 'Nasturtium','Marigolds', 'Thyme', 'Sage','Oregano', 'Rosemary' ], enemy: ['Asparagus', 'Lettuce', 'Mint', 'Dill', 'Fennel' ] },
        { name: 'Rosemary', type: "Herb", companion: ['Thyme', 'Sage', 'Lavender', 'Oregano', 'Marjoram','Chives', 'Nasturtium', 'Beans','Tomatoes', 'Peppers', 'Onions','Garlic', 'Carrots', 'Lettuce','Spinach', 'Cabbage', 'Mint' ], enemy: ['Basil', 'Cilantro', 'Parsley', 'Dill', 'Fennel' ] },
        { name: 'Sage', type: "Herb", companion: ['Rosemary', 'Thyme', 'Lavender', 'Oregano', 'Marjoram','Chives', 'Nasturtium', 'Beans','Tomatoes', 'Peppers', 'Onions','Garlic', 'Carrots', 'Lettuce','Spinach', 'Cabbage', 'Mint' ], enemy: ['Cilantro', 'Parsley', 'Basil', 'Dill', 'Fennel' ] },
        { name: 'Savory', type: "Herb", companion: ['Beans', 'Rosemary', 'Thyme', 'Oregano', 'Marjoram','Sage', 'Chives', 'Nasturtium','Tomatoes', 'Peppers', 'Onions','Garlic', 'Carrots', 'Lettuce','Spinach', 'Cabbage', 'Mint' ], enemy: ['Fennel', 'Dill', 'Parsley', 'Cilantro', 'Basil' ] },
        { name: 'Shiso', type: "Herb", companion: ['Cabbage', 'Cucumber', 'Eggplant', 'Tomato', 'Beans','Corn', 'Lettuce', 'Spinach','Strawberries', 'Radishes', 'Carrots','Onions', 'Garlic', 'Peppers','Peas', 'Marigolds', 'Chives', 'Nasturtium' ], enemy: ['Basil', 'Mint', 'Dill', 'Cilantro', 'Parsley' ] },
        { name: 'Sorrel', type: "Herb", companion: ['Chives', 'Lovage', 'Garlic', 'Onions', 'Lettuce','Spinach', 'Kale', 'Tomatoes','Peppers', 'Carrots', 'Radishes','Beets', 'Marjoram', 'Oregano','Thyme', 'Rosemary' ], enemy: ['Mint', 'Basil', 'Dill', 'Parsley', 'Cilantro' ] },
        { name: 'Stevia', type: "Herb", companion: ['Chives', 'Thyme', 'Oregano', 'Marjoram', 'Sage','Lavender', 'Rosemary', 'Parsley','Tomatoes', 'Peppers', 'Cucumbers','Beans', 'Lettuce', 'Spinach','Carrots', 'Onions', 'Garlic', 'Nasturtium' ], enemy: ['Mint', 'Basil', 'Dill', 'Parsley', 'Cilantro' ] },
        { name: 'Tarragon', type: "Herb", companion: ['Chives', 'Mint', 'Oregano', 'Thyme', 'Rosemary','Sage', 'Lavender', 'Tomatoes','Peppers', 'Onions', 'Garlic','Carrots', 'Lettuce', 'Spinach','Cabbage', 'Nasturtium' ], enemy: ['Dill', 'Fennel', 'Cilantro', 'Parsley', 'Basil' ] },
        { name: 'Thyme', type: "Herb", companion: ['Rosemary', 'Oregano', 'Marjoram', 'Lavender', 'Chives','Nasturtium', 'Tomatoes', 'Peppers','Onions', 'Garlic', 'Carrots','Lettuce', 'Spinach', 'Cabbage','Sage' ], enemy: ['Mint', 'Cilantro', 'Parsley', 'Dill', 'Basil' ] },
    // { name: '', type: "Herb", companion: ['', '', '', '', '','', '', '','', '', '',], enemy: ['', '', '', '', '', '','', '', '','', '', '',] },
    
    
    
    
        // This is the Fruit Section
        { name: 'Apple Tree', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavender', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Birch Trees', 'Cherry Trees', 'Plum Trees','Red Maples' ] },
        { name: 'Apricot Tress', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavender', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Cherry Trees', 'Plum Trees', 'Red Maples' ] },
        { name: 'Black Berry', type: "Fruit", companion: ['Blueberries', 'Raspberries', 'Strawberries', 'Gooseberries', 'Nasturtiums','Marigolds', 'Borage', 'Calendula','Chives', 'Dill', 'Tansy', 'Oregano', 'Mint', 'Chervil', 'Thyme',], enemy: ['Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Broccoli', 'Cabbage','Cauliflower', 'Sunflowers', 'Cucumbers','Melons', 'Pumpkin' ] },
        { name: 'Blueberry', type: "Fruit", companion: ['Azaleas', 'Rhododendrons', 'Lingonberries', 'Huckleberries', 'Cranberries','Strawberries', 'Raspberries', 'Blackberries','Gooseberries', 'Gooseberries', 'Marigolds', 'Lupines', 'Ferns', 'Highbush Cranberries', 'Chives',], enemy: ['Broccoli', 'Cabbage', 'Cauliflower', 'Potatoes', 'Tomatoes', 'Peppers','Eggplant', 'Sunflowers', 'Cucumbers','Melons', 'Pumpkins', 'Squash' ] },
        { name: 'Cantaloupe', type: "Fruit", companion: ['Nasturtiums', 'Marigolds', 'Sunflowers', 'Radishes', 'Oregano','Mint', 'Basil', 'Dill','Calendula', 'Borage', 'Chives', 'Tansy', 'Nasturtiums', 'Cucumbers', 'Beans',], enemy: ['Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Broccoli', 'Cabbage','Cauliflower', 'Pumpkins', 'Winter Squash','Watermelon', 'Honeydew Melon' ] },
        { name: 'Cherry Tree', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavender', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Birch Trees', 'Apricot Trees', 'Plum Tress','Red Maples' ] },
        { name: 'Currant', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavendar', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Birch Trees', 'Cherry Trees', 'Apricot Trees','Plum Trees', 'Red Maples' ] },
        { name: 'Elderberry', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavendar', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Birch Trees', 'Cherry Trees', 'Apricot Trees','Plum Trees' ] },
        { name: 'Fig Tree', type: "Fruit", companion: ['Daffodils', 'Crocuses', 'Hyacinths', 'Chives', 'Garlic','Marigolds', 'Nasturtiums', 'Yarrow','Tansy', 'Calendula', 'Dill', 'Fennel', 'Comfrey', 'Lavendar', 'Phacelia',], enemy: ['Grass', 'Potatoes', 'Tomatoes', 'Peppers', 'Eggplant', 'Black Walnut Trees','Birch Trees', 'Cherry Trees', 'Apricot Trees','Plum Trees' ] },
        { name: 'Gooseberry', type: "Fruit", companion: ['Blueberries', 'Currants', 'Raspberries', 'Blackberries', 'Marigolds','Borage', 'Calendula', 'Chives','Dill', 'Tansy', 'Oregano', 'Mint', 'Ferns', 'Azaleas', 'Rhododendrons' ], enemy: ['Broccoli', 'Cabbage', 'Cauliflower', 'Potatoes', 'Tomatoes', 'Peppers','Eggplant', 'Sunflowers', 'Cucumbers','Melons', 'Pumpkins' ] },
        { name: 'Grape', type: "Fruit", companion: ['Strawberries', 'Asparagus', 'Onions', 'Basil', 'Oregano','Hyssop', 'Chives', 'Lavender','Yarrow', 'Marigolds', 'Nasturtiums', 'Germaniums', 'Sunflowers', 'Sweet Woodruff', 'Alyssum' ], enemy: ['Lettuce', 'Onions', 'Collard Greens', 'Cabbage', 'Garlic', 'Grass','Black Walnut', 'Juniper, Pines', 'Blackberry','Raspberry', 'Wild Vines' ] },
        { name: 'Honeydew', type: "Fruit", companion: ['Radishes', 'Nasturtiums', 'Lettuce', 'Beans', 'Marigolds','Onions', 'Garlic', 'Basil','Tomatoes', 'Peppers', 'Carrots', 'Thyme', 'Oregano', 'Parsley', 'Spinach', 'Beets','Chives' ], enemy: ['Potatoes', 'Pumpkins', 'Squash', 'Watermelons', 'Cucumbers', 'Sunflowers','Corn', 'Fennel', 'Dill','Chervil' ] },
        { name: 'Kiwi(Hardy)', type: "Fruit", companion: ['Grapes', 'Blueberries', 'Blackberries', 'Raspberries', 'Strawberries','Currants', 'Lavender', 'Rosemary','Chives', 'Marigolds', 'Basil', 'Thyme', 'Oregano', 'Daffodils', 'Daisies', 'Lilies', 'Ferns', 'Hostas', 'Lupines', 'Daylilies',], enemy: ['Grass', 'Black Walnut', 'Fennel', 'Sunflowers', 'Pines', 'Tomatoes','Peppers', 'Potatoes', 'Pumpkins' ] },
        { name: 'Medlar Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Nasturtiums', 'Daffodils', 'Marigolds','Yarrow', 'Lavender', 'Thyme','Lupines', 'Strawberries', 'Rosemary', 'Sage', 'Basil', 'Oregano', 'Tansy', 'Crocuses', 'Calendula', 'Daisies', 'Hostas', 'Daylilies'], enemy: ['Grass', 'Black Walnut', 'Fennel', 'Sunflowers', 'Pines', 'Tomatoes','Peppers', 'Potatoes', 'Pumpkins' ] },
        { name: 'Mulberry Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Nasturtiums', 'Daffodils', 'Marigolds','Yarrow', 'Lavender', 'Thyme','Lupines', 'Strawberries', 'Rosemary', 'Sage', 'Basil', 'Oregano', 'Tansy', 'Crocuses', 'Calendula', 'Daisies', 'Hostas', 'Daylilies'], enemy: ['Grass', 'Black Walnut', 'Fennel', 'Sunflowers', 'Pines', 'Tomatoes','Peppers', 'Potatoes', 'Pumpkins' ] },
        { name: 'Nectarine Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Nasturtiums', 'Daffodils', 'Marigolds','Yarrow', 'Lavender', 'Thyme','Lupines', 'Strawberries', 'Rosemary', 'Sage', 'Basil', 'Oregano', 'Tansy', 'Crocuses', 'Calendula', 'Daisies', 'Hostas', 'Daylilies'], enemy: ['Grass', 'Black Walnut', 'Fennel', 'Sunflowers', 'Pines', 'Tomatoes','Peppers', 'Potatoes', 'Pumpkins' ] },
        { name: 'Pawpaw Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Borage', 'Yarrow', 'Dill', 'Marigold', 'Lavender', 'Nasturtiums','Strawberries', 'Clover', 'Hostas', 'Ferns', 'Wild Ginger', 'Bloodroot', 'Virginia Bluebells', 'Columbine' ], enemy: ['Grass', 'Black Walnut Trees', 'Sycamore', 'Poplar', 'Bowelder', 'Hickory','Oaks', 'Maples', 'Rhododendron','Azalea' ] },
        { name: 'Peach Tree', type: "Fruit", companion: ['Clover', 'Marigold', 'Nasturtium', 'Comfrey', 'Chamomile', 'Dill', 'Oregano', 'Borage','Lavender', 'Thyme', 'Nectarine Tree', 'Rosemary', 'Daffodil', 'Zinnias', 'Day Lilies', 'Cosmos', 'Bail', 'Onions' ], enemy: ['Grass', 'Black Walnut Tree', 'Fescue', 'English Ivy', 'Juniper', 'Maple','Wild Grape', 'Redroot Pigweed', 'Wild Mustard' ] },
        { name: 'Pear', type: "Fruit", companion: ['Comfrey', 'Chives', 'Dill', 'Nasturtium', 'Lavender','Marigold', 'Yarrow', 'Borage','Thyme', 'Oregano', 'Daffodils', 'Catmint', 'Lungwort', 'Tulips', 'Chamomile', 'Strawberries', 'Cosmos', 'Hostas' ], enemy: ['Grass', 'Black Walnut Tree', 'Fescue', 'English Ivy', 'Juniper', 'Maple','Horseweed', 'Canadian Thistle' ] },
        { name: 'Persimmon Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Dill', 'Nasturtium', 'Lavender','Marigold', 'Yarrow', 'Borage','Thyme', 'Oregano', 'Daffodils', 'Catmint', 'Lungwort', 'Tulips', 'Chamomile', 'Strawberries', 'Cosmos', 'Hostas' ], enemy: ['Grass', 'Black Walnut Tree', 'Fescue', 'English Ivy', 'Juniper', 'Maple','Horseweed', 'Canadian Thistle' ] },
        { name: 'Plum Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Dill', 'Nasturtium', 'Lavender','Marigold', 'Yarrow', 'Borage','Thyme', 'Oregano', 'Daffodils', 'Catmint', 'Lungwort', 'Tulips', 'Chamomile', 'Strawberries', 'Cosmos', 'Hostas' ], enemy: ['Grass', 'Black Walnut Tree', 'Fescue', 'English Ivy', 'Juniper', 'Maple','Horseweed', 'Canadian Thistle'] },
        { name: 'Pumpkin', type: "Fruit", companion: ['Corn', 'Beans', 'Radishes', 'Nasturtiums', 'Oregano','Marigolds', 'Sunflowers', 'Dill','Catnip', 'Tansy', 'Mint', 'Basil', 'Chives', 'Thyme', 'Sage',], enemy: ['Potatoes', 'Squash', 'Cucumbers', 'Melons', 'Tomatoes', 'Broccoli','Cabbage', 'Cauliflower', 'Strawberries','Carrots', 'Onions' ] },
        { name: 'Quince Tree', type: "Fruit", companion: ['Comfrey', 'Chives', 'Dill', 'Nasturtium', 'Lavender','Marigold', 'Yarrow', 'Borage','Thyme', 'Oregano', 'Daffodils', 'Catmint', 'Lungwort', 'Tulips', 'Chamomile', 'Strawberries', 'Cosmos', 'Hostas',], enemy: ['Grass', 'Clover', 'Other fruit trees' ] },
        { name: 'Raspberry', type: "Fruit", companion: ['Comfrey', 'Chives', 'Garlic', 'Tansy', 'Nasturtiums','Marigold', 'Lupine', 'Yarrow','Borage', 'Carrots', 'Dill', 'Daffodils', 'Catnip', 'Lettuce', 'Tulips', 'Cosmos',], enemy: ['Potatoes', 'Tomatoes', 'Eggplant', 'Strawberries', 'Blackberries', 'Bell Peppers' ] },
        { name: 'Rhubarb', type: "Fruit", companion: ['Beans', 'Lettuce', 'Strawberries', 'Onions', 'Nasturtiums','Chives', 'Carrots', 'Catnip','Daffodils', 'Tulips', 'Lungwort', 'Cosmos', 'Lavender', 'Chamomile', 'Hostas',], enemy: ['Potatoes', 'Tomatoes', 'Eggplant', 'Peppers', 'Blackberries', 'Broccoli','Cabbage' ] },
        { name: 'Seaberry', type: "Fruit", companion: ['Peas', 'Beans', 'Comfrey', 'Chives', 'Lupine','Yarrow', 'Nasturtium', 'Borage','Calendula', 'Daffodils', 'Tulips', 'Cosmos', 'Lavender', 'Chamomile', 'Hostas',], enemy: ['Grass', 'Black Walnut', 'Broccoli', 'Cabbage' ] },
        { name: 'Serviceberry', type: "Fruit", companion: ['Lupine', 'Comfrey', 'Chives', 'Nasturtiums', 'Yarrow','Borage', 'Lavender', 'Daffodils','Tulips', 'Cosmos', 'Hostas', 'Lungwort', 'Chamomile' ], enemy: ['Grass', 'Black Walnut', 'Cabbage', 'Broccoli' ] },
        { name: 'Strawberry', type: "Fruit", companion: ['Borage', 'Lupine', 'Marigold', 'Nasturtium', 'Chamomile','Thyme', 'Spinach', 'Lettuce','Carrots', 'Onions', 'Garlic', 'Daffodils', 'Tulips', 'Cosmos', 'Lavender', 'Chives'], enemy: ['Cabbage', 'Broccoli', 'Potatoes', 'Tomatoes', 'Eggplant', 'Peppers','Blackberries', 'Raspberries', 'Clover','Mint' ] },
        { name: 'Watermelon', type: "Fruit", companion: ['Nasturtium', 'Radish', 'Marigold', 'Sunflower', 'Basil','Mint', 'Cucumber', 'Pumpkin','Oregano', 'Chamomile', 'Lettuce', 'Zinnias', 'Dill', 'Alyssum', 'Borage',], enemy: ['Corn', 'Potatoes', 'Squash', 'Tomatoes', 'Peppers', 'Broccoli','Cabbage', 'Lavender', 'Rosemary','Fennel', 'Onions', 'Garlic',] },
       // { name: '', type: "Fruit", companion: ['', '', '', '', '','', '', '','', '', '', '', '', '', '',], enemy: ['', '', '', '', '', '','', '', '','', '', '',] },
    
    
    
        // Add more options and their companions as needed
    ]

    selectPlantButton.addEventListener("click", function() {
        // Clear previous checkboxes
        Object.values(plantColumns).forEach(function(column) {
            column.innerHTML = "";
        });

        // Populate the container with checkboxes for options
        plantOptions.forEach(function(option) {
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = option.name;

            var label = document.createElement("label");
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(option.name));

            plantColumns[option.type].appendChild(label);
        });

        // Show the container and the button
        selectPlantOptions.style.display = "block";
        confirmSelectionButton.style.display = "inline-block"; // Display the button
    });

    // Function to update companions based on selected options
    function updateCompanions() {
        companionDropdown.innerHTML = ""; // Clear previous options

        // Get selected option
        var selectedOption = plantDropdown.value;
        var option = plantOptions.find(item => item.name === selectedOption);

        // Populate companions dropdown based on the selected option
        if (option) {
            option.companion.forEach(function(companion) {
                var optionElement = document.createElement("option");
                optionElement.text = companion;
                companionDropdown.appendChild(optionElement);
            });

            // Display the corresponding image
            plantImage.src = option.image;
        }
    }

    // Event listener for the plant dropdown change event
    plantDropdown.addEventListener("change", function() {
        updateCompanions();
    });

    // Function to confirm the selection and hide the options container
    function confirmSelection() {
        // Get selected options
        var selectedOptions = [];
        var checkboxes = document.querySelectorAll("#checkboxContainer input[type='checkbox']:checked");
        checkboxes.forEach(function(checkbox) {
            selectedOptions.push(checkbox.value);
        });

        // Update the plant dropdown with selected options
        plantDropdown.innerHTML = "";
        selectedOptions.forEach(function(option) {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            plantDropdown.appendChild(optionElement);
        });

        // Add placeholder option to the plant dropdown
        var placeholderOption = document.createElement("option");
        placeholderOption.text = "Selected Plant";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        plantDropdown.appendChild(placeholderOption);

        // Hide the container and the button
        selectPlantOptions.style.display = "none";
        confirmSelectionButton.style.display = "none"; // Hide the button
    }

    // Event listener for the "Confirm Selection" button
    confirmSelectionButton.addEventListener("click", confirmSelection);
});