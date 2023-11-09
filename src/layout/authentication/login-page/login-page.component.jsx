import React from 'react'
import LoginForm from '../login-form/login-form.component'
import { LoginPanel, LoginHeader, LoginPanelContent, LoginFooter, LoginFooterLeft, LoginAvatar,FooterLogo } from './login-page.styles'
import { AuthenticationLayout } from '../../authentication-layout'
import logo from '../../../assets/images/logo-inner-page.png';

export default function LoginPage() {
    // debugger;
  return (
    <div>
        <AuthenticationLayout>
            <LoginPanel>  
                <LoginPanelContent>
                    <LoginHeader><img src={logo}/></LoginHeader>
                    <LoginForm/>
                </LoginPanelContent>
            </LoginPanel>
        </AuthenticationLayout>
    </div>
  )
}
