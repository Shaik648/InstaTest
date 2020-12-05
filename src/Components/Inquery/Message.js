import React,{useState} from 'react'
import MessageDetails from './MessageDetails'
import MessageInquery from './MessageInquery'
import { Input } from 'antd'
import { FilterFilled } from '@ant-design/icons';
import Filter from './Filter.js'
import { Button } from 'reactstrap';
const { Search } = Input;

export default function Message() {
     const [cardOpen , setCardOpen] =  useState(false)
    return (

        <div>
            <div className='conatiner d-flex flex-sm-row'>
                
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <div className='col-lg-8 col-sm-8 mb-3 '>
                    <Search placeholder="input search text" className="search"   />
                       </div> 
                   <div className='col-lg-2 filter'>
                          <Filter />
                       </div>
                </div>
                <div className='col-lg-6 col-sm-8'>
                    <Button className="addButton"> + Start a new Chat</Button>
                </div>
            </div>
        <div className='d-flex'>
            <div className='col-lg-6 col-sm-12'>
         <MessageDetails cardOpen={cardOpen}
                setCardOpen={setCardOpen}  />
            </div>
                     <div className='col-lg-6 col-sm-12'>

         { cardOpen ==  true ? <MessageInquery /> : '' }                

          {/* <MessageInquery /> */}
   
            </div>
        
        </div>
        </div>
    )
}
