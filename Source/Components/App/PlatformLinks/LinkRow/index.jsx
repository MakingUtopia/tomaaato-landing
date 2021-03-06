import * as React from 'react'
import './styles.css'

export default class LinkRow extends React.Component {
    constructor() {
        super()
        this.state = {
            hovering: false
        }
    }

    get elementTag() {
        return (this.props.href === "") ? "div" : "a"
    }

    get elementProps() {
        return {
            className: "row platform-links__row",
            onMouseEnter: ()=>{
                this.setState({hovering: true})
            },
            onMouseLeave: ()=>{
                this.setState({hovering: false})
            },
            style: {
                backgroundColor: this.state.hovering ?
                    "#fff" : "transparent",
                color: this.state.hovering ? 
                    "#060516" : "inherit"
            },
            href: (this.props.href !== "") ?
                this.props.href : undefined,
            target: (this.props.href !== "") ?
                "_blank" : undefined
        }
    }

    get iconElement() {
        let invert = (
            this.state.hovering &&
            this.props.externalImg
        )
        return React.cloneElement(
            this.props.icon, {
                className: "platform-links__icon" + (
                    invert ? 
                        " platform-links__icon--invert" : ""    
                )
            }
        )
    }

    get elementContents() {
        return <>
            <div className="col-3 platform-links__icon-col">
                {this.iconElement}
            </div>
            <div className="col-9 platform-links__text-col">
                {this.props.children}
            </div>
        </>
    }

    render() {
        return React.createElement(
            this.elementTag,
            this.elementProps,
            this.elementContents
        )
    }
}