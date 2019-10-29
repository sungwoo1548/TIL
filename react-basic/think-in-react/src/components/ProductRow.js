import React from 'react'

export default function ProductRow(props) {
    if (props.isChecked && !props.stocked) return null;
    if (!(props.name).toLowerCase().includes((props.keyword).toLowerCase())) return null;
    // const name = props.isChecked && !props.stocked ? null : props.name;
    // const price = props.isChecked && !props.stocked ? null : props.price;
    return (
        <tr >
            <td style={{ color: !props.stocked && "red" }}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}
