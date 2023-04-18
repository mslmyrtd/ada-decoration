import Wrapper from "../assets/wrappers/ContactComp"

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestiae! Tenetur laboriosam, ex eum eos dolorem aperiam alias sequi placeat.</p>
        <form className="contact-form">
          <input type="email" className='form-input' placeholder='enter email' />
          <button type='submit' className='submit-btn'>subscribe</button>
        </form>
      </div>
    </div>
  </Wrapper>
}


export default Contact
