import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Container from '@mui/material/Container';
import { Box, Toolbar, IconButton } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const Home = () => {
    const { user } = UserAuth();

  return (

    <Container maxWidth="xl">
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
    <p>Gorreado: {user && user.email}</p>

        <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
          <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Alocasia
        </Typography>
        <Typography variant="h5" component="div">
          8:00 - 13:00
        </Typography>
        <Typography color="text.secondary">
          <StarBorderPurple500Icon />
          Facundo Quintana 
        </Typography>
        {/* esto en caso de comentarios / o que necesite por ejemplo el proyector */}
 {/*
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
*/}
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
        </Grid>


 
      </Grid>
        
    </Box>
  </Container>


  );
};

export default Home;
