import React from "react";
import CalendarPages from "./Components/Calendar";
import dates from "./data";
import "./App.scss";

class App extends React.Component {
  getMonth = monthName => {
    this.setState({ month: monthName });
  };
  render() {
    return (
      <div className="App">
        <CalendarPages.CalendarPage />
      </div>
    );
  }
}

export default App;
