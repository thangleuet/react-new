import React from "react";
import submitUser from './component/submitUser'
export default function LoginForm(){
    return(
    <div>
        <form>
            <div>
                <label for="name">Username</label>
                <input id="username" type="text"></input>   
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <button id="submit">Submit</button>
            </div>
        </form>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody id="body-table">
                    <tr>
                        <td>thangle</td>
                        <td>12346</td>
                    </tr>
                    <tr>
                        <td>thanguet</td>
                        <td>123456</td>
                    </tr>
                </tbody>
            </table>
            <submitUser/>
        </div>
    </div>
    )
}