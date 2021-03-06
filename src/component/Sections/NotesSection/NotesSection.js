import React, { PureComponent } from 'react';
import './NotesSection.scss';
import noteTag from '../../../source/images/note-tag.png'

class NotesSection extends PureComponent {
    renderNotes = () => {
        return this.props.tags.map((tag, index) =>  (
            <div className={tag.isActive ? 'note note-active' : 'note'} key={index}
                 onClick={this.props.setHighlightedTag.bind(this, {xCoordinate: tag.xCoordinate, yCoordinate: tag.yCoordinate})}>
                <div className='note-image'>
                    <img  className='note-tag' src={noteTag}/>
                </div>
                <div className='note-text'>{tag.note}</div>
            </div>
        ))
    };

    render() {
        return (
            <section  className='notes-section' id= 'notes-list'>
                <div className='notes-toggle'>
                    <input className='radio' type='radio' id='note-choice-latest'
                           name='note' defaultChecked={true}/>
                    <label htmlFor='note-choice-latest' className='note-choice-label'>Latest</label>
                    <input className='radio' type='radio' id='note-choice-all'
                           name='note'/>
                    <label htmlFor='note-choice-all' className='note-choice-label'>All</label>
                </div>
                <div className={'notes-list'} >
                {this.renderNotes()}
                </div>
            </section>
        );
    }
}

export default NotesSection;
