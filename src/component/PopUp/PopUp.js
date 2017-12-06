import React, { Component } from 'react';
import './PopUp.css';

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            isActive: this.props.isActive,
        };
    }

    onNoteChange = (e) => {
        this.setState({
            noteText: e.target.value
        })
    };

    onSaveNote = (e) => {
        e.preventDefault();
        const newTag = {...this.props.addingTag, note: this.state.noteText};
        this.props.addTag(newTag);
    };

    deactivatePopUp = () => {
        this.props.onCancel();
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            isActive: newProps.isActive,
            noteText: '',
        })
    }

    render() {

        const popupContainer = this.state.isActive ?
            <div className={'popup-active'}
                 style={{'left': this.props.xCoordinatePopUp, 'top': this.props.yCoordinatePopUp}}>
                <form onSubmit={this.onSaveNote}>
                    <input type='text' autoFocus={true}
                           value={this.state.noteText}
                           onChange={this.onNoteChange}>
                    </input>
                    <button type='submit' className ='popup-btn submit-btn'
                            disabled={!this.state.noteText}>Ok</button>
                    <button type='reset' className ='popup-btn reset-btn'
                            onClick={this.deactivatePopUp}>Cancel</button>
                    {this.renderNotes}
                </form>
            </div>
            :
            null;

        return (
            <div>{popupContainer}</div>
        );
    }
}

export default PopUp;
