import React ,{useState,useEffect  } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
// import {robots} from './robots';
// import { render } from '@testing-library/react';
import './App.css';
import Scroll from './Scroll'



function  App()  {
    
    const  [robots , setrobots]= useState([]);
    const  [searchfield , setrsearchfield]= useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(user=> {setrobots(user)});
    },[])

    const onSearchChange =(event)=>{  setrsearchfield( event.target.value)}

    const filterRobots =robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(robots.length===0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <Scroll>
                <CardList robots={filterRobots} /> 
                </Scroll>
                </div>
            )
        }}


export default App;