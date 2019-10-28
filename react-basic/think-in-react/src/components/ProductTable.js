import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export default function ProductTable(props) {
    let prevCategory = "";

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

                {props.data.map(({ category, price, name, stocked }) => {
                    if (category !== prevCategory) {
                        prevCategory = category;
                        return (
                            <>
                                <ProductCategoryRow category={category} />
                                <ProductRow name={name} price={price} stocked={stocked} keyword={props.keyword} isChecked={props.isChecked} />
                            </>
                        )
                    }
                    return (
                        <ProductRow name={name} price={price} stocked={stocked} keyword={props.keyword} isChecked={props.isChecked} />
                    );
                })}
            </tbody>
        </table>
    )
}
