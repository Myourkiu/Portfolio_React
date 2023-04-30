import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, href: 'https://www.linkedin.com/in/Myourkiu'},
    {name: 'github', icon: <FaGithub/>, href: 'https://github.com/Myourkiu'},
    {name: 'instagram', icon: <FaInstagram/>, href: 'https://www.instagram.com/figpedroo/'}
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.href} target='_blank' className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks