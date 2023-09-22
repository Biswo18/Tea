import React from 'react'
import './Home.css';
class Home extends React.Component {
    state = {  } 
    render() { 
        return ( 
        <div className="home">
        <header className="hero">
          <div className="hero-content">
            <h1>Welcome to My Awesome Website</h1>
            <p>Discover the latest trends and innovations in our world.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </header>
        <section className="features">
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <h2>Regular Tea</h2>
            <p>Tea is the second most consumed beverage on the planet . It has even greater consumption than Coffee.</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <h2>Lemon Tea</h2>
            <p>Immunity Booster Lemon is a great source of nutrients such as vitamin C, vitamin B6, as well as potassium, and magnesium.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h2>Masala Tea</h2>
            <p>Masala tea is a traditional beverage of Indian origin. Tea is brewed with aromatic spices.</p>
          </div>
        </section>
      </div>);
    }
}
 
export default Home;