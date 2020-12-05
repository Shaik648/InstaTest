import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FilterFilled } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;

const Filter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
const [innerDropDown ,setInnerDropDown] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState);
  function handleChange(value) {
  console.log(`selected ${value}`);
}

const innertoggle = () =>
{
setInnerDropDown(true)
setDropdownOpen(true)
}


  return (
    <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle >
    <FilterFilled />
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header className='filter-Header'>Filter</DropdownItem>

            <DropdownItem >
          
        Message statues
            </DropdownItem>
           
        <DropdownItem >Time of Message</DropdownItem>
        {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
      
      </DropdownMenu>
    </Dropdown>
  );
}
export default Filter