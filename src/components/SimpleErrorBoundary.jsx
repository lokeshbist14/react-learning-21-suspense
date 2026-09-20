import React from "react";

class SimpleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Something went wrong!</h3>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SimpleErrorBoundary;