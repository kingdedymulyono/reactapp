import React from 'react'
import Boxtemp from '../Boxtemp/Boxtemp'
import { useState } from 'react'
import Result from '../Result/Result'
import Grid from '../Grid/Grid'
import Button from '../Button/Button'
const Filter = () => {
    const [select,updSelect]=useState("default")
    const handleBtnAnime = () => {
        updSelect("anime");
    }
    const handleBtnStore = () => {
        updSelect("store");
    }
    const handleBtnFilms = () => {
        updSelect("films");
    }
    const handleBtnProducts = () => {
        updSelect("products");
    }
    const handleBtnJokes = () => {
        updSelect("jokes");
    }
    // const handleChange =(event)=>{
    //     updSelect(event.target.value)
    // }
    return (
        <>
            <Boxtemp aos="fade-up" delay={0}>
                <br />
                <Grid>
                    <Button classlist="btn btn-primary animBtnBlue col-2" text="Anime" btnFunc={handleBtnAnime}/>
                    <Button classlist="btn btn-primary animBtnBlue col-2" text="Store"
                    btnFunc={handleBtnStore}/>
                    <Button classlist="btn btn-primary animBtnBlue col-2" text="Films"
                    btnFunc={handleBtnFilms}/>
                    <Button classlist="btn btn-primary animBtnBlue col-2" text="Products"
                    btnFunc={handleBtnProducts}/>
                    <Button classlist="btn btn-primary animBtnBlue col-2" text="Jokes"
                    btnFunc={handleBtnJokes}/>
                    </Grid>
                    <br />
                {/* <p>{select}</p> */}
                <Result res={select}/>
            </Boxtemp>
        </>
    )
}

export default Filter