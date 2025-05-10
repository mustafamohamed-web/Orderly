const data = {
  categories: [
    {
      name: 'Beverages',
      image: '/images/beverages.jpg',
      description: 'Refreshing drinks to complement your meal',
      displayOrder: 1,
      isActive: true
    },
    {
      name: 'Breakfast',
      image: '/images/breakfast.jpg',
      description: 'Start your day with our delicious breakfast options',
      displayOrder: 2,
      isActive: true
    },
    {
      name: 'Burgers',
      image: '/images/burgers.jpg',
      description: 'Classic burgers made with quality ingredients',
      displayOrder: 3,
      isActive: true
    },
    {
      name: 'Sides',
      image: '/images/fries.jpg',
      description: 'Classic burgers made with quality ingredients',
      displayOrder: 4,
      isActive: true
    }
  ],

  // Renamed from 'products' to 'foodItems' to match our model naming
  foodItems: [
    {
      category: 'Beverages',
      name: 'Coca-Cola',
      description: 'Classic refreshing cola drink',
      price: 1,
      nutritionInfo: {
        calories: 120,
        protein: 0,
        carbs: 30,
        fat: 0
      },
      image: '/images/t-mcdonalds-Coca-Cola-Classic-Small.jpg',
      available: true,
      ingredients: ['Carbonated water', 'High fructose corn syrup', 'Caramel color', 'Phosphoric acid', 'Natural flavors', 'Caffeine']
    },
    {
      category: 'Beverages',
      name: 'Vanilla Shake',
      description: 'Creamy vanilla flavored milkshake',
      price: 1.5,
      nutritionInfo: {
        calories: 360,
        protein: 7,
        carbs: 58,
        fat: 10
      },
      image: '/images/t-mcdonalds-Vanilla-McCafe-Shake-Medium.jpg',
      available: true,
      ingredients: ['Milk', 'Vanilla ice cream', 'Vanilla syrup', 'Whipped cream']
    },
    {
      category: 'Beverages',
      name: 'Hot Chocolate',
      description: 'Rich and creamy hot chocolate',
      price: 2,
      nutritionInfo: {
        calories: 170,
        protein: 5,
        carbs: 26,
        fat: 6
      },
      image: '/images/t-mcdonalds-McCafe-Hot-Chocolate-Medium.jpg',
      available: true,
      ingredients: ['Milk', 'Chocolate syrup', 'Whipped cream']
    },
    {
      category: 'Breakfast',
      name: 'Bacon & Biscuit',
      description: 'Savory bacon on a freshly baked biscuit',
      price: 1.9,
      nutritionInfo: {
        calories: 90,
        protein: 12,
        carbs: 28,
        fat: 14
      },
      image: '/images/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit.jpg',
      available: true,
      ingredients: ['Biscuit', 'Bacon', 'Egg', 'Cheese']
    },
    {
      category: 'Breakfast',
      name: 'Blueberry Muffin',
      description: 'Sweet muffin with fresh blueberries',
      price: 1.5,
      nutritionInfo: {
        calories: 120,
        protein: 3,
        carbs: 24,
        fat: 4
      },
      image: '/images/t-blueberry-muffin.jpg',
      available: true,
      ingredients: ['Flour', 'Sugar', 'Blueberries', 'Butter', 'Eggs']
    },
    {
      category: 'Breakfast',
      name: 'Big Breakfast',
      description: 'Complete breakfast with eggs, sausage, biscuit, and hash browns',
      price: 3,
      nutritionInfo: {
        calories: 430,
        protein: 19,
        carbs: 30,
        fat: 24
      },
      image: '/images/s-mcdonalds-Big-Breakfast-Regular-Size-Biscuit.jpg',
      available: true,
      ingredients: ['Eggs', 'Sausage patty', 'Biscuit', 'Hash browns']
    },
    {
      category: 'Burgers',
      name: 'Big Mac',
      description: 'Iconic burger with two beef patties, special sauce, lettuce, cheese, pickles, and onions',
      price: 1.9,
      nutritionInfo: {
        calories: 200,
        protein: 24,
        carbs: 45,
        fat: 26
      },
      image: '/images/t-mcdonalds-Big-Mac.jpg',
      available: true,
      ingredients: ['Beef patty', 'Special sauce', 'Lettuce', 'American cheese', 'Pickles', 'Onions', 'Sesame seed bun']
    },
    {
      category: 'Burgers',
      name: 'Hamburger',
      description: 'Classic hamburger with beef patty, ketchup, mustard, pickles, and onions',
      price: 1.5,
      nutritionInfo: {
        calories: 410,
        protein: 25,
        carbs: 40,
        fat: 20
      },
      image: '/images/t-mcdonalds-Hamburger.jpg',
      available: true,
      ingredients: ['Beef patty', 'Ketchup', 'Mustard', 'Pickles', 'Onions', 'Bun']
    },
    {
      category: 'Burgers',
      name: 'McDouble',
      description: 'Double beef patty with cheese, pickles, onions, ketchup, and mustard',
      price: 3,
      nutritionInfo: {
        calories: 320,
        protein: 22,
        carbs: 33,
        fat: 18
      },
      image: '/images/t-mcdonalds-McDouble.jpg',
      available: true,
      ingredients: ['Beef patties', 'American cheese', 'Pickles', 'Onions', 'Ketchup', 'Mustard', 'Bun']
    }
  ]
}

module.exports = data
