const POUNDS_PER_MEAL = 1.2;
const DOLLARS_PER_MEAL = 3;
export const DOLLARS_PER_POUND = DOLLARS_PER_MEAL / POUNDS_PER_MEAL;

export const getMealsGivenPounds = (pounds: number) => {
    return Math.ceil(pounds / POUNDS_PER_MEAL)
}

export const getDollarsGivenMeals = (meals: number) => {
    return Math.ceil(meals * DOLLARS_PER_MEAL)
}