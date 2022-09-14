
import React, { Component } from 'react'
import load from './load.gif'

const  Spinner=()=> {
        return (
            <div className='text-center '>
            <img src={load} alt=""  />
            </div>
          )
    }
    
export default Spinner;