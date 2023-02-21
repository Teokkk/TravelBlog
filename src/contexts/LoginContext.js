import React from 'react';

const Theme = {
    isLogin: false,
    setIsLogin: () => {}
}

const LoginContext = React.createContext(Theme)

export default LoginContext