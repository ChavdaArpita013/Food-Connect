import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Col from 'react-bootstrap/Col';
import {UserCircleIcon , HotelIcon,Locate ,Phone,Mail,Image , TimerIcon} from 'lucide-react';


function RagistrationForm() {
    return (
        <>
        {/* This form is for NGO who can Ragister Here to get Food */}


        <Navbar className="bg-body-tertiary justify-content-center">

            <Form inline>

                {/* For name */}
                <InputGroup>
                    <InputGroup.Text id="basic-addon1"><UserCircleIcon /></InputGroup.Text>
                    <Form.Control
                        placeholder="Enter Your NGO Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup><br/>

                {/* For email */}
                <InputGroup>
                    <InputGroup.Text id="basic-addon1"><Mail /></InputGroup.Text>
                    <Form.Control
                        placeholder="Enter email"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup><br/>


                {/* For getting pone number */}
                <InputGroup>
                    <InputGroup.Text id="basic-addon1"><Phone /></InputGroup.Text>
                    <Form.Control
                        type='number'
                        placeholder="Enter Phone Number"
                        aria-label="time"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup><br />

                {/* For hotel Adress */}
                <InputGroup>
                    <InputGroup.Text id="basic-addon1"><Locate /></InputGroup.Text>
                    <Form.Control
                        placeholder="Enter Your Hotel Address"
                        aria-label="ProviderAdsress"
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
            
                    
                
        </Navbar>
        </>
    );
}


export default RagistrationForm;