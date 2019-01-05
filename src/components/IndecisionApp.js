import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';

import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    clearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        });
    }

        //handleDeleteOptions
        handleDeleteOptions = () => {
            this.setState(() => ({ options: [] }));
        }

        handlePick = () => {
            const randomNumber = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNumber];
            this.setState((prevState) => {
                return {
                    selectedOption: option
                };
            });
            //alert(option);        
        }

        handleAddOption = (option) => {
            if(!option){
                return 'Please enter a valid input field';
            } else if(this.state.options.indexOf(option) > -1) {
                return 'This item already exists';
            }
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }

        handleDeleteOption = (option) => {
            this.setState((prevState) => {
                return {
                    options: prevState.options.filter((curroption) => curroption !== option)
                };
            });
        }

    componentDidMount() {
        //console.log('fetching data');
        //does item exist in localstorage -> prevent null from being the new state -> if options condition
        //invalid json when parsing -> try catch
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options}));
            }
        } catch(e) {}
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <div className="widget">
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
                </div>
                </div>
                
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                ></OptionModal>
            </div>
        );
    }
}

export default IndecisionApp;