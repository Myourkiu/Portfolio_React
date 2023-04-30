import {DiHtml5, 
  DiCss3, 
  DiJsBadge, 
  DiNodejsSmall, 
  DiMysql, 
  DiReact} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

  const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>, p: 'HTML Semântico, sintaxe, organização, etc'},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>, p: 'FlexBox, GRID, MediaQuery, Bootstrap, etc'},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>, p: 'Fetch API, Orientação a Objetos, DOM, etc'},
    {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>, p: 'NPM, NPX, testes em JavaScript simples, etc'},
    {id: 'mysql', name: 'MySQL', icon: <DiMysql/>, p: 'Queries, Criação de Database próprio, etc'},
    {id: 'react', name: 'React.js', icon: <DiReact/>, p: 'Components, modules, JSX, organização nos imports , etc'}
  ]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer