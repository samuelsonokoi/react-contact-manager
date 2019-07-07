import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager App" />
      <Contact
        name="John Doe"
        email="johndoe@example.com"
        phone="555-555-5555"
      />
      <Contact
        name="Jane Doe"
        email="janedoe@example.com"
        phone="555-666-6666"
      />
    </div>
  );
}

export default App;
