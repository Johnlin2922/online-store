import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utilities/firebase/FirebaseUtilities.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = (props) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap()
    }, []);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}> {props.children} </CategoriesContext.Provider>
    );
};
