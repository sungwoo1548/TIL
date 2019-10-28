import React from 'react'

export default function ProductRow(props) {
    const name = props.isChecked && !props.stocked ? null : props.name;
    const price = props.isChecked && !props.stocked ? null : props.price;
    return (
        <tr style={{ color: !props.stocked && "red" }}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
