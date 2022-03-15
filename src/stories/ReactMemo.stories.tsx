import React, {useState} from "react";

export default {
    title: 'React.memo demo',

}


const NewMessageCounter = (props:{count:number} ) => { //{}-это когда прямо в пропсах мы делаем типизацию
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users=React.memo(UsersSecret); //обернули компоненту в memo чтобы она не перерисовывалась

export const Example1 = () => { //сдесь мы хотим отрисовать две компоненты которые сверху
    const[counter,setCounter]=useState(0);
    const[users,setUsers]=useState(['Dimych' ,'Gala','Olga'])
    const addUser=()=>{
const usersCopy=[...users,'Sveta'+ new Date().getTime()]
        setUsers(usersCopy);
    }
    return<>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessageCounter count={counter}/>
    <Users users={users}/>
        {/*и так, перерисовка example потащит за собой перерисовку users -но в нем*/}
        {/*нет никаких изменений*/}
    </>
}