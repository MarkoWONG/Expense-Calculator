import './Home.css';
import DropdownList from './components/dropDown';
import UserInput from './components/listInput';
function spendingTech(profit, ratio) {
    return profit * (ratio/100)
}

function Home() {
    let Income_sum = 100000
    let cost_sum = 2000
    let needRatio = 50
    let wantRatio = 30
    let savingRatio = 20
    
    return (
        <div class="container">
            <div class="main">
                <div class="Income-Title">
                    <h1>INCOME</h1>
                </div>
                <div class="Cost-Title">
                    <h1>Cost</h1>
                </div>
                <div class="Profit-Title">
                    <h1>PROFIT</h1>
                </div>
                <div class="Income-Value">
                    <p>${Income_sum}</p>
                </div>
                <div class="Cost-Value">
                    <p>${cost_sum}</p>
                </div>
                <div class="Profit-Value">
                    <p>${Income_sum-cost_sum}</p>
                </div>
                <div class="Income-BreakDown">
                    <UserInput listName={"Income"}></UserInput>
                </div>
                <div class="Cost-BreakDown">
                    <UserInput listName={"Cost"}></UserInput>
                </div>
                <div class="Profit-BreakDown">
                    <div class="Needs_title">
                        <h2>NEEDS</h2>
                    </div>
                    <div class="Wants_title">
                        <h2>WANTS</h2>
                    </div>
                    <div class="Savings_title">
                        <h2>SAVINGS</h2>
                    </div>
                    <div class="Needs-Value">
                        <p>${spendingTech((Income_sum-cost_sum),needRatio)}</p>
                    </div>
                    <div class="Wants-Value">
                        <p>${spendingTech((Income_sum-cost_sum),wantRatio)}</p>
                    </div>
                    <div class="Savings-Value">
                        <p>${spendingTech((Income_sum-cost_sum),savingRatio)}</p>
                    </div>
                    <div class="Needs-Ratio">
                        <p>Ratio: 50%</p>
                    </div>
                    <div class="Wants-Ratio">
                        <p>Ratio: 30%</p>
                    </div>
                    <div class="Saving-Ratio">
                        <p>Raito: 20%</p>
                    </div>
                </div>
            </div>
            <div class="Header">
                <div class="Title">
                    <h1>Stonks</h1>
                </div>
                <div class="Time">
                    <h2>Time</h2>
                    <DropdownList></DropdownList>
                </div>
            </div>
            <div class="Footer">
                <p>By Marko Wong</p>
            </div>
        </div>

    );
}

export default Home;
