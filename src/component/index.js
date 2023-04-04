import React, { useState, useEffect, useRef, useMemo} from "react";
import items from "./data";

const DoubleSelect = () => {
    const [currentItem, setCurrentItem] = useState("");
    const [currentCategory, setCurrentCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [itemSubset, setItemSubset] = useState([]);


    useEffect (() => {      
        let categories = {};

        items.forEach((item) => {
            if (!categories[item.category]) {
              categories[item.category] = [];
            }
            categories[item.category].push(item.name);
          });

          const categoriesList = Object.keys(categories)


        setCategoryList(categories);
        setItemSubset(categories[categoriesList[0]])
        setCurrentCategory(categoryList[0])
        setCurrentItem(itemSubset[0]);
    }, [])

    const changeItem = (props) => {
        let newItem = props.target.value;

        setCurrentItem(newItem);
    }

    const changeCategory = (props) => {
        let newCatagory = props.target.value;

        setCurrentCategory(newCatagory);
        setItemSubset(categoryList[newCatagory]);
        setCurrentItem(itemSubset[0]);
    }
    return(
        <div>
            <h1>{currentItem}</h1>
            <p>Category 
                <select onChange = {changeCategory} value = {currentCategory}>
                     {
                        Object.keys(categoryList).map((t) => {
                            return (
                                <option
                                value = {t}
                                key = {t}>
                                {t}
                            </option>
                            );
                        })
                     }

                </select>
            </p>

            <p>Name
                <select onChange={changeItem} value={currentItem}>
                    {
                        itemSubset?.map(t=> (
                            <option 
                                value = {t}
                                key={t}>
                                {t}
                            </option>
                        ))
                    }
                </select>
            </p>
        </div>
    );
}

export default DoubleSelect;