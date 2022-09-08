import React, { Component } from "react";
import './Modal.css'
import Backdrop from "../Backdrop/Backdrop";
import { useMemo } from "react";
import { useEffect } from "react";
const Modal = (props) => {

    // const Memo = useMemo((prevProps, nextProps) => {
    //     return prevProps.show !== nextProps.show || nextProps.children !== props.children
    // });
    // Memo();
    useEffect(() => {
        console.log('[Model] willUpdate');
    });
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {/* Test Modal */}
                {props.children}
            </div>
        </React.Fragment>
    );
};






export default Modal;

// class Modal extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.show !== this.props.show || nextProps.children !== this.props.children
//     }
//     componentDidUpdate() {
//         console.log('[Model] willUpdate');
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
//                 <div className="Modal"
//                     style={{
//                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                         opacity: this.props.show ? '1' : '0'
//                     }}>
//                     {/* Test Modal */}
//                     {this.props.children}
//                 </div>
//             </React.Fragment>
//         );
//     }
// };
// export default Modal;