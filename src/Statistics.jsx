import { Component } from "react";
import { Notification } from "./Notification.jsx";

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addGood = (event) => {
        this.setState({ good: this.state.good + 1 })
    }

    addNeutral = (event) => {
        this.setState({ neutral: this.state.neutral + 1 })
    }

    addBad = (event) => {
        this.setState({ bad: this.state.bad + 1 })
    }

    render() {
        const total = this.state.good + this.state.neutral + this.state.bad;
        const positivePercentage = total === 0 ? 0 : Math.round((this.state.good / total) * 100);
        return (
            <div className="reviews">
                <h2>Please leave feedback</h2>
                <button onClick={this.addGood}>Good</button>
                <button onClick={this.addNeutral}>Neutral</button>
                <button onClick={this.addBad}>Bad</button>

                <h2>Statistics</h2>
                {total === 0 ? (
                    <Notification message=" There is no feedback " />
                ) : (
                    <>
                        <p>Good: <span>{this.state.good}</span></p>
                        <p>Neutral: <span>{this.state.neutral}</span></p>
                        <p>Bad: <span>{this.state.bad}</span></p>
                        <p>Total: <span>{total}</span></p>
                        <p>Positive feedback: <span>{positivePercentage}%</span></p>
                    </>
                )}
            </div>
        )
    }
}