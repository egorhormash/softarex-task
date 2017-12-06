import React, { Component } from 'react';
import './Gallery.css';
import ImageSection from "../Sections/ImageSection/ImageSection";
import NotesSection from "../Sections/NotesSection/NotesSection";
import Header from "../Header/Header";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            tags:[]
        }
    }

    imagePreview =(imageUrl) => {
        this.setState({
            imageUrl : imageUrl
        })
    };

    addTag = (tag) => {
        const currentTagList = this.state.tags;

        currentTagList.map(tag => {
           tag.isActive = false;
        });

        currentTagList.push(tag);
        this.setState({
            tags: currentTagList
        })
    };

    setHighlightedTag = (coordinates) => {
        const currentTagList = this.state.tags;
        currentTagList.map(tag => {
            tag.xCoordinate === coordinates.xCoordinate && tag.yCoordinate === coordinates.yCoordinate ?
                tag.isActive = true : tag.isActive = false
        });
        this.setState({
            tags: currentTagList
        })
    };
    onUpdateImage = () => {
        this.setState({
            tags:[]
         })
    };

    render() {
        return (
            <div className='gallery'>
                <Header imagePreview={this.imagePreview} />
                <div className='gallery-content'>
                <ImageSection setHighlightedTag={this.setHighlightedTag}
                              onUpdateImage={this.onUpdateImage}
                              imageUrl={this.state.imageUrl}
                              addTag={this.addTag}
                              tags={this.state.tags}/>
                <NotesSection setHighlightedTag={this.setHighlightedTag}
                              tags={this.state.tags}/>
                </div>
            </div>
        );
    }
}

export default Gallery;
