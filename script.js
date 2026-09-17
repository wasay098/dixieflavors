const recipes = [
  {
    id: "seafood-gumbo-jambalaya",
    title: "Seafood Gumbo",
    state: "Louisiana",
    region: "South & Gulf Coast",
    cuisine: "Cajun & Creole",
    time: 70,
    featured: 1,
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=900&q=82",
    description: "A dark roux, a holy trinity of vegetables, and a generous handful of Gulf seafood make this Louisiana classic a bowl worth gathering around.",
    ingredients: [
      "1 lb shrimp, peeled and deveined",
      "8 oz andouille sausage, sliced",
      "1 cup onion, celery, and bell pepper",
      "4 cups seafood stock",
      "2 tbsp flour + 2 tbsp oil",
      "Cooked rice, scallions, and hot sauce"
    ],
    steps: [
      "Build a dark roux with flour and oil, stirring until deep caramel brown.",
      "Add the vegetables and sausage; cook until softened and fragrant.",
      "Whisk in stock and simmer for 35 minutes to thicken.",
      "Fold in shrimp for the final 5 minutes. Serve over rice."
    ]
  },

  {
    id: "smoked-beef-brisket",
    title: "Smoked Beef Brisket",
    state: "Texas",
    region: "South & Gulf Coast",
    cuisine: "Central Texas Pit Barbecue",
    time: 510,
    featured: 2,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82",
    description: "Low, slow, and seasoned simply — this Texas classic is all about patience, smoke, and a peppery bark.",
    ingredients: [
      "1 whole beef brisket, 10–12 lb",
      "2 tbsp kosher salt",
      "2 tbsp coarse black pepper",
      "1 tbsp garlic powder",
      "Post oak or hickory chunks",
      "Butcher paper for wrapping"
    ],
    steps: [
      "Trim the brisket, leaving a thin fat cap. Season generously on all sides.",
      "Smoke at 250°F until the bark is deeply set, about 6 hours.",
      "Wrap in butcher paper and continue until probe-tender.",
      "Rest for at least 45 minutes, then slice against the grain."
    ]
  },

  {
    id: "shrimp-and-grits",
    title: "Shrimp and Grits",
    state: "South Carolina & Georgia",
    region: "South & Gulf Coast",
    cuisine: "Lowcountry & Soul Food",
    time: 35,
    featured: 3,
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=82",
    description: "Creamy stone-ground grits meet smoky shrimp in this Lowcountry comfort food staple.",
    ingredients: [
      "1 cup stone-ground grits",
      "1 lb large shrimp",
      "4 oz smoked bacon",
      "1 cup sharp cheddar",
      "2 garlic cloves, minced",
      "Green onions and lemon"
    ],
    steps: [
      "Simmer grits with water and a pinch of salt until creamy, 25–30 minutes.",
      "Crisp bacon in a skillet and reserve the drippings.",
      "Sauté shrimp with garlic in the drippings until just pink.",
      "Stir cheddar into grits and finish with shrimp, bacon, and lemon."
    ]
  },

  {
    id: "nashville-hot-chicken",
    title: "Nashville Hot Chicken",
    state: "Tennessee",
    region: "South & Gulf Coast",
    cuisine: "Nashville Hot / Southern Comfort",
    time: 55,
    featured: 4,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=82",
    description: "Crispy, cayenne-kissed chicken with a cooling pickle finish — a little heat, a lot of comfort.",
    ingredients: [
      "4 boneless chicken thighs",
      "1 cup buttermilk",
      "1 cup flour",
      "2 tbsp cayenne pepper",
      "1 tbsp brown sugar",
      "Pickles and white bread"
    ],
    steps: [
      "Marinate chicken in buttermilk and a pinch of salt for 4 hours.",
      "Dredge in seasoned flour, pressing the coating firmly onto each piece.",
      "Fry at 350°F until crisp and cooked through.",
      "Brush with spiced oil and serve on bread with pickles."
    ]
  },

  {
    id: "ny-style-thin-crust-pizza",
    title: "NY-Style Thin Crust Pizza",
    state: "New York",
    region: "Northeast & Mid-Atlantic",
    cuisine: "New York Italian-American / Deli",
    time: 45,
    featured: 5,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=82",
    description: "A foldable, blistered slice with a bright tomato sauce and just enough cheese.",
    ingredients: [
      "1 ball pizza dough",
      "½ cup crushed tomatoes",
      "6 oz low-moisture mozzarella",
      "1 tbsp olive oil",
      "Dried oregano and chili flakes",
      "Fresh basil"
    ],
    steps: [
      "Stretch dough thin on an oiled sheet or pizza steel.",
      "Spread with tomatoes, leaving a small rim. Add cheese and seasonings.",
      "Bake at the hottest setting until the crust blisters and cheese bubbles.",
      "Finish with basil, olive oil, and a pinch of chili."
    ]
  },

  {
    id: "warm-buttered-lobster-roll",
    title: "Warm Buttered Lobster Roll",
    state: "Maine / New England",
    region: "Northeast & Mid-Atlantic",
    cuisine: "Coastal Seafood Shack",
    time: 25,
    featured: 6,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=82",
    description: "Sweet lobster, toasted split-top buns, and a pool of lemony butter — summer in every bite.",
    ingredients: [
      "1 lb cooked lobster meat",
      "4 split-top brioche buns",
      "4 tbsp unsalted butter",
      "1 tsp lemon zest",
      "Celery leaves, finely sliced",
      "Lemon wedges"
    ],
    steps: [
      "Warm lobster gently in 2 tablespoons of butter; do not let it simmer.",
      "Toast the buns in the remaining butter until golden on the edges.",
      "Toss lobster with lemon zest and celery leaves.",
      "Pile into buns and serve with lemon wedges."
    ]
  },

  {
    id: "philly-cheesesteak",
    title: "Philly Cheesesteak",
    state: "Pennsylvania",
    region: "Northeast & Mid-Atlantic",
    cuisine: "Delaware Valley Comfort Food",
    time: 30,
    featured: 7,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=82",
    description: "Thin-sliced beef, caramelized onions, and gooey cheese tucked into a soft roll.",
    ingredients: [
      "1 lb ribeye, thinly sliced",
      "2 hoagie rolls",
      "1 yellow onion",
      "4 slices provolone",
      "1 tbsp neutral oil",
      "Salt and cracked pepper"
    ],
    steps: [
      "Caramelize sliced onion in a hot skillet until golden and soft.",
      "Sear beef in the same pan, seasoning as it cooks.",
      "Divide beef, top with cheese, and cover briefly to melt.",
      "Load into toasted rolls with the onions."
    ]
  },

  {
    id: "maryland-crab-cakes",
    title: "Maryland Crab Cakes",
    state: "Maryland",
    region: "Northeast & Mid-Atlantic",
    cuisine: "Chesapeake Bay Seafood",
    time: 40,
    featured: 8,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=900&q=82",
    description: "Lump crab, a whisper of Old Bay, and just enough binder to hold it all together.",
    ingredients: [
      "1 lb lump crab meat",
      "1 egg",
      "¼ cup mayonnaise",
      "½ cup cracker crumbs",
      "1 tsp Old Bay",
      "Lemon and parsley"
    ],
    steps: [
      "Pick through crab meat and fold gently with the egg, mayonnaise, and seasoning.",
      "Add crumbs until the mixture just holds together.",
      "Shape into cakes and chill for 20 minutes.",
      "Pan-sear until deeply golden on both sides. Serve with lemon."
    ]
  },

  {
    id: "chicago-deep-dish-pizza",
    title: "Chicago Deep-Dish Pizza",
    state: "Illinois",
    region: "Midwest & Great Lakes",
    cuisine: "Chicago Deep-Dish & Diner Classic",
    time: 75,
    featured: 9,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=82",
    description: "Buttery crust, a blanket of mozzarella, and chunky tomato sauce baked in a cast-iron pan.",
    ingredients: [
      "1 deep-dish dough",
      "8 oz mozzarella",
      "½ lb Italian sausage",
      "1 cup crushed tomatoes",
      "¼ cup grated parmesan",
      "Butter for the pan"
    ],
    steps: [
      "Press buttery dough up the sides of a well-buttered cast-iron pan.",
      "Layer mozzarella, sausage, and parmesan from bottom to top.",
      "Spoon tomato sauce over everything to protect the cheese.",
      "Bake until the crust is crisp and the center is bubbling."
    ]
  },

  {
    id: "cincinnati-chili-five-way",
    title: "Cincinnati Chili (5-Way)",
    state: "Ohio",
    region: "Midwest & Great Lakes",
    cuisine: "Cincinnati Chili Parlor",
    time: 80,
    featured: 10,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=82",
    description: "Spiced, silky chili ladled over spaghetti and finished five ways with beans, onion, and cheese.",
    ingredients: [
      "1 lb ground beef",
      "1 onion, grated",
      "2 cups crushed tomatoes",
      "Cinnamon, allspice, and cocoa",
      "Cooked spaghetti",
      "Cheddar, beans, and onion"
    ],
    steps: [
      "Simmer beef, onion, and tomatoes with the warm spice blend.",
      "Cook uncovered until silky and thick, about 60 minutes.",
      "Spoon over spaghetti for the two-way base.",
      "Layer cheese, beans, and onion for the full five-way finish."
    ]
  },

  {
    id: "fried-cheese-curds",
    title: "Fried Beer-Battered Cheese Curds",
    state: "Wisconsin",
    region: "Midwest & Great Lakes",
    cuisine: "Dairy & Taproom Classic",
    time: 30,
    featured: 11,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=82",
    description: "Squeaky cheese curds in a crisp lager batter — a Wisconsin favorite for sharing.",
    ingredients: [
      "8 oz Wisconsin cheese curds",
      "1 cup all-purpose flour",
      "1 cup cold lager",
      "1 tsp baking powder",
      "Canola oil for frying",
      "Ranch or mustard for serving"
    ],
    steps: [
      "Whisk flour, baking powder, and cold lager into a loose batter.",
      "Heat oil to 365°F and keep the batter chilled.",
      "Dip curds, letting excess drip away, and fry until golden.",
      "Drain well and serve immediately with a bright dipping sauce."
    ]
  },

  {
    id: "sweet-smoky-burnt-ends",
    title: "Sweet & Smoky Burnt Ends",
    state: "Missouri",
    region: "Midwest & Great Lakes",
    cuisine: "Kansas City BBQ",
    time: 420,
    featured: 12,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
    description: "Sticky cubes of brisket glazed in a smoky-sweet sauce until the edges caramelize.",
    ingredients: [
      "3 lb smoked brisket point",
      "½ cup barbecue sauce",
      "2 tbsp brown sugar",
      "1 tbsp butter",
      "½ tsp smoked paprika",
      "Pickles for serving"
    ],
    steps: [
      "Cube rested brisket point into generous bite-sized pieces.",
      "Toss with barbecue sauce, sugar, butter, and paprika.",
      "Return to the smoker uncovered until the edges caramelize.",
      "Rest for 10 minutes and serve with pickles."
    ]
  },

  {
    id: "green-chile-enchiladas",
    title: "Green Chile Enchiladas",
    state: "New Mexico",
    region: "American Southwest",
    cuisine: "Hatch Chile & Southwestern",
    time: 50,
    featured: 13,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=82",
    description: "Roasted Hatch chiles, melty cheese, and corn tortillas layered into a bubbling Southwestern classic.",
    ingredients: [
      "10 corn tortillas",
      "2 cups roasted green chile sauce",
      "2 cups Monterey Jack",
      "2 cups shredded chicken",
      "½ onion, diced",
      "Cilantro and lime"
    ],
    steps: [
      "Warm tortillas until flexible and spoon in chicken, cheese, and onion.",
      "Roll and nestle seam-side down in a baking dish.",
      "Cover with green chile sauce and the remaining cheese.",
      "Bake until bubbling; finish with cilantro and lime."
    ]
  },

  {
    id: "sizzling-beef-fajitas",
    title: "Sizzling Beef Fajitas",
    state: "Texas",
    region: "American Southwest",
    cuisine: "Tex-Mex Fusion",
    time: 35,
    featured: 14,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=82",
    description: "Charred peppers, limey steak, and warm tortillas make this skillet supper a weeknight hero.",
    ingredients: [
      "1 lb flank steak",
      "2 bell peppers",
      "1 onion",
      "Juice of 2 limes",
      "2 tsp cumin",
      "Warm flour tortillas"
    ],
    steps: [
      "Marinate steak in lime juice, cumin, salt, and oil for 20 minutes.",
      "Sear steak over high heat and rest before slicing.",
      "Char peppers and onions in the same pan.",
      "Serve sizzling with tortillas and your favorite toppings."
    ]
  },

  {
    id: "sonoran-chimichanga",
    title: "Sonoran Chimichanga",
    state: "Arizona",
    region: "American Southwest",
    cuisine: "Sonoran / Mexican Border",
    time: 45,
    featured: 15,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=82",
    description: "A crisp, golden burrito filled with savory beans, cheese, and spiced beef.",
    ingredients: [
      "4 large flour tortillas",
      "2 cups seasoned shredded beef",
      "1 cup refried beans",
      "1 cup pepper jack",
      "Oil for frying",
      "Salsa, crema, and lettuce"
    ],
    steps: [
      "Layer beans, beef, and cheese in the center of each tortilla.",
      "Fold tightly into neat parcels and secure with toothpicks.",
      "Fry seam-side down until crisp and deeply golden.",
      "Top with salsa, crema, and shredded lettuce."
    ]
  },

  {
    id: "california-fish-tacos",
    title: "Cal-Mex Fish Tacos",
    state: "Southern California",
    region: "American Southwest",
    cuisine: "Cal-Mex & Baja Street Food",
    time: 35,
    featured: 16,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=82",
    description: "Crisp fish, crunchy cabbage, and a bright crema wrapped in a warm corn tortilla.",
    ingredients: [
      "1 lb white fish fillets",
      "½ cup flour",
      "8 corn tortillas",
      "2 cups shredded cabbage",
      "½ cup lime crema",
      "Cilantro and jalapeño"
    ],
    steps: [
      "Season fish and coat lightly in flour.",
      "Pan-fry until the crust is crisp and fish flakes easily.",
      "Warm tortillas and layer with cabbage and fish.",
      "Finish with lime crema, cilantro, and jalapeño."
    ]
  },

  {
    id: "mission-burrito",
    title: "Mission Burrito",
    state: "Northern California",
    region: "West Coast & Pacific",
    cuisine: "California Farm-to-Table / Fresh",
    time: 40,
    featured: 17,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=82",
    description: "A foil-wrapped giant layered with beans, rice, salsa, avocado, and your favorite filling.",
    ingredients: [
      "4 large flour tortillas",
      "2 cups cilantro rice",
      "2 cups pinto beans",
      "1 lb carne asada or mushrooms",
      "Pico de gallo and guacamole",
      "Sour cream and shredded cheese"
    ],
    steps: [
      "Warm tortillas until soft and flexible.",
      "Layer rice, beans, filling, salsa, guacamole, and cheese in a line.",
      "Fold the sides inward, then roll firmly into a burrito.",
      "Toast seam-side down briefly and wrap in foil."
    ]
  },

  {
    id: "cedar-planked-salmon",
    title: "Cedar-Planked Salmon",
    state: "Washington / Oregon",
    region: "West Coast & Pacific",
    cuisine: "Pacific Northwest Coastal",
    time: 35,
    featured: 18,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=82",
    description: "Wild salmon takes on cedar smoke and a glossy maple-mustard glaze in this Northwest favorite.",
    ingredients: [
      "1 salmon side",
      "1 untreated cedar plank",
      "2 tbsp maple syrup",
      "1 tbsp Dijon mustard",
      "Lemon slices",
      "Dill and flaky salt"
    ],
    steps: [
      "Soak cedar plank for at least 30 minutes.",
      "Whisk maple syrup and mustard; brush over the salmon.",
      "Grill plank over medium heat until salmon flakes at the center.",
      "Rest for 5 minutes and finish with dill and lemon."
    ]
  },

  {
    id: "poke-bowl-loco-moco",
    title: "Hawaiian Ahi Poke Bowl",
    state: "Hawaii",
    region: "West Coast & Pacific",
    cuisine: "Native Hawaiian & Island Food",
    time: 30,
    featured: 19,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
    description: "Bright ahi poke, rice, and island toppings come together in a fresh bowl inspired by Hawaiian poke.",
    ingredients: [
      "1 lb sushi-grade ahi",
      "3 cups cooked rice",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
      "Avocado and cucumber",
      "Scallions, sesame, and furikake"
    ],
    steps: [
      "Cube the ahi and toss gently with soy, sesame oil, and scallions.",
      "Build bowls with warm rice, cucumber, and avocado.",
      "Pile poke on top and add a generous sprinkle of furikake.",
      "Serve immediately while the fish is bright and cool."
    ]
  },

  {
    id: "alaskan-king-salmon",
    title: "Pan-Seared Alaskan King Salmon",
    state: "Alaska",
    region: "West Coast & Pacific",
    cuisine: "Wild Seafood Classic",
    time: 25,
    featured: 20,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=82",
    description: "A beautifully simple sear lets rich, wild king salmon do all the talking.",
    ingredients: [
      "2 king salmon fillets",
      "1 tbsp olive oil",
      "1 tbsp butter",
      "1 garlic clove",
      "Lemon zest and juice",
      "Dill and flaky salt"
    ],
    steps: [
      "Pat salmon dry and season generously with salt.",
      "Sear skin-side down in oil until the skin is crisp.",
      "Flip, add butter and garlic, and baste until just cooked.",
      "Finish with lemon zest, juice, and dill."
    ]
  },

  {
    id: "biscuits-and-gravy",
    title: "Biscuits and Gravy",
    state: "Kentucky & West Virginia",
    region: "Appalachia & Mountain West",
    cuisine: "Mountain Home-Style Comfort",
    time: 45,
    featured: 21,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=82",
    description: "Tender buttermilk biscuits tucked under a blanket of peppery sausage gravy.",
    ingredients: [
      "8 buttermilk biscuits",
      "½ lb breakfast sausage",
      "3 tbsp flour",
      "2 cups whole milk",
      "½ tsp black pepper",
      "Butter and chives"
    ],
    steps: [
      "Bake biscuits until tall and golden.",
      "Brown sausage in a skillet, leaving the flavorful drippings behind.",
      "Stir in flour, then whisk in milk until thick and glossy.",
      "Split biscuits and ladle gravy over the top."
    ]
  },

  {
    id: "bison-steak",
    title: "Bison Steak",
    state: "Montana & Wyoming",
    region: "Appalachia & Mountain West",
    cuisine: "High Plains / Big Game Steakhouse",
    time: 25,
    featured: 22,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=82",
    description: "Lean, deeply flavored bison with a quick sear, a rested center, and a smoky herb butter.",
    ingredients: [
      "2 bison strip steaks",
      "1 tbsp neutral oil",
      "2 tbsp herb butter",
      "1 garlic clove",
      "Rosemary sprig",
      "Flaky salt and pepper"
    ],
    steps: [
      "Bring steaks to room temperature and season well.",
      "Sear in a hot skillet for 2–3 minutes per side.",
      "Add butter, garlic, and rosemary; baste quickly.",
      "Rest 8 minutes before slicing against the grain."
    ]
  },

  {
    id: "funeral-potatoes",
    title: "Funeral Potatoes",
    state: "Utah",
    region: "Appalachia & Mountain West",
    cuisine: "Intermountain Pioneer Comfort",
    time: 60,
    featured: 23,
    image: "https://images.unsplash.com/photo-1627662168223-7df99068099e?auto=format&fit=crop&w=900&q=82",
    description: "Creamy, cheesy potatoes with a crunchy cornflake crown — a casserole built for sharing.",
    ingredients: [
      "2 lb frozen hash browns",
      "2 cups sour cream",
      "1 can cream soup",
      "2 cups cheddar",
      "½ cup melted butter",
      "2 cups crushed cornflakes"
    ],
    steps: [
      "Stir hash browns with sour cream, soup, cheese, and half the butter.",
      "Spread into a buttered baking dish.",
      "Top with buttery crushed cornflakes.",
      "Bake until bubbling at the edges and golden on top."
    ]
  },

  {
    id: "soup-beans-cornbread",
    title: "Soup Beans & Cornbread",
    state: "North Carolina",
    region: "Appalachia & Mountain West",
    cuisine: "Old Mountain Heritage",
    time: 110,
    featured: 24,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=82",
    description: "Slow-simmered beans, smoky ham, and a skillet of cornbread — simple food with a deep story.",
    ingredients: [
      "1 lb dried pinto beans",
      "1 smoked ham hock",
      "1 onion, diced",
      "6 cups stock",
      "Cornmeal for cornbread",
      "Hot pepper vinegar"
    ],
    steps: [
      "Soak beans overnight, then drain and add to a pot with ham hock and onion.",
      "Cover with stock and simmer until tender, about 90 minutes.",
      "Bake a skillet of cornbread while the beans finish.",
      "Serve with pepper vinegar and warm cornbread."
    ]
  }
];

const regions = [
  {
    name: "South & Gulf Coast",
    short: "South & Gulf",
    count: 4,
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Northeast & Mid-Atlantic",
    short: "Northeast",
    count: 4,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Midwest & Great Lakes",
    short: "Midwest",
    count: 4,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "American Southwest",
    short: "Southwest",
    count: 4,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "West Coast & Pacific",
    short: "West Coast",
    count: 4,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Appalachia & Mountain West",
    short: "Mountain West",
    count: 4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
  }
];

const state = {
  filter: "All recipes",
  query: "",
  sort: "featured",
  showSaved: false,
  saved: new Set(
    JSON.parse(localStorage.getItem("table-folk-saved") || "[]")
  ),
  selected: null
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
  ...parent.querySelectorAll(selector)
];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function recipeImage(recipe) {
  return `background-image: url("${recipe.image}")`;
}

function formatTime(minutes) {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;

    return remaining
      ? `${hours}h ${remaining}m`
      : `${hours}h`;
  }

  return `${minutes} min`;
}

function saveState() {
  localStorage.setItem(
    "table-folk-saved",
    JSON.stringify([...state.saved])
  );

  updateSavedCount();
}

function updateSavedCount() {
  $$("[data-saved-count]").forEach((el) => {
    el.textContent = state.saved.size;
  });
}

function isSaved(id) {
  return state.saved.has(id);
}

function toggleSaved(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }

  saveState();
  renderFeatured();
  renderRecipes();

  if (state.selected?.id === id) {
    updateModalSave();
  }
}

function renderFeatured() {
  const grid = $("[data-featured-grid]");

  if (!grid) return;

  const items = recipes
    .filter((recipe) => recipe.featured <= 4)
    .sort((a, b) => a.featured - b.featured);

  grid.innerHTML = items
    .map(
      (recipe) => `
        <article class="feature-card" data-open-recipe="${recipe.id}">
          <div
            class="feature-card-image"
            style="${recipeImage(recipe)}"
          ></div>

          <button
            class="card-action ${isSaved(recipe.id) ? "is-saved" : ""}"
            type="button"
            data-save="${recipe.id}"
            aria-label="${
              isSaved(recipe.id) ? "Remove" : "Save"
            } ${escapeHTML(recipe.title)}"
          >
            ${isSaved(recipe.id) ? "♥" : "♡"}
          </button>

          <div class="feature-card-content">
            <span class="card-kicker">
              ${escapeHTML(recipe.state)} ·
              ${escapeHTML(recipe.cuisine.split(" /")[0])}
            </span>

            <h3>${escapeHTML(recipe.title)}</h3>

            <div class="card-meta">
              <span>${formatTime(recipe.time)}</span>
              <span>Easy to make</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  bindCardEvents(grid);
}

function renderRegions() {
  const grid = $("[data-region-grid]");

  if (!grid) return;

  grid.innerHTML = regions
    .map(
      (region, index) => `
        <button
          class="region-card"
          type="button"
          data-region-filter="${escapeHTML(region.name)}"
        >
          <div
            class="region-card-image"
            style="background-image: url('${region.image}')"
          ></div>

          <div class="region-card-content">
            <span class="region-index">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>${escapeHTML(region.short)}</h3>

            <p>${region.count} recipes to explore</p>
          </div>
        </button>
      `
    )
    .join("");

  $$("[data-region-filter]", grid).forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.regionFilter;
      state.showSaved = false;

      renderFilters();
      renderRecipes();

      $("#recipes")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

function renderFilters() {
  const filterList = $("[data-filter-list]");

  if (!filterList) return;

  const filters = [
    "All recipes",
    ...regions.map((region) => region.name)
  ];

  filterList.innerHTML = filters
    .map((filter) => {
      const region = regions.find(
        (item) => item.name === filter
      );

      return `
        <button
          class="filter-button ${
            state.filter === filter ? "is-active" : ""
          }"
          type="button"
          role="tab"
          aria-selected="${state.filter === filter}"
          data-filter="${escapeHTML(filter)}"
        >
          ${
            filter === "All recipes"
              ? "All recipes"
              : escapeHTML(region?.short || filter)
          }
        </button>
      `;
    })
    .join("");

  $$("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      state.showSaved = false;

      renderFilters();
      renderRecipes();
    });
  });
}

function getVisibleRecipes() {
  const query = state.query.trim().toLowerCase();

  let visible = recipes.filter((recipe) => {
    const matchesRegion =
      state.filter === "All recipes" ||
      recipe.region === state.filter;

    const matchesSaved =
      !state.showSaved ||
      state.saved.has(recipe.id);

    const haystack = `
      ${recipe.title}
      ${recipe.state}
      ${recipe.region}
      ${recipe.cuisine}
      ${recipe.description}
      ${recipe.ingredients.join(" ")}
    `.toLowerCase();

    const matchesQuery =
      !query || haystack.includes(query);

    return (
      matchesRegion &&
      matchesSaved &&
      matchesQuery
    );
  });

  if (state.sort === "az") {
    visible.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (state.sort === "quick") {
    visible.sort((a, b) => a.time - b.time);
  }

  if (state.sort === "featured") {
    visible.sort((a, b) => a.featured - b.featured);
  }

  return visible;
}

function recipeCard(recipe) {
  return `
    <article
      class="recipe-card"
      data-open-recipe="${recipe.id}"
    >
      <div class="recipe-card-image-wrap">
        <div
          class="recipe-card-image"
          style="${recipeImage(recipe)}"
        ></div>

        <button
          class="recipe-card-save ${
            isSaved(recipe.id) ? "is-saved" : ""
          }"
          type="button"
          data-save="${recipe.id}"
          aria-label="${
            isSaved(recipe.id)
              ? "Remove"
              : "Save"
          } ${escapeHTML(recipe.title)}"
        >
          ${isSaved(recipe.id) ? "♥" : "♡"}
        </button>
      </div>

      <span class="recipe-card-kicker">
        ${escapeHTML(recipe.state)}
      </span>

      <h3>${escapeHTML(recipe.title)}</h3>

      <div class="recipe-card-meta">
        <span>${escapeHTML(recipe.cuisine)}</span>
        <span>${formatTime(recipe.time)}</span>
      </div>
    </article>
  `;
}

function renderRecipes() {
  const grid = $("[data-recipe-grid]");
  const count = $("[data-result-count]");
  const empty = $("[data-empty-state]");

  if (!grid) return;

  const visible = getVisibleRecipes();

  grid.innerHTML = visible
    .map(recipeCard)
    .join("");

  if (count) {
    count.textContent =
      `${visible.length} recipe${
        visible.length === 1 ? "" : "s"
      }`;
  }

  if (empty) {
    empty.hidden = visible.length !== 0;
  }

  grid.hidden = visible.length === 0;

  bindCardEvents(grid);
}

function bindCardEvents(parent) {
  $$("[data-open-recipe]", parent).forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-save]")) {
        return;
      }

      openRecipe(card.dataset.openRecipe);
    });
  });

  $$("[data-save]", parent).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      toggleSaved(button.dataset.save);
    });
  });
}

function openRecipe(id) {
  const recipe = recipes.find(
    (item) => item.id === id
  );

  if (!recipe) return;

  state.selected = recipe;

  const modalImage = $("[data-modal-image]");
  const modalRegion = $("[data-modal-region]");
  const modalTime = $("[data-modal-time]");
  const modalTitle = $("[data-modal-title]");
  const modalDescription = $("[data-modal-description]");
  const modalIngredients = $("[data-modal-ingredients]");
  const modalSteps = $("[data-modal-steps]");
  const modalBackdrop = $("[data-modal-backdrop]");
  const modal = $("[data-recipe-modal]");
  const closeButton = $("[data-close-modal]");

  if (modalImage) {
    modalImage.style.backgroundImage =
      `url("${recipe.image}")`;
  }

  if (modalRegion) {
    modalRegion.textContent =
      `${recipe.state} · ${recipe.cuisine}`;
  }

  if (modalTime) {
    modalTime.textContent =
      formatTime(recipe.time);
  }

  if (modalTitle) {
    modalTitle.textContent =
      recipe.title;
  }

  if (modalDescription) {
    modalDescription.textContent =
      recipe.description;
  }

  if (modalIngredients) {
    modalIngredients.innerHTML =
      recipe.ingredients
        .map(
          (item) =>
            `<li>${escapeHTML(item)}</li>`
        )
        .join("");
  }

  if (modalSteps) {
    modalSteps.innerHTML =
      recipe.steps
        .map(
          (item) =>
            `<li>${escapeHTML(item)}</li>`
        )
        .join("");
  }

  updateModalSave();

  if (modalBackdrop) {
    modalBackdrop.hidden = false;
  }

  if (modal) {
    modal.hidden = false;
  }

  document.body.classList.add("modal-open");

  closeButton?.focus();
}

function updateModalSave() {
  const button = $("[data-modal-save]");

  if (!button || !state.selected) return;

  const saved = isSaved(state.selected.id);

  button.classList.toggle(
    "is-saved",
    saved
  );

  button.innerHTML = `
    <span
      class="heart-icon"
      aria-hidden="true"
    >
      ${saved ? "♥" : "♡"}
    </span>

    ${saved ? "Saved recipe" : "Save recipe"}
  `;
}

function closeModal() {
  const backdrop = $("[data-modal-backdrop]");
  const modal = $("[data-recipe-modal]");

  if (backdrop) {
    backdrop.hidden = true;
  }

  if (modal) {
    modal.hidden = true;
  }

  document.body.classList.remove("modal-open");

  state.selected = null;
}

function clearSearch() {
  const input = $("[data-search-input]");
  const clearButton = $("[data-clear-search]");

  state.query = "";

  if (input) {
    input.value = "";
  }

  clearButton?.classList.remove(
    "is-visible"
  );

  renderRecipes();
}

function resetRecipeFilters() {
  state.query = "";
  state.filter = "All recipes";
  state.showSaved = false;
  state.sort = "featured";

  const input = $("[data-search-input]");
  const clearButton = $("[data-clear-search]");
  const sort = $("[data-sort]");

  if (input) {
    input.value = "";
  }

  if (sort) {
    sort.value = "featured";
  }

  clearButton?.classList.remove(
    "is-visible"
  );

  renderFilters();
  renderRecipes();
}

function filterByTime(range) {
  state.filter = "All recipes";
  state.query = "";
  state.showSaved = false;

  const input = $("[data-search-input]");
  const clearButton = $("[data-clear-search]");

  if (input) {
    input.value = "";
  }

  clearButton?.classList.remove(
    "is-visible"
  );

  let min = 0;
  let max = Infinity;

  if (range === "quick") {
    max = 30;
  }

  if (range === "under-45") {
    max = 45;
  }

  if (range === "under-60") {
    max = 60;
  }

  if (range === "long") {
    min = 60;
  }

  const matching = recipes.filter(
    (recipe) =>
      recipe.time >= min &&
      recipe.time <= max
  );

  const grid = $("[data-recipe-grid]");
  const count = $("[data-result-count]");
  const empty = $("[data-empty-state]");

  if (!grid) return;

  if (count) {
    count.textContent =
      `${matching.length} recipe${
        matching.length === 1
          ? ""
          : "s"
      }`;
  }

  grid.innerHTML = matching
    .sort((a, b) => a.time - b.time)
    .map(recipeCard)
    .join("");

  grid.hidden = matching.length === 0;

  if (empty) {
    empty.hidden = matching.length !== 0;
  }

  bindCardEvents(grid);

  renderFilters();

  $("#recipes")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function setupSearch() {
  const searchForm =
    $("[data-search-form]");

  const searchInput =
    $("[data-search-input]");

  const clearButton =
    $("[data-clear-search]");

  const resetButton =
    $("[data-reset-search]");

  if (searchForm) {
    searchForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        state.query =
          searchInput?.value || "";

        state.showSaved = false;

        renderRecipes();

        $("#recipes")?.scrollIntoView({
          behavior: "smooth"
        });
      }
    );
  }

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      (event) => {
        state.query =
          event.target.value;

        if (clearButton) {
          clearButton.classList.toggle(
            "is-visible",
            Boolean(event.target.value)
          );
        }

        renderRecipes();
      }
    );
  }

  if (clearButton) {
    clearButton.addEventListener(
      "click",
      clearSearch
    );
  }

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      resetRecipeFilters
    );
  }
}

function setupTimeFilters() {
  $$("[data-time-filter]").forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          filterByTime(
            button.dataset.timeFilter
          );
        }
      );
    }
  );
}

function setupSort() {
  const sort = $("[data-sort]");

  if (!sort) return;

  sort.addEventListener(
    "change",
    (event) => {
      state.sort =
        event.target.value;

      renderRecipes();
    }
  );
}

function setupSavedRecipes() {
  const button =
    $("[data-open-saved]");

  if (!button) return;

  button.addEventListener(
    "click",
    () => {
      state.showSaved = true;
      state.filter = "All recipes";
      state.query = "";

      const input =
        $("[data-search-input]");

      const clearButton =
        $("[data-clear-search]");

      if (input) {
        input.value = "";
      }

      clearButton?.classList.remove(
        "is-visible"
      );

      renderFilters();
      renderRecipes();

      $("#recipes")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  );
}

function setupQuickOpen() {
  $$("[data-quick-open]").forEach(
    (button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();

          openRecipe(
            button.dataset.quickOpen
          );
        }
      );
    }
  );
}

function setupModal() {
  const saveButton =
    $("[data-modal-save]");

  const closeButton =
    $("[data-close-modal]");

  const backdrop =
    $("[data-modal-backdrop]");

  if (saveButton) {
    saveButton.addEventListener(
      "click",
      () => {
        if (state.selected) {
          toggleSaved(
            state.selected.id
          );
        }
      }
    );
  }

  closeButton?.addEventListener(
    "click",
    closeModal
  );

  backdrop?.addEventListener(
    "click",
    (event) => {
      if (
        event.target === backdrop
      ) {
        closeModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        state.selected
      ) {
        closeModal();
      }
    }
  );
}

function setupNewsletter() {
  const form =
    $("[data-newsletter-form]");

  const message =
    $("[data-form-message]");

  if (!form) return;

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      if (message) {
        message.textContent =
          "You’re on the list — see you in the kitchen.";
      }

      form.reset();
    }
  );
}

function setupMobileMenu() {
  const toggle =
    $("[data-menu-toggle]");

  const nav =
    $(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener(
    "click",
    (event) => {
      const open =
        nav.classList.toggle(
          "is-open"
        );

      event.currentTarget.setAttribute(
        "aria-expanded",
        String(open)
      );
    }
  );

  $$(".main-nav a").forEach(
    (link) => {
      link.addEventListener(
        "click",
        () => {
          nav.classList.remove(
            "is-open"
          );

          toggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      );
    }
  );
}

function init() {
  renderFeatured();
  renderRegions();
  renderFilters();
  renderRecipes();

  updateSavedCount();

  setupSearch();
  setupSort();
  setupSavedRecipes();
  setupQuickOpen();
  setupTimeFilters();
  setupModal();
  setupNewsletter();
  setupMobileMenu();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    init
  );
} else {
  init();
}
