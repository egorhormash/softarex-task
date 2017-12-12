import React, { Component } from 'react';
import './Gallery.scss';
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
        this.state.tags.map(tag => {
            tag.isActive = false;
        });
        this.setState(prevState => ({
            tags: [...prevState.tags, tag],
        }));
    };

    setHighlightedTag = (coordinates) => {
        this.state.tags.map(tag => {
            tag.xCoordinate === coordinates.xCoordinate && tag.yCoordinate === coordinates.yCoordinate ?
                tag.isActive = true : tag.isActive = false
        });
        this.setState(prevState => ({
            tags: prevState.tags.splice().concat(this.state.tags)
        }));
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
