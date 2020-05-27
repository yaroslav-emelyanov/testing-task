import {ADD_PHRASE, REMOVE_PHRASE, SET_PHRASES} from "./types";

interface ListItem {id: number, text: string}

interface  ActionType {
    type: string,
    payload?: any
}

export const addPhrase = (phrase: ListItem): ActionType => ({type: ADD_PHRASE, payload: phrase});
export const setPhrases = (phrases: Array<ListItem>): ActionType => ({type: SET_PHRASES, payload: phrases});
export const removePhrase = (id: number): ActionType => ({type: REMOVE_PHRASE, payload: id});
