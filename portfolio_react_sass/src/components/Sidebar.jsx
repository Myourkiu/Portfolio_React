import '../styles/components/sidebar.sass'

import Avatar from '../img/FotoCurriculo.jpg'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return <aside id="sidebar">
      <img  alt="" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">Download currículo</a>
    </aside>
  
}

export default Sidebar