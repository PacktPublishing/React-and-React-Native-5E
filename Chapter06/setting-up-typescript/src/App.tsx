type AppProps = {
  message: string;
};

function App({ message }: AppProps) {
  return <div>{message}</div>;
}

export default App;
