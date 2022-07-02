import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} width="300px"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" width="20px" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" width="20px" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}