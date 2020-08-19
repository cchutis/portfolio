import React from 'react'
// import SkyLight from 'react-skylight'

class PortfolioModal extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        } 
        return (
            <div>Hello Im a Modal</div>
        )
    }
}

export default PortfolioModal;