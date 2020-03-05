import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team1: 0,
            team2: 0,
            team3: 0,
            team4: 0,
            team5: 0,
        }
    }

    handleClick(e, string) {
        e.preventDefault()
        switch (string) {
            case '1':
                let val1 = this.state.team1;
                console.log(val1)
                this.setState({ team1: val1 + 1 });
                break;
            case '2':
                let val2 = this.state.team2;
                this.setState({ team2: val2 + 1 });
                break;
            case '3':
                let val3 = this.state.team3;
                this.setState({ team3: val3 + 1 });
                break;
            case '4':
                let val4 = this.state.team4;
                this.setState({ team4: val4 + 1 });
                break;
            case '5':
                let val5 = this.state.team5;
                this.setState({ team5: val5 + 1 });
                break;
            default:
                break;
        }
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            team1: 0, team2: 0, team3: 0, team4: 0, team5: 0
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container d-flex justify-content-center">
                    <div className="row my-auto">
                        <div className="card bg-success button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-3 rounded">Game</h3>
                            </div>
                        </div>
                        <div className="card bg-info button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-1 rounded">Team 1</h3>
                                <h5 className="card-text d-flex">Points: <p className="bg-dark scorer">{this.state.team1}</p></h5>
                            </div>
                        </div>
                        <div className="card bg-info button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-1 rounded">Team 2</h3>
                                <h5 className="card-text d-flex">Points: <p className="bg-dark scorer">{this.state.team2}</p></h5>
                            </div>
                        </div>
                        <div className="card bg-info button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-1 rounded">Team 3</h3>
                                <h5 className="card-text d-flex">Points: <p className="bg-dark scorer">{this.state.team3}</p></h5>
                            </div>
                        </div>
                        <div className="card bg-info button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-1 rounded">Team 4</h3>
                                <h5 className="card-text d-flex">Points: <p className="bg-dark scorer">{this.state.team4}</p></h5>
                            </div>
                        </div>
                        <div className="card bg-info button">
                            <div className="card-body">
                                <h3 className="card-title bg-dark px-2 py-1 rounded">Team 5</h3>
                                <h5 className="card-text d-flex">Points: <p className="bg-dark scorer">{this.state.team5}</p></h5>
                            </div>
                        </div>
                    </div>
                        

                    <div className="row" id="button-row">
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleClick(event, '1') }}>Team 1</button>
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleClick(event, '2') }}>Team 2</button>
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleClick(event, '3') }}>Team 3</button>
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleClick(event, '4') }}>Team 4</button>
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleClick(event, '5') }}>Team 5</button>
                        <button className="btn btn-primary"
                            onClick={(event) => { this.handleReset(event) }}>Reset</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App