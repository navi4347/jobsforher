import React, { useState } from 'react';
import left from '../Assets/Svg/go-back-left-arrow.svg';
import edit from '../Assets/Svg/edit.svg';
import imj from '../Assets/imj.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Accounts.css'
import { Link} from 'react-router-dom';

 function MyAccount() {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const labelStyle = {
    marginLeft: '12px',  };

  return (
    <div className='MyAccount'>
<p className='pap' style={{ color: '#000', fontSize: '15px',paddingTop:'15px' }}>
  Dashboard | <span><Link to="/MyAccount"  style={{ color: '#2680EB', fontSize: '15px',fontWeight: 'bold' }}>My Account</Link></span>
</p>
<div className='pr'>
<div className='cha'>
<img src={left} alt="Profile Icon"/>&nbsp;&nbsp;
  <h2>My Account</h2>
  </div>
  <div className='chb'>
  <h2>My Profile</h2>
  <img src={edit} alt="Profile Icon" className='laschb'/>
  </div>
  <div className='chc'>
<div className='data'>
<img src={imj} alt="Profile Icon" className="imj" style={{ width: '100px', height: '100px' }} />&nbsp;&nbsp;
<img src={edit} alt="Profile Icon" className='both' style={{ width: '20px', height: '20px' }} />
</div>
<div className='datb'>
<h5>Divya Chatterjee</h5>
<p1>Designation</p1>
<h6>Assistant Manager - HR</h6>
<p1>Company Name</p1>
<h6>XXY Company Name</h6>
</div>

  </div>
  <div className='chd'>
  <p style={{ color: '#B2B2B2', fontSize: '16px', fontWeight: 'bold' }}>About Me</p>
  <div style={{ marginLeft: '25px',  marginRight: '25px'}}>
  Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.</div> </div>
 <div className='che'>
 <Container>
 <Row>
<Col xs={12} md={6}>
<div className='chb'>
  <h5>My Account Settings</h5>
  <img src={edit} alt="Profile Icon" className='laschb'/>
  </div>
  <div className='lkl'>
  <Container>
      <Row>
        <Col>
        <p style={{ color: '#B2B2B2', fontSize: '13px' }}>Full Name*</p>
        <p style={{ color: '#000', fontSize: '15px' }}>Divya Chatterjee</p>
        </Col>
        <Col>
        <p style={{ color: '#B2B2B2', fontSize: '13px' }}>Designation</p>
        <p style={{ color: '#000', fontSize: '15px' }}>Assistant Manager - HR</p>
        </Col>
      </Row>
      <br/>  <br/>
      <Row>
        <Col>
        <p style={{ color: '#B2B2B2', fontSize: '13px' }}>Phone / Landline*</p>
        <p style={{ color: '#404040', fontSize: '15px' }}>7012248563</p>
        </Col>
        <Col><p style={{ color: '#2680EB', fontSize: '15px' }}>Change Password</p></Col>
      </Row>
      </Container>
      </div>
  </Col>
<Col xs={12} md={6}>
<div className='chb'>
  <h2>Application Settings</h2>
  <img src={edit} alt="Profile Icon" className='laschb'/>
  </div>
  <div className='lkl'>
  <p style={{ color: '#B2B2B2', fontSize: '15px',  paddingTop: '10px' }}>Receive job applications via</p>
  <label style={labelStyle}>
        <input
          type="radio"
          id="specifyColor"
          value="dashboard"
          checked={selectedOption === 'dashboard'}
          onChange={handleOptionChange}
        />&nbsp;&nbsp;
        <span
          style={{
            color: selectedOption === 'dashboard' ? '#404040' : '#B2B2B2',
            fontSize: '15px',
            paddingTop: '10px',
          }}
        >
          Only on my dashboard
        </span>
      </label>
<br/><br/>

<label style={labelStyle}>
        <input
          type="radio"
          id="specifyColor"
          value="email_dashboard"
          checked={selectedOption === 'email_dashboard'}
          onChange={handleOptionChange}
        />&nbsp;&nbsp;
        <span
          style={{
            color: selectedOption === 'email_dashboard' ? '#404040' : '#B2B2B2',
            fontSize: '15px',
            paddingTop: '10px',
          }}
        >
          Email and on my dashboard
        </span>
      </label>
  <p style={{ color: '#B2B2B2', fontSize: '15px',  paddingTop: '10px' }}>*Please note, this setting will not impact your old job postings</p>
  </div>

</Col>
</Row>
</Container>

</div>   

    </div>   

     </div>






  )
}
export default MyAccount;