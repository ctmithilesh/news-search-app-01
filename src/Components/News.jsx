import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Loading from './Loading';
const News = (props) => {

    console.log('props',props)
    const data = props.data
    const cachedData = React.useMemo(() => data, [data]);

    console.log('cache',cachedData)

  return (

    <>
     <Box 
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        sx={{m:2, p:2 }}  
    >
    {cachedData != null && cachedData.length ? data.map((item)=>(
                 <Card sx={{ maxWidth: 345 }} key={item}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="140"
                     image={item.urlToImage}
                     alt={item.description}
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {item.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      {item.description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
                 <CardActions>
                   <a target="_blank" href={item.url} rel="noreferrer">
                        Read More
                   </a>
                 </CardActions>
               </Card>



     )): <Loading />}
    </Box>
    </>
  )
}

export default News
