-- Insert Unit
INSERT INTO "Unit" ("label", "sort") VALUES
('kg', 1),
('g', 2),
('mg', 3),
('kl', 4),
('l', 5),
('ml', 6),
('teaspoon', 7),
('dessertspoon', 8),
('tablespoon', 9),
('fluid ounce', 10),
('cup', 11),
('pint', 12),
('quart', 13),
('gallon', 14),
('bulb', 15),
('clove', 16),
('stalk', 17),
('piece', 18),
('slice', 19);

-- Insert IngredientType
INSERT INTO "IngredientType" ("label") VALUES
('Pantry essentials'),
('Vegetables & greens'),
('Mushrooms'),
('Fruits'),
('Berries'),
('Nuts & seeds'),
('Cheeses'),
('Dairy & eggs'),
('Meats'),
('Fish'),
('Seafood & seaweed'),
('Herbs & spices'),
('Baking'),
('Pasta'),
('Bread & salty snacks'),
('Oils & fats'),
('Condiments'),
('Wine, beer & spirits'),
('Supplements & extracts');

-- Insert Ingredient
-- Lưu ý: bạn phải đảm bảo mapping đúng `ingredientTypeId` theo thứ tự insert ở trên
INSERT INTO "Ingredient" ("label", "ingredientTypeId") VALUES
('Spaghetti', 14),
('Ground meat', 9),
('Tomato', 2),
('Tomato paste', 17),
('Onion', 2),
('Garlic', 2),
('Pepper', 2);

-- Insert Recipe
INSERT INTO "Recipe" (
    "recipeName", "totalTime", "calories", "carbs", "protein", "fat",
    "shortDescription", "description", "instructions", "imageUrl"
) VALUES (
    'Spaghetti sauce with ground beef',
    20,
    135,
    76.5,
    12.9,
    1.8,
    'Spaghetti with meat sauce.',
    'A quick and easy weeknight spaghetti recipe with flavorful homemade meat sauce. Perfect for any ground meat like beef, turkey, or chicken.',
    'Step 1   Heat olive oil in a large pot over medium-high heat.  Step 2   Add ground meat and cook, breaking into small pieces, until browned (about 8 minutes).  Step 3   Add chopped onions and cook until softened (about 5 minutes).  Step 4   Stir in minced garlic, tomato paste, oregano, and red pepper flakes; cook for 1 minute.  Step 5   Pour in water (or broth/wine) and scrape up any browned bits from the pot bottom.  Step 6   Stir in crushed tomatoes, salt, and pepper. Bring to a simmer and cook uncovered for 25 minutes, stirring occasionally.  Step 7   About 15 minutes before sauce finishes, cook spaghetti in salted boiling water according to package instructions, checking for doneness early.  Step 8   Remove sauce from heat and stir in fresh basil leaves.  Step 9   Toss cooked spaghetti with the sauce and let sit for a minute to absorb flavors.  Step 10   Serve topped with grated parmesan cheese.',
    'https://foodal.com/wp-content/uploads/2021/03/Weeknight-Spaghetti-Bolognese-Best-Recipe.jpg'
);

-- Insert RecipeIngredient
-- Bạn phải chắc chắn `recipeId`, `ingredientId`, `unitId` đúng với các bản ghi đã insert trước đó
INSERT INTO "RecipeIngredient" ("recipeId", "ingredientId", "unitId", "amount") VALUES
(1, 1, 2, 200),
(1, 2, 2, 200),
(1, 3, 18, 2),
(1, 4, 9, 1),
(1, 5, 15, 0.5),
(1, 6, 16, 2),
(1, 7, 7, 1);

-- Insert User
-- Nếu bạn đang dùng `@default(autoincrement())` cho `id`, thì không nên chỉ định `id`
INSERT INTO "User" (
    "refreshToken", "username", "email", "passwordHash", "firstName", "lastName", "avatarUrl"
) VALUES (
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiam9obmRvZSIsImlhdCI6MTc0ODkyMjYxOSwiZXhwIjoxNzQ5NTI3NDE5fQ.HJP5O_KPdzTOf1vYgwhyvvXOL7RugKSX-Nfmor_QAkg',
    'johndoe',
    'johndoe@example.com',
    '$argon2id$v=19$m=65536,t=3,p=4$IEVbMSlFNWqFtx/QQOLxhw$8Cz8K6jjbf16yc7ClWbuRzlPhWzdXZAIJv+o25nCdhc',
    NULL,
    NULL,
    NULL
);
