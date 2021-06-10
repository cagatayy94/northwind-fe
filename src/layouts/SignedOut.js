import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft:'0.5em'}}>Kaydol</Button>
            </Menu.Item>
        </div>
    )
}
