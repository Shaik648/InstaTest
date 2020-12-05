import React,{useEffect} from 'react'
// import './index.css';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { CardBody, CardTitle } from 'reactstrap';
import * as actions from '../../Actions/index'
const { Meta } = Card;
export default function MessageDetails(props) {

const cardOpen = () =>{
props.setCardOpen(true)
}

useEffect(() => {
detailsData()
}, [])

const detailsData = () =>{
    let data={
      ' userId' : '' 
    }
actions.deatil_Action(data,(res) =>{
    console.log('data',res)

})
}


    return (
        <div style={{maxHeight:'500px',overflowY:'auto'}}>
            <Card>
          <Card style={{ width: '100%', marginTop: 16 }} className='card-left' onClick={cardOpen}>
              <div>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            
            }
            
          />
          <span style={{fontSize:'15px',fontWeight:'700'}} className="mt-5"> Shirly Cook</span>
          <p>@JontheD</p>
    </div>
    <div>
<CardTitle>
    <h5>Inquery about relocation of Nirobi</h5>
</CardTitle>
<CardBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
</CardBody>
     </div>  
        
        </Card>


         <Card style={{ width: '100%', marginTop: 16 }} className='card-left'  onClick={cardOpen}>
              <div>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            
            }
            
          />
          <span style={{fontSize:'15px',fontWeight:'700'}} className="mt-5"> Shirly Cook</span>
          <p>@JontheD</p>
    </div>
    <div>
<CardTitle>
    <h5>Inquery about relocation of Nirobi</h5>
</CardTitle>
<CardBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
</CardBody>
     </div>  
        
        </Card>


        

         <Card style={{ width: '100%', marginTop: 16 }} className='card-left'  onClick={cardOpen}>
              <div>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            
            }
            
          />
          <span style={{fontSize:'15px',fontWeight:'700'}} className="mt-5"> Shirly Cook</span>
          <p>@JontheD</p>
    </div>
    <div>
<CardTitle>
    <h5>Inquery about relocation of Nirobi</h5>
</CardTitle>
<CardBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
</CardBody>
     </div>  
        
        </Card>
        

         <Card style={{ width: '100%', marginTop: 16 }} className='card-left'  onClick={cardOpen}>
              <div>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            
            }
            
          />
          <span style={{fontSize:'15px',fontWeight:'700'}} className="mt-5"> Shirly Cook</span>
          <p>@JontheD</p>
    </div>
    <div>
<CardTitle>
    <h5>Inquery about relocation of Nirobi</h5>
</CardTitle>
<CardBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
</CardBody>
     </div>  
        
        </Card>
        <Card style={{ width: '100%', marginTop: 16 }} className='card-left'  onClick={cardOpen}>
              <div>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            
            }
            
          />
          <span style={{fontSize:'15px',fontWeight:'700'}} className="mt-5"> Shirly Cook</span>
          <p>@JontheD</p>
    </div>
    <div>
<CardTitle>
    <h5>Inquery about relocation of Nirobi</h5>
</CardTitle>
<CardBody>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
</CardBody>
     </div>  
        
        </Card>
        </Card>
        </div>
    )
}
