const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

const menuData = {
  breakfast: [
    {
      name: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup",
      price: "$8",
      badge: "popular",
      badgeText: "Popular"
    },
    {
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and cheese on a toasted roll",
      price: "$7"
    },
    {
      name: "Fruit Bowl",
      description: "Fresh seasonal fruit served chilled",
      price: "$6",
      badge: "vegetarian",
      badgeText: "Vegetarian"
    }
  ],

  lunch: [
    {
      name: "Classic Burger",
      description: "Beef burger with fries",
      price: "$12",
      badge: "popular",
      badgeText: "Popular"
    },
    {
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine, and Caesar dressing",
      price: "$11"
    },
    {
      name: "Tomato Soup",
      description: "Warm tomato soup with herbs",
      price: "$7",
      badge: "vegetarian",
      badgeText: "Vegetarian"
    }
  ],

  brunch: [
    {
      name: "Chicken & Waffles",
      description: "Crispy chicken with Belgian waffles",
      price: "$14",
      badge: "chef-choice",
      badgeText: "Chef's Choice"
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with avocado and eggs",
      price: "$10",
      badge: "vegetarian",
      badgeText: "Vegetarian"
    },
    {
      name: "Brunch Mimosa",
      description: "Sparkling brunch favorite",
      price: "$9"
    }
  ],

  dinner: [
    {
      name: "Grilled Salmon",
      description: "Salmon served with rice and vegetables",
      price: "$18"
    },
    {
      name: "Steak Pasta",
      description: "Sliced steak over creamy pasta",
      price: "$19"
    },
    {
      name: "Veggie Bowl",
      description: "Roasted vegetables over quinoa",
      price: "$15",
      badge: "vegetarian",
      badgeText: "Vegetarian"
    }
  ],

  happyHour: [
    {
      name: "Mini Sliders",
      description: "Three mini burgers",
      price: "$6"
    },
    {
      name: "Loaded Fries",
      description: "Fries topped with cheese and bacon",
      price: "$7"
    },
    {
      name: "Mozzarella Sticks",
      description: "Crispy sticks with marinara sauce",
      price: "$6"
    }
  ],

  drinks: [
    {
      name: "Fresh Lemonade",
      description: "Cold lemonade made fresh daily",
      price: "$4"
    },
    {
      name: "Iced Coffee",
      description: "Cold brew coffee over ice",
      price: "$5"
    },
    {
      name: "Berry Smoothie",
      description: "Mixed berries blended with yogurt",
      price: "$6"
    }
  ],

  desserts: [
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake with a soft center",
      price: "$6",
      badge: "popular",
      badgeText: "Popular"
    },
    {
      name: "Cheesecake",
      description: "Creamy cheesecake with strawberry topping",
      price: "$7"
    },
    {
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream with syrup and whipped cream",
      price: "$5"
    }
  ],

  kids: [
    {
      name: "Mini Pancakes",
      description: "Kid-sized pancake stack with syrup",
      price: "$5",
      badge: "popular",
      badgeText: "Popular"
    },
    {
      name: "Grilled Cheese",
      description: "Toasted sandwich with melted cheese",
      price: "$6"
    },
    {
      name: "Chicken Tenders",
      description: "Crispy tenders served with fries",
      price: "$7"
    }
  ],

  seasonal: [
    {
      name: "Pumpkin Waffles",
      description: "Seasonal waffles with pumpkin spice flavor",
      price: "$11",
      badge: "chef-choice",
      badgeText: "Chef's Choice"
    },
    {
      name: "Spicy Apple Cider",
      description: "Warm cider with cinnamon and spice",
      price: "$5",
      badge: "spicy",
      badgeText: "Spicy"
    },
    {
      name: "Harvest Bowl",
      description: "Roasted vegetables, grains, and herb dressing",
      price: "$12",
      badge: "vegetarian",
      badgeText: "Vegetarian"
    }
  ]
};

function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    breakfast: "Breakfast Menu",
    lunch: "Lunch Menu",
    brunch: "Brunch Menu",
    dinner: "Dinner Menu",
    happyHour: "Happy Hour Menu",
    drinks: "Drinks Menu",
    desserts: "Desserts Menu",
    kids: "Kids Menu",
    seasonal: "Seasonal Specials"
  };

  if (category === "brunch") {
    menuTitle.innerHTML = `
      Brunch Menu
      <p class="weekend-msg">Available Saturdays and Sundays only</p>
    `;
  } else {
    menuTitle.textContent = categoryTitles[category];
  }

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>
        ${item.name}
        ${item.badge ? `<span class="badge ${item.badge}">${item.badgeText}</span>` : ""}
      </h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}

displayMenu("breakfast");
buttons[0].classList.add("active");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});