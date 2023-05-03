import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Box, Toolbar, IconButton, Container } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const Home = () => {
  const { user } = UserAuth();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>


        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />


          Reservas del dia
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
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
              </Item>
            </Grid>


            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
              <Item>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Alocasia
                    </Typography>
                    <Typography variant="h5" component="div">
                      8:00 - 13:00
                    </Typography>
                    <Typography color="text.secondary">
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
              </Item>
            </Grid>


          </Grid>

        </Box>
      </Box>
    </Container>

  )
};

export default Home;
