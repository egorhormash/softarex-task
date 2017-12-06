import React, { Component } from 'react';
import './ImageSection.css';
import '../../PopUp/PopUp';
import PopUp from "../../PopUp/PopUp";


class ImageSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingTag: null,
            isTagEditing: false
        }
    }

    editTag = (e) => {

        const newTag = {
            xCoordinate: e.pageX - 12,
            yCoordinate: e.pageY - 12,
            isActive: true
        };
        this.setState({
            isTagEditing: true,
            xCoordinatePopUp: e.pageX - 68,
            yCoordinatePopUp: e.pageY - 77,
            addingTag: newTag
        });

    };

    onCancel = () => {
        this.setState({
            addingTag: null,
            isTagEditing: false,
        });
    };

    addTag = (tag) => {

        this.setState({
            addingTag: null,
            isTagEditing: false,
        });
      this.props.addTag(tag);
    };
    componentWillReceiveProps(){
        this.setState({
            addingTag: null,
            isTagEditing:false
        })
    }
    renderTags = () => {
            return this.props.tags.map((tag, index) => (
                <div className={tag.isActive ? 'tag tag-active' : 'tag'}
                     onClick={this.props.setHighlightedTag.bind(this, {xCoordinate: tag.xCoordinate, yCoordinate: tag.yCoordinate})}
                     key={index}
                     style={{'left': tag.xCoordinate, 'top': tag.yCoordinate}}/>
            ))

    };

    render() {
        const { addingTag } = this.state;
        const addingTagContainer = addingTag ? <div className={addingTag.isActive ? 'tag tag-active' : 'tag'}
                 style={{'left': addingTag.xCoordinate, 'top': addingTag.yCoordinate}}/>
            :
            null;

        return (
            <section className='image-section'>
                <div className='image-preview-window'  >
                    <img  src={this.props.imageUrl} onClick={this.editTag} onLoad={this.props.onUpdateImage}/>
                    <PopUp xCoordinatePopUp={this.state.xCoordinatePopUp}
                           yCoordinatePopUp = {this.state.yCoordinatePopUp}
                           addingTag={this.state.addingTag}
                           addTag={this.addTag}
                           onCancel={this.onCancel}
                           isActive={this.state.isTagEditing}/>
                    {this.renderTags()}
                    {addingTagContainer}
                </div>
            </section>
        );
    }
}

export default ImageSection;
