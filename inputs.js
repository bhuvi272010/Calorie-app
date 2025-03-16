npm install openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));

//Test Variables
//let age = 15;
//let gender = "female";
//let weight = 125;
//let height = 62;

//getting inputs from html elements (and dropdowns too)
const age = document.getElementById("age");

let genderdropdown = document.getElementById("gender");
let genderValue = genderdropdown.getValue;

const weight = document.getElementById("weight");

const height = document.getElementById("height");

let FreqExerciseDropdown = document.getElementById("");
let FreqExercise = document.getValue;


// Amount of exercise affects the number of calories
let FreqExercise = 1;
let KiloCalories;

if (FreqExercise === "Never") {
  KiloCalories = 1600; // 1600-1700
} else if (FreqExercise === "Sometimes") {
  KiloCalories = 1800; // 1800-1900
} else {
  KiloCalories = 2000; // 2000-2100
}

// FoodToday object to store food data
let FoodToday = {
  Name: [], //name of food
  TimeOfDay: [], //breakfast, lunch, dinner, or snack
  Calories: [] //straightforward
};

// Food class
class Food {
  constructor(name, category, calories) {
    this.name = name;
    this.category = category;
    this.calories = calories;

    // Adding to the FoodToday dictionary
    FoodToday.Name.push(this.name);
    FoodToday.TimeOfDay.push(this.category);
    FoodToday.Calories.push(this.calories);
  }
}

// Creating a new food object
let potato = new Food("Potato", "Carbs", 600);

// Displaying the data as a table
console.table(FoodToday);

//total summary of number of calories
const sumCalories = FoodToday.Calories.reduce((acc, curr) => acc + curr, 0);
console.log("Total Calories: " + sumCalories);

if (sumCalories >= KiloCalories){
  console.log("Congratulations on meeting your calorie goal today!");
} else{
  console.log("Keep on going! You can reach your goal!");
}
