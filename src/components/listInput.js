import React from 'react'; 
import './listInput.css';
function handleSubmit(e) {
    
}
function UserInput({listName='default'}) {
    return(
        <form className="form" method="post" onSubmit={handleSubmit}>
            <label>
                {listName} Type: <input name="IncomeType" />
            </label>
            <label>
                {listName} Value: <input name="IncomeValue" />
            </label>
            <button type="submit">Add Income</button>
        </form>
    );
}
export default UserInput;