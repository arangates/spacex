import React from 'react'
import Header from '../../components/Navigation/Header/Header'
import './Layout.css'

class Layout extends React.Component {

  render() {
    return (
      <>
        <Header />
        {
          <main className="main-container">
            {this.props.children}
          </main>
        }
      </>
    )
  }
}

export default Layout