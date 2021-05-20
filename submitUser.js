import userEvent from '@testing-library/user-event'
import React from 'react'
export default function submitUser(){
    return (
        function create(person){
            let user = document.getElementById("username")
             let pass=document.getElementById("password")
            let submitBtn=document.getElementById("submit")
           let trElement=document.createElement("tr");
           let tdElement1=document.createElement("td");
           let tdElement2=document.createElement("td");
           tdElement1.innerHTML=person.name;
           tdElement2.innerHTML=person.password;
           let tdBody= document.getElementById("body-table")
           tdBody.appendChild(trElement)
           trElement.appendChild(tdElement1)
           trElement.appendChild(tdElement2)
           submitBtn.onClick=()=>{
               let user1=user.value;
               let pass1=pass.value;
               let person={
                   name:user1,
                   password:pass1,
               }
               create(person);
           }
        }
    )
}