import './Home.css';

function Home() {
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
                <p>$99999</p>
            </div>
            <div class="Cost-Value">
                <p>$99999</p>
            </div>
            <div class="Profit-Value">
                <p>$99999</p>
            </div>
            <div class="Income-BreakDown">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </div>
            <div class="Cost-BreakDown">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
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
                    <p>$999</p>
                </div>
                <div class="Wants-Value">
                    <p>$999</p>
                </div>
                <div class="Savings-Value">
                    <p>$999</p>
                </div>
                <div class="Needs-Ratio">
                    <p>Input</p>
                </div>
                <div class="Wants-Ratio">
                    <p>Input</p>
                </div>
                <div class="Saving-Ratio">
                    <p>Input</p>
                </div>
            </div>
        </div>
        <div class="Header">
            <div class="Title">
                <h1>Stonks</h1>
            </div>
            <div class="Time">
                <h2>Time</h2>
            </div>
        </div>
        <div class="Footer">
            <p>By Marko Wong</p>
        </div>
    </div>

  );
}

export default Home;
