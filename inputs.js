<script>
    {
    "nutritionSummary": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 310,
                "unit": "cal",
                "percentOfDailyNeeds": 16
            },
            {
                "name": "Fat",
                "amount": 25,
                "unit": "g",
                "percentOfDailyNeeds": 38
            },
            {
                "name": "Carbohydrates",
                "amount": 1,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Protein",
                "amount": 20,
                "unit": "g",
                "percentOfDailyNeeds": 40
            }
        ]
    },
    "nutritionSummaryBreakfast": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 0,
                "unit": "cal",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Fat",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Carbohydrates",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Protein",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            }
        ]
    },
    "nutritionSummaryLunch": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 310,
                "unit": "cal",
                "percentOfDailyNeeds": 16
            },
            {
                "name": "Fat",
                "amount": 25,
                "unit": "g",
                "percentOfDailyNeeds": 38
            },
            {
                "name": "Carbohydrates",
                "amount": 1,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Protein",
                "amount": 20,
                "unit": "g",
                "percentOfDailyNeeds": 40
            }
        ]
    },
    "nutritionSummaryDinner": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 0,
                "unit": "cal",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Fat",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Carbohydrates",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            },
            {
                "name": "Protein",
                "amount": 0,
                "unit": "g",
                "percentOfDailyNeeds": 0
            }
        ]
    },
    "date": 1589155200,
    "day": "Monday",
    "items": [
        {
            "id": 1976489,
            "slot": 1,
            "position": 1,
            "type": "RECIPE",
            "value": {
                "servings": 2,
                "id": 1023004,
                "title": "Foolproof Meatloaf",
                "imageType": ""
            }
        },
        {
            "id": 1976490,
            "slot": 2,
            "position": 2,
            "type": "CUSTOM_FOOD",
            "value": {
                "servings": 1,
                "id": 345,
                "title": "Denn's Lamb Bratwurst - 1/2 Pkg",
                "image": "https://img.spoonacular.com/ingredients_100x100/bratwurst.jpg"
            }
        }
    ]
}
</script>
username = input(str("What's your name? "))

#getting the demographics of the user
age = int(input(str("Before, we get started, how old are you? ")))
gender = input(str("Are you a female or male? "))
weight = int(input(
    str("We'll get started in a moment! What's your weight in pounds? ")))
height = int(input(str("How tall are you in inches? ")))
FreqExercise = input(
    str("How often do you exercise? Please enter a number. 1:never, 2:moderate, 3:A lot"))

#FreqExercise is necessary in order to get the next value, in case if people don't get it
while FreqExercise != "1" and FreqExercise != "2" and FreqExercise != "3":
  FreqExercise = input(
      str("Please enter a NUMBER from 1-3, where 1:never, 2:moderate, 3:A lot indiciating your exercise level. "))

#changes inputs to integers
FreqExercise = int(FreqExercise)

#testing testing
age = 15
gender = "female"
weight = 125
height = 62

#amount of exercise affects the number of calories
if FreqExercise == 1:
  KiloCalories = 1600#1600-1700
elif FreqExercise == 2:
  KiloCalories = 1800#1800-1900
else:
  KiloCalories = 2000#2000-2100


#To make storing more convenient for food objects
class Food:
  def __init__(self, name, category, calories):
    self.name = name
    self.category = category
    self.calories = calories
