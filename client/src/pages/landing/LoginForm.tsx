import { Component, FormEvent } from "react";

import "./LoginForm.scss";

class LoginForm extends Component {

    render() {
        return (
            <div className="login-form" onSubmit={this.onSubmit}>
                <form action={`${process.env.REACT_APP_API_BASE_URL}/auth/token/authorize`} method="POST">
                    <h1 className="title">Login</h1>
                    <div className="input-container">
                        <input className="input" type="text" name="username" minLength={1} required />
                    </div>
                    <div className="input-container">
                        <input className="input" type="password" name="password" minLength={1} required />
                    </div>
                    <div className="input-container">
                        <input className="input" type="submit" />
                    </div>
                </form>
            </div>
        );
    }

    private async onSubmit(event: FormEvent) {
        event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const apiURL = form.getAttribute("action") as string;
        const username = (form.querySelector("input[name='username']") as HTMLInputElement).value;
        const password = (form.querySelector("input[name='password']") as HTMLInputElement).value;

        await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

    }

}

export default LoginForm;