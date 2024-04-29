import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>{this.props.name} Class</h1>
        <h4>{count}</h4>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <h2>Bengaluru</h2>
        <h3>Contact: sophia@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
