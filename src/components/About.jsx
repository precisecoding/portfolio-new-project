import Avatar from '../assets/Avatar.png'

const About = () => {

    return (
        <div className='about'>
            <h2>About Me</h2>
            <img src={Avatar} alt='Jeff Rojas' />
            <p>My name is Jeff Rojas. I am from Austin, Tx orginally. I moved to colorado in 2014, and have lived all over colorado ever since. I have recently began my journey learning how to code by beggining with a full stack web development coding bootcamp from EdX @ DU. I am looking forward to continuing my education by taking additional bootcamps, obtaining many supporting business and coding certifications, networking with other people in this industry, and collaberating on group projects.</p>
        </div>
    )
}

export default About