import { Component } from "react";

class LoginForm extends Component {

    render() {
        return (
            <div>
                <form action={`${process.env.REACT_APP_API_BASE_URL}/auth/token/authorize`} method="POST">
                    <input type="text" name="username" /> <br />
                    <input type="password" name="password" /> <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }

}

export default LoginForm;