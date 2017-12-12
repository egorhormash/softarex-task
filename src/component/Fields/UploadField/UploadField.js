import React, { Component } from 'react';
import './UploadField.scss';

class UploadField extends Component {

    imagePreview =(e) => {

        let reader = new FileReader();
        let image = e.target.files[0];

        reader.onloadend = () => {
            this.props.imagePreview(reader.result);
        };
        if(image) {
            reader.readAsDataURL(image);
        }
    };
    render() {
        return (
            <div className='upload-field'>
                <span className='icon'><i className='fa fa-cloud-upload fa-lg'/></span>
                <p className='upload-field-text'>Drop or <span>browse...</span></p>
                <input type='file' accept='image/*' onChange={this.imagePreview} />
            </div>
        );
    }
}

export default UploadField;
