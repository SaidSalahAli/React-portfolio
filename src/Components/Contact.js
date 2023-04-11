import React from "react";
import { Zoom } from "react-reveal";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements["name"].value;
    const email = event.target.elements["email"].value;
    const phone = event.target.elements["phone"].value;
    const message = event.target.elements["message"].value;
    
    // validate email and phone number
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (phone.length < 11) {
      alert("Please enter a valid phone number.");
      return;
    }

    // send form data to server or do other actions
    console.log(name, email, phone, message);
  };

  return (
    // <!--===== CONTACT =====-->
    <section class="contact section" id="contact">
      <h2 class="contact-title">Contact</h2>

      <div class="contact__container bd-grid">
        <Zoom>
          <form onSubmit={handleSubmit} class="contact__form">
            <input type="text" name="name" placeholder="Name" class="contact__input" />
            <input type="email" name="email" placeholder="Email" class="contact__input" />
            <input type="number" name="phone" placeholder="Number" class="contact__input" />
            <textarea
              name="message"
              id=""
              cols="0"
              rows="10"
              class="contact__input"></textarea>
            <input
              type="submit"
              value="Submit"
              class="contact__button button"
            />
          </form>
        </Zoom>
      </div>
    </section>
  );
}
export default Contact
