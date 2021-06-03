import React from 'react'
import ReactDOM from 'react-dom';
import s from './ModalWrapper.module.css'

class ModalWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.base = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.base)
        this.base.onmousedown = (e) => {
            e.target.className === s.wrapper && this.props.setModalVisibility(false);
        }
        this.base.className = s.wrapper
        document.getElementById('root').style.position = 'fixed'
        document.getElementById('root').style.width = '100%'
    }

    componentWillUnmount() {
        document.getElementById('root').style.position = 'relative'
        document.body.removeChild(this.base)
    }

    render() {
        console.log(this.props)
        return this.props.modalVisibility ? ReactDOM.createPortal(
            <this.props.modalContent setModalContent={this.props.setModalContent} setModalVisibility={this.props.setModalVisibility}/>,
            this.base
        ) : null
    }
}

export default ModalWrapper
