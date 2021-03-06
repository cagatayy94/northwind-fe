import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const {cartItems} = useSelector(state => state.cart);
    const history = useHistory()
    function handleSignOut(){
        setIsAuthenticated(false)
        history.push('/')
    }

    function handleSignIn(){
        setIsAuthenticated(true)
    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                    {cartItems.length > 0 && <CartSummary></CartSummary>}
                    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
