import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import Wrapper from '../assets/wrappers/AboutPage'
const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className='underline'></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus, alias ipsa dignissimos, nesciunt aliquam veritatis ab cupiditate harum perspiciatis, a laborum ipsum quae consequuntur. Nisi quo voluptatem nesciunt repudiandae modi omnis! Accusantium veniam omnis quia accusamus officiis deleniti cum, quaerat deserunt suscipit. Corporis iste nihil cumque reiciendis animi assumenda!  </p>
      </article>
    </Wrapper>
  </main>
}


export default AboutPage
