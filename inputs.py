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