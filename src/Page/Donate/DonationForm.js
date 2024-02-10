import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Col from 'react-bootstrap/Col';
import {UserCircleIcon , HotelIcon ,Image,LocateIcon , TimerIcon} from 'lucide-react';

function DonationForm(){
    <div>

        {/* This form is For Hotel or anyone who wants to Donate */}
        <Form inline>

{/* For name */}
<InputGroup>
    <InputGroup.Text id="basic-addon1"><UserCircleIcon /></InputGroup.Text>
    <Form.Control
        placeholder="Enter Your Name"
        aria-label="name"
        aria-describedby="basic-addon1"
    />
</InputGroup><br/>
{/* For hotel name */}
<InputGroup>
    <InputGroup.Text id="basic-addon1"><HotelIcon /></InputGroup.Text>
    <Form.Control
        placeholder="Enter Your Hotel Name"
        aria-label="ProviderName"
        aria-describedby="basic-addon1"
    />
</InputGroup><br />
{/* For Location */}
<InputGroup>
    <InputGroup.Text id="basic-addon1"><LocateIcon />  </InputGroup.Text>
    <Form.Control
        placeholder="Enter Location"
        aria-label="Location"
        aria-describedby="basic-addon1"
    />
</InputGroup><br />
{/* For getting time */}
<InputGroup>
    <InputGroup.Text id="basic-addon1"><TimerIcon /></InputGroup.Text>
    <Form.Control
        placeholder="Enter Time"
        aria-label="time"
        aria-describedby="basic-addon1"
    />
</InputGroup><br />

{/* For getting Image */}
<InputGroup>
                    <InputGroup.Text id="basic-addon1"><Image /></InputGroup.Text>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        aria-label="image"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup><br />

<Col xs="auto">
        <Button type="submit">Submit</Button>
    </Col>
</Form>

    </div>
}

export default DonationForm;