import React from 'react'
import './Fotter.css'; // Import your CSS file for styling
class Fotter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
        };
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      render() {
        return (
          <footer className="footer-container">
            <div className="social-icons">
              {/* Add your social media icons here */}
            </div>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
              <button type="submit">Send</button>
            </form>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </footer>
        );
    }
}
 
export default Fotter;