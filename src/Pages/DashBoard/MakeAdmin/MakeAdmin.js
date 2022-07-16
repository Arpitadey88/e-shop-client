import { Alert, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://mysterious-tor-42417.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="my-3 text-center"> Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Form.Group onBlur={handleOnBlur} className="mx-5" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button style={{ backgroundColor: '#1E3163' }} className="mx-5 mt-4 border-0" type="submit">
                    Make Admin
                </Button>
            </form>
            {success && <div className='text-center p-md-5'><Alert className="mx-5" variant="success">
                Made Admin <br /> Successfully !!
            </Alert></div>}
        </div>
    );
};

export default MakeAdmin;