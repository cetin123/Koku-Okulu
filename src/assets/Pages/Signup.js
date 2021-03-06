import React from 'react'
import { Form, Input, TextArea, Button, Select, Segment } from 'semantic-ui-react'
import "../css/Signup.css";
const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const FormExampleFieldControlId = () => (
    <div className="container">
        <div className="header"></div>
        <div className="form">
            <Form >
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                        placeholder='Gender'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Adres'
                    placeholder='Adres'
                />
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'

                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    label='Label with htmlFor'
                />
            </Form>
        </div>
        <div className="footer"></div>
    </div>
)

export default FormExampleFieldControlId