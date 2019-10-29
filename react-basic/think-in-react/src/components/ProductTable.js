import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export default function ProductTable({ data, keyword, isChecked }) {
    if (!data) return <h2>로딩중입니다....</h2>; // data 선언시 null 일때, 
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
                {data.map(({ category, price, name, stocked }) => {
                    const products = { name, price, stocked };
                    return (
                        <>
                            {category !== prevCategory
                                ? (
                                    prevCategory = category,
                                    < ProductCategoryRow category={category} />
                                )
                                : null}
                            <ProductRow
                                {...products}
                                keyword={keyword}
                                isChecked={isChecked} />
                        </>
                    )

                })}
            </tbody>
        </table>
    )
}
