import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any

}


type SelectPropsType = {
    value?: any//селект принимает текущее выбранное значение
    onChange: (value: any) => void//мы хотим знать когда селект изменится
    items: Array<ItemType>//как в акардеоне-дайте нам items

}

//самодельный селект
export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    const toggleItems = () => setActive(!active);
    const itemClick = (value: string) => {
        props.onChange(value)
        toggleItems() //при выборе селект закрывается
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { //стрелка вниз и вверх
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false); //спрячем
        }
    }


    return (
        <>

            <div className={`${s.wrapper} `} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => <div key={i.value} onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }} className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                                   onClick={() => itemClick(i.value)}>{i.title}</div>)}
                        {/*условие внутри -это подсветка внутри селекта*/}
                    </div>
                }
            </div>
        </>
    );
};

export default Select;