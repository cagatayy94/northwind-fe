import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Language'>
                <Dropdown.Menu>
                    <Dropdown.Item>Asus</Dropdown.Item>
                    <Dropdown.Item>Dell</Dropdown.Item>
                    <DropdownDivider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
