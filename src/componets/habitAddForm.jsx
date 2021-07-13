import React, { Component } from 'react';

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault(); //브라우저의 기본 기능을 취소하는 것 (리프레쉬 방지)
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {

        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="습관을 입력하세요."
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;