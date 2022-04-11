import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  changeBackground = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    const lightMode = darkMode ? 'DarkMode' : 'LightMode'
    const bgContainer = darkMode ? 'bg-container-light' : 'bg-container-dark'
    return (
      <div className={bgContainer}>
        <button type="button" onClick={this.changeBackground}>
          {lightMode}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
