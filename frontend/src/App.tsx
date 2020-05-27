import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ButtonAdd from "./components/ButtonAdd";
import List from "./components/List";
import * as actions from './store/actions'

type ListItem = {id: number, text: string}

const App: React.FC = ({phrases, addPhrase, removePhrase, setPhrases }: any) => {

    useEffect(() => {
        const list = localStorage.getItem('list');
        if (list) setPhrases(JSON.parse(list));
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8089');
        const json: ListItem = await response.json();
        addPhrase(json)
    };

  return (
    <div className="App pt-5 mt-5">
      <div className="container w-25 bg-light">
          <h2 className="pt-4 pb-4">Генератор фраз</h2>
          <ButtonAdd title="Добавить фразу" fetchData={fetchData}/>
          <List phrases={phrases} removePhrase={removePhrase}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => state;

const mapStateToActions = (dispatch: any) => {
    return {
        removePhrase: (id: number) => dispatch(actions.removePhrase(id)),
        addPhrase: (phrase: ListItem) => dispatch(actions.addPhrase(phrase)),
        setPhrases: (phrases: Array<ListItem>) => dispatch(actions.setPhrases(phrases))
    }
};

export default connect(mapStateToProps, mapStateToActions)(App);
