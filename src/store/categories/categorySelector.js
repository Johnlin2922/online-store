import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    return state.categories;
};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories;
    }
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);

//memoization... using createSelector and splitting up the selector by using createSelector and the reselect library allows me to modify parts of my store without the entire application rerendering
