import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{

    //Using only one useState object instead of multiples
    //initialize all with empty strings. 
    const [userInput, setUserInput] = useState({
        titleEntered: '',
        amountEntered: '',
        dateEntered: ''
    });

    //make sure to update all values in the useState
    //otherwise the states will be deleted and only the updated 
    //state object is saved. 
    //use this format to always save the latest state info
    //by passing a function into the set state info
    const titleChangeHandler = (event) =>{
        setUserInput((prevState) =>{
            return {
                ...prevState, titleEntered: event.target.value
            };
        });
    };
    const amountChangeHandler = (event) =>{
        setUserInput((prevState) => {
            return{
                ...prevState, amountEntered: event.target.value
            };
        });
    };
    const dateChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return{
                ...prevState, dateEntered: event.target.value
            };
        });
    };

    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit New Expense</button>
            </div>
        </form>
    );
    
}

export default ExpenseForm;