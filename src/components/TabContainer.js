import { useState } from 'react'

const TabContainer = props => {

  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (e, tab) => {
    setActiveTab(tab)
  }

    return (
        <div className="tab-box">
          <div className="tab-container">
            {
              props.children.map( (item, index) =>
              <button className='tab-button'
              key={index}
              onClick={ (e) => changeTab(e, index)}>Tab {index + 1}</button>
              )
            }
          </div>
          <div className="tab-content">
            {
              props.children[activeTab]
            }
          </div>
        </div>
    )
}

export default TabContainer