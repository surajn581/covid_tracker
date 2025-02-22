import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const duration = 2;
const separator = ",";

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
    console.log({lastUpdate});
    if(!confirmed) {
        return 'loading..';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={duration} separator={separator}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases due to COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant='h5'>
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={duration}
                            separator={separator}
                            />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoverd cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={duration}
                            separator={separator}
                            />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;