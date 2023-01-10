import { DOLLARS_PER_POUND, getDollarsGivenMeals, getMealsGivenPounds } from "../services/impact";
import { Metric } from "../types/metric";

const totalPounds = 1200;
const totalMeals = getMealsGivenPounds(totalPounds);
const totalDollars = getDollarsGivenMeals(totalMeals);

export const defaultMetric: Metric = {
    totalPounds,
    totalMeals,
    totalDollars,
    dollarsPerPound: DOLLARS_PER_POUND
}