import { Box, Button, Container, FormControl, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import News from './News'

const Search = () => {

    const [query, setQuery] = useState()
    const [news, setNews] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleInputChange = (e) => {
            const target = e.target 
            const name = target.name 
            console.log(target.value)
            if(name === 'search'){
                setQuery(target.value)
            }


    }
    useEffect(()=>{

        const fetchNews = async()=>{

            await axios.get(`
            https://newsapi.org/v2/everything?q=india&from=2023-06-11&sortBy=publishedAt&apiKey=5497647da2114041ad647eba8e002d6f
            
            `)
            .then(res=>{
                console.log(res)
                setNews(res.data.articles)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    fetchNews()



    },[])

    const onSubmit = ()=>{
            console.log(query)
            const fetchNews = async()=>{

                await axios.get(`
                https://newsapi.org/v2/everything?q=${query}&from=2023-06-11&sortBy=publishedAt&apiKey=5497647da2114041ad647eba8e002d6f
                
                `)
                .then(res=>{
                    console.log(res)
                    setNews(res.data.articles)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
        fetchNews()

    }


  return (
    <Container sx={{m:2, p:2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{ width: '25ch' }}>
                    <TextField 
                        label="search" 
                        name="search"
                        id="search"
                        {...register("search", { required: true })}
                        onChangeCapture={handleInputChange}
                    />
            </FormControl>
            <FormControl sx={{m:2, p:1}}>
                <Button variant="contained" color="success"  type="submit">
                    Search
                </Button>
            </FormControl>
        </form>
    
                <News data={news} />
    </Container>
  )
}

export default Search
