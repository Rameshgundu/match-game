import './index.css'

const TabsItem = props => {
  const {tabs, onTab, isActive} = props
  const {displayText, tabId} = tabs
  const tabChange = () => {
    onTab(tabId)
  }
  const changeClr = isActive && 'active-tab'
  return (
    <li className={`tabs-list ${changeClr}`}>
      <button type="button" className="tabs-btn" onClick={tabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsItem
