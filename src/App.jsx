import React from 'react';
import './App.css';
import Contact from "./components/Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/cena.png"
                name="Mr. Cena"
                phone="(212) 555-1234"
                email="mr.cena@catnap.meow"
            />
            <Contact 
                img="./images/cutty.png"
                name="Cutty"
                phone="(212) 555-2345"
                email="cutty@me.com"
            />
            <Contact 
                img="./images/roy-and-rose.png"
                name="Roy/Rose"
                phone="(212) 555-4567"
                email="royrose@hotmail.com"
            />
            <Contact 
                img="./images/Tyson.png"
                name="Tyson"
                phone="(0800) Dog KING"
                email="Tyson@king.com"
            />
        </div>
    )
}
export default App;