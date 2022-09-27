import TabContainer from './TabContainer';
import TabOne from './TabOne'
import TabTwo from './TabTwo'

function App() {

  const callback = (e, info) => {
    console.log('yeet')
  }

  return (
    <div className="App">
      <TabContainer>
        <TabOne />
        <TabTwo />
      </TabContainer>
    </div>
  );
}

export default App;