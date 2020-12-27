import { programmingLanguagesArr } from '../components/Body/specification/programmingLanguages';
export const ChangeBodyPage = idDetail => async dispatch =>{

    dispatch({ type:'BODY_PAGE' , payload: {
        bodyType: 'detail',
        detailArr: programmingLanguagesArr[idDetail].specification,
        image: programmingLanguagesArr[idDetail].image,
    } });
}
