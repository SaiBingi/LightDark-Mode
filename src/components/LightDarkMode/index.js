import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  changeMode = () => {
    this.setState(prevState => {
      if (prevState.isLightMode === true) {
        return {isLightMode: false}
      }
      return {isLightMode: true}
    })
  }

  render() {
    const {isLightMode} = this.state
    const typeOfModeText = isLightMode ? 'Light Mode' : 'Dark Mode'
    const typeOfHeading = isLightMode ? 'light-heading' : 'dark-heading'
    const typeOfContainer = isLightMode
      ? 'dark-mode-container'
      : 'light-mode-container'
    const typeOfButton = isLightMode ? null : 'light-mode-button'

    return (
      <div className="container">
        <div className={`card-container ${typeOfContainer}`}>
          <h1 className={`heading ${typeOfHeading}`}>Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className={`button ${typeOfButton}`}
              onClick={this.changeMode}
            >
              {typeOfModeText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
