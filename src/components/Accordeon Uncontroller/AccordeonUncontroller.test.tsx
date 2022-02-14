import {reducer, StateType} from './AccordeonUncontroller';

test('reducer in accordeonUncontroller', () => {
    //начальные данные:
    const state:StateType = { collapsed:false };
    //cовершаем действия-что должны получить

    const newState=reducer(state, { type: 'TOGGLE-COLLAPSED' })

    expect(newState.collapsed).toBe(true);

});