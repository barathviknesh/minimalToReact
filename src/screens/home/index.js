import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PeopleIcon from '@mui/icons-material/People';

const usestyles = makeStyles((theme) => ({
    root: {

    },

    bookRoom: {

        // [theme.breakpoints.down('md')]: {
        //   marginTop:"8px",
        // },


    },
}))


export const Home = () => {

    const classes = usestyles();




    return (

        <div className={classes.root}>
            <Grid container spacing={2} style={{marginTop:"20px"}}>
                <Grid item xs={12} sm={12} md={4} style={{}}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'714 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Total Booking'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/total_booking.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'311 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Check In'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/check_in.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'124 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Check Out'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/check_out.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8} style={{}}>
                    {/* start */}
                    <Grid container style={{ justifyContent: 'space-between' }} xs={12} sm={12} md={12} >
                        <Grid item xs={12} sm={12} md={5.9}>
                            {/* <div>1 </div> */}
                            <Paper style={{ height: "290px", border: "1px", borderRadius: "15px", backgroundColor: "#d3f5cd" }}>
                                <div style={{
                                    display: "flex",
                                    // flexDirection: "column",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // marginLeft: "10px",
                                    // padding: "15px"
                                }}>
                                    <img src={"images/total_income.png"} alt="logo" style={{
                                        height: "280px",
                                        maxWidth: "96%",
                                        "object-fit": "contain",

                                    }} />
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5.9} >
                            {/* <div>2 </div> */}
                            <Paper style={{ height: "290px", border: "1px", borderRadius: "15px" }}>
                                <div style={{
                                    display: "flex",
                                    // flexDirection: "column",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // marginLeft: "10px",
                                    // padding: "15px"
                                }}>
                                    <img src={"images/booked_room.png"} alt="logo" style={{
                                        height: "280px",
                                        maxWidth: "96%",
                                        "object-fit": "contain",

                                    }} />
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} xs={12} sm={12} md={13} style={{ marginTop: "8px" }}>
                        {/* <div>3 </div> */}
                        <Grid item xs={12} sm={12} md={12}>
                            {/* <div>xs=8 4</div> */}
                            <Paper style={{ height: "165px", border: "1px", borderRadius: "15px", }}>
                                <div style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <img src={"images/check_in_check_out.png"} alt="logo" style={{
                                        height: "160px",
                                        maxWidth: "90%",
                                        "object-fit": "contain",
                                        position: 'absolute',
                                        marginLeft: "6px",
                                        marginTop: "2px"

                                    }} />
                                </div>

                            </Paper>
                        </Grid>
                    </Grid>
                    {/* end */}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 3</div> */}
                    <Paper style={{ height: "480px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/room_available.png"} alt="logo" style={{
                                height: "470px",
                                maxWidth: "96%",

                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={4}> */}
                {/* <div>xs=8 4</div>  */}
                {/* <Paper style={{ height: "169px", border: "1px", borderRadius: "15px" }}></Paper>  */}
                {/* </Grid> */}
                <Grid item xs={12} sm={12} md={8}>
                    {/* <div>xs=8 5</div> */}
                    <Paper style={{ height: "505px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/reservation_stats.png"} alt="logo" style={{
                                height: "478px",
                                maxWidth: "96%",

                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 6</div> */}
                    <Paper style={{ height: "505px", border: "1px", borderRadius: "15px" }}></Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <div>xs=8 6</div> */}
                    <Paper elevation={0} style={{ height: "570px", border: "1px", borderRadius: "15px" }}>
                        <div style={{}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ margin: "16px" }}>
                                    <Typography variant="h6" style={{ fontWeight: "700" }}>{"Newest Booking"}</Typography>
                                    <Typography variant="subtitle2">{"12 Booking"}</Typography>
                                </div>
                                <div style={{ margin: "14px", marginTop: "26px" }}>
                                    <IconButton >
                                        <ArrowBackIosNewOutlinedIcon style={{ height: "16px" }} />

                                    </IconButton>
                                    <IconButton >
                                        <ArrowForwardIosOutlinedIcon style={{ height: "16px" }} />
                                    </IconButton>
                                </div>
                            </div>
                            <div style={{
                                height: "480px",
                                //  backgroundColor: "grey",
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: "30px"
                            }}>
                                <div style={{
                                    height: "410px",
                                    backgroundColor: '#f4f6f8',
                                    border: "2px",
                                    borderRadius: "16px",
                                    marginRight: "20px"

                                }}>
                                    <div style={{ marginLeft: "18px", }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: "18px"
                                        }}>
                                            <Avatar sx={{ width: 46, height: 46, marginTop: '18px' }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                                            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                                                {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                                                <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"harrison Stein"}</Typography>
                                                <Typography variant="body2">{"16 Feb 2022 8:38 PM"}</Typography>
                                                {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                                            </div>

                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginLeft: "20px",
                                            marginRight: '58px',
                                            marginTop: "30px"
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <KeyOutlinedIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <PeopleIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '12px', marginTop: '24px' }}>
                                        <img src={"https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg"} alt="logo" style={{
                                            height: "230px",
                                            maxWidth: "95%",
                                            "object-fit": "contain",
                                        }} />
                                    </div>
                                </div>
                                <div style={{
                                    height: "410px",
                                    backgroundColor: '#f4f6f8',
                                    border: "2px",
                                    borderRadius: "16px",
                                    marginRight: "20px"

                                }}>
                                    <div style={{ marginLeft: "18px", }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: "18px"
                                        }}>
                                            <Avatar sx={{ width: 46, height: 46, marginTop: '18px' }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                                            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                                                {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                                                <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"harrison Stein"}</Typography>
                                                <Typography variant="body2">{"16 Feb 2022 8:38 PM"}</Typography>
                                                {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                                            </div>

                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginLeft: "20px",
                                            marginRight: '58px',
                                            marginTop: "30px"
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <KeyOutlinedIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <PeopleIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '12px', marginTop: '24px' }}>
                                        <img src={"https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg"} alt="logo" style={{
                                            height: "230px",
                                            maxWidth: "95%",
                                            "object-fit": "contain",
                                        }} />
                                    </div>
                                </div>
                                <div style={{
                                    height: "410px",
                                    backgroundColor: '#f4f6f8',
                                    border: "2px",
                                    borderRadius: "16px",
                                    marginRight: "20px"

                                }}>
                                    <div style={{ marginLeft: "18px", }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: "18px"
                                        }}>
                                            <Avatar sx={{ width: 46, height: 46, marginTop: '18px' }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                                            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                                                {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                                                <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"harrison Stein"}</Typography>
                                                <Typography variant="body2">{"16 Feb 2022 8:38 PM"}</Typography>
                                                {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                                            </div>

                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginLeft: "20px",
                                            marginRight: '58px',
                                            marginTop: "30px"
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <KeyOutlinedIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <PeopleIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '12px', marginTop: '24px' }}>
                                        <img src={"https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg"} alt="logo" style={{
                                            height: "230px",
                                            maxWidth: "95%",
                                            "object-fit": "contain",
                                        }} />
                                    </div>
                                </div>
                                <div style={{
                                    height: "410px",
                                    backgroundColor: '#f4f6f8',
                                    border: "2px",
                                    borderRadius: "16px",
                                    marginRight: "20px"

                                }}>
                                    <div style={{ marginLeft: "18px", }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: "18px"
                                        }}>
                                            <Avatar sx={{ width: 46, height: 46, marginTop: '18px' }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                                            <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                                                {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                                                <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"harrison Stein"}</Typography>
                                                <Typography variant="body2">{"16 Feb 2022 8:38 PM"}</Typography>
                                                {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                                            </div>

                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginLeft: "20px",
                                            marginRight: '58px',
                                            marginTop: "30px"
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <KeyOutlinedIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{}}>
                                                    <PeopleIcon style={{ height: "18px" }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                                    <Typography variant="caption">Room</Typography>
                                                    <Typography variant="caption">A-21</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: '12px', marginTop: '24px' }}>
                                        <img src={"https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg"} alt="logo" style={{
                                            height: "230px",
                                            maxWidth: "95%",
                                            "object-fit": "contain",
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <div>xs=8 6</div> */}
                    <Paper style={{ height: "616px", border: "1px", borderRadius: "15px" }}>
                        <div style={{margin:'16px'}}>
                            <div style={{paddingTop:"30px"}}>
                                <Typography variant="h6" style={{ fontWeight: "700" }}>Booking Details</Typography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={"images/booking_detail_table.png"} alt="logo" style={{
                                    height: "590px",
                                    maxWidth: "96%",

                                    "object-fit": "contain",

                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>


    );
}

