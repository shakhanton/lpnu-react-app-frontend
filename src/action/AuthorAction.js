import * as ActionType from './ActionType';
import AuthorApi from '../api/AuthorApi';
import { ApiCallBeginAction } from './ApiAction';


export const getAuthorsResponse = authors => {
    console.log("authors", authors)
    return {
        type: ActionType.GET_AUTHORS_RESPONSE,
        authors
    }
}




export function getAuthorsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                console.log(authors)
                let formattedAuthors = authors.Items.map((Element)=>{

                    return {
                        value: Element.id.S,
                        text: Element.firstName.S,
                    }
                })
                // const authorsObj = JSON.parse(authors.body)
                console.log(formattedAuthors)
                dispatch(getAuthorsResponse(formattedAuthors));
            }).catch(error => {
                throw error;
            });
    };
}
