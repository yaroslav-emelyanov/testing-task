import {ADD_PHRASE, REMOVE_PHRASE, SET_PHRASES} from "./types";

const initialState: StoreProps = {
     phrases: [
         {id: 1, text:'asdasdas'},
         {id: 2, text:'DFSDFS'},
         {id: 3, text:'SDFSD32234'},
     ]
};

type ListItem = {id: number, text: string}

type StoreProps = {
    phrases: Array<ListItem>
}

export default (state = initialState, action: {type: string, payload: any} ): StoreProps => {
    switch (action.type) {
        case SET_PHRASES :
            const phrasesFromLocalStorage: Array<ListItem> = action.payload;
            return {...state, phrases: phrasesFromLocalStorage};
        case ADD_PHRASE :
            const phrase: ListItem = action.payload;
            const newPhrases: Array<ListItem> = [...state.phrases, phrase];
            localStorage.setItem('list', JSON.stringify(newPhrases));
            return {...state, phrases: newPhrases};
        case REMOVE_PHRASE :
            const id: number  = action.payload;
            const phrases: Array<ListItem> = state.phrases.filter(p => p.id !== id);
            localStorage.setItem('list', JSON.stringify(phrases));
            return {...state, phrases};
        default :
            return state
    }
};