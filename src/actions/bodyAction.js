import { programmingLanguagesArr } from '../components/Body/specification/programmingLanguages';

export const ChangeBodyPageToDetails = idDetail => async dispatch => {

    dispatch({
        type: 'BODY_PAGE', payload: {
            bodyType: 'details',
            detailArr: programmingLanguagesArr[idDetail].specification,
            image: programmingLanguagesArr[idDetail].image,
        }
    });
}

export const ChangeBodyPageToProject = idDetail => async dispatch => {

    dispatch({
        type: 'BODY_PAGE', payload: {
            bodyType: 'projects',
            projactObj: programmingLanguagesArr[idDetail].projects,
            image: programmingLanguagesArr[idDetail].image,
        }
    });
}

export const CloseBodyPage = () => async dispatch => {
    dispatch({
        type: 'BODY_PAGE', payload: {
            bodyType: null,
        }
    });
};
