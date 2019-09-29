var pageWidth = window.innerWidth
document.write(`<style>html{ font-size: ${pageWidth / 10}; }</style>`);
function render() {
    let h = React.createElement
    let div = h('div', { className: 'parent' },
        h('h1', { className: 'red' }, number),
        h('button', { onClick: handleBtn1Click }, '+'),
        h('button', { onClick: handleBtn2Click }, '-'))
    ReactDOM.render(div, document.querySelector('#root'))
}

function render() {
    <div className="parent">
        <h1 className="red">{number}</h1>
        <button onClick={handleBtn1Click}>+</button>
        <button onClick={handleBtn2Click}>-</button>
    </div>
    ReactDOM.render(div, document.querySelector('#root'))
}

function render() {
    ReactDOM.render(
        <div className="parent">
            <h1 className="red">{number}</h1>
            <button onClick={handleBtn1Click}>+</button>
            <button onClick={handleBtn2Click}>-</button>
        </div>,
        document.querySelector('#root'))
}

function App(props) {
    return (
        <div className="parent">
            <h1 className="red">{number}</h1>
            <button onClick={handleBtn1Click}>{props.btn1}</button>
            <button onClick={handleBtn2Click}>{props.btn2}</button>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div className="parent">
                <h1 className="red">{this.state.number}</h1>
                <button onClick={this.handleBtn1Click.bind(this)}>{this.props.btn1}</button>
                <button onClick={this.handleBtn2Click.bind(this)}>{this.props.btn2}</button>
            </div>
        )
    }
    handleBtn1Click() {
        this.setState({
            number: this.state.number + 1
        })
    }
    handleBtn2Click() {
        this.setState({
            number: this.state.number - 1
        })
        this.setState((prevState) => {
            return { number: prevState.number - 1 }
        })
    }
}

function render() { ReactDOM.render(<App btn1="+1" btn2="-1" />, document.querySelector('#root')) }