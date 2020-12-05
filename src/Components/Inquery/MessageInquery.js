import React,{useState,useEffect} from 'react'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { Button, CardBody, CardTitle } from 'reactstrap';
import MessageDetails from './MessageDetails';
import { Input } from 'antd';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FilterFilled } from '@ant-design/icons';
import { Select } from 'antd';
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
     
        <p>button</p>
    </a>
  ));

const { TextArea } = Input;
const { Meta } = Card;
const { Option } = Select;

export default function MessageInquery() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
const [innerDropDown ,setInnerDropDown] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggler = () => setInnerDropDown(prevState => !prevState);
  function handleChange(value) {
  console.log(`selected ${value}`);
}

useEffect(() => {
 
}, [])

    return (
    <div className='card'>
        <div className='Header Header-Inquery  '>
           Inquery about relocation of Nirobi
           <Dropdown direction='left' style={{float:'right'}} className='dots 'isOpen={innerDropDown} toggle={toggler}>
    <DropdownToggle style={{background:'transparent' , color:'black'}}>&#8942;</DropdownToggle>

    <DropdownMenu>
        <DropdownItem>
            <Button>Close Chat</Button>
        </DropdownItem>
         <DropdownItem>
            <Button>Delete Chat</Button>
        </DropdownItem>
    </DropdownMenu>
</Dropdown>
      <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle} style={{float:"right"}}>
      <DropdownToggle >
        Contact info    
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header className='filter-Header'>Filter</DropdownItem>

            <DropdownItem >
       <div className='d-flex '>
           <p className='mt-3'>Mobile Number</p>
           <input value='123456789' className='inputNumber'/>
           </div>   
       
            </DropdownItem>
           
        <DropdownItem >
 <div className='d-flex '>
           <p className='mt-3 mr-5'>Email</p>
           <input value='hr@gmail.com' type='email' className='inputNumber ml-5'/>
           </div>

        </DropdownItem>
        {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
      
      </DropdownMenu>
    </Dropdown>






     
           </div>
       <div className="  mt-1 " style={{maxHeight:'500px',overflowY:'auto'}}>
           
           <div >
               <div className="content-message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
           </div>

           </div>
        <div className='message-reply'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </div>
          <div className="content-message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
           </div>
        <div className='message-reply'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </div>
         <div className="content-message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
           </div>
        <div className='message-reply'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </div>


        </div>

        <div className='enter-message'>
<Input className='message-enter' placeholder='Type Your Message' />
</div>
</div>
    )
}
