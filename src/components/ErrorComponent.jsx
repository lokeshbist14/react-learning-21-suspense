function ErrorComponent() {
  throw new Error("Something went wrong!");

  return <h3>This will not appear.</h3>;
}

export default ErrorComponent;