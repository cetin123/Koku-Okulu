import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const Login = () => (
    <div className="Login">
        <Segment placeholder  >
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Kullanıcı Adı'
                            placeholder='Kullanıcı Adı'
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            label='Şifre'
                            type='password'
                        />

                        <Button content='Giriş' primary />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button content='Kaydol' icon='signup' size='big' />
                </Grid.Column>
            </Grid>
        
            <Divider vertical>VEYA</Divider>
            
        </Segment>
      
      
       
</div>
)

export default Login