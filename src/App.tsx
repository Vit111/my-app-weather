import { Component } from 'react'
import './App.less';
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import { CharacterContext } from './context/CharacterContext';

class App extends Component {
  state = {
    selectedItem: null,
    setSelectedItem: this.onSelectItem.bind(this)
  }

  onSelectItem(item: any) {
    this.setState({
      selectedItem: item
    })
  }

  render() {
    const { Header, Content } = Layout
    return (
      <Layout>
        <Header>WEATHER API</Header>
        <CharacterContext.Provider value={this.state}>
          <Routes>
            <Route path='/' element={
              <Characters>
                <h1>Characters page</h1>
              </Characters>} />
            <Route path='/:name' element={<Info />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CharacterContext.Provider>
        <Content>
        </Content>
      </Layout>
    )
  }
}

export default App;
