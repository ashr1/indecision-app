import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (evt) => {
        evt.preventDefault();

        const textValue = evt.target.elements.optionText.value.trim();
        const error = this.props.handleAddOption(textValue);

        if(!error) {
            evt.target.elements.optionText.value = '';
        }
        
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
              <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="optionText" />
                <button className="button">Add Option</button>
              </form>
              
            </div>
        );
    }
}

