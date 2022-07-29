import React, { useState } from 'react';
import useStyles from "../Styles/useStyles"
import { motion } from "framer-motion"
import { Typography } from '@material-ui/core'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


type Props = {
    name: string
    email: string
    password: string | number
    phone: string | number
    avatar: string 
}

function UserCard({name, email, password, phone, avatar}: Props) {

    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)

    console.log(showPassword)

    return(
        <motion.div whileHover={{ translateY: -15 }} transition={{ type: "spring", bounce: .7}}>
            <Grid data-testid="Card" className={classes.gridBox}>
                <Box className={classes.cardName}>
                    <Typography variant='h4'> {name}</Typography>
                </Box>
                <Box className={classes.contentBox}>
                    <Box sx={{ pr: 1 }}>
                        <EmailIcon/>
                    </Box>
                    <Typography>
                        <strong>Email:</strong> {email}
                    </Typography>
                </Box>
                <Box className={classes.contentBox}>
                    <Box onClick={e => setShowPassword(!showPassword)} mr={1}>
                            {showPassword ? <Visibility className={classes.password}/> :
                            <VisibilityOff className={classes.password}/> }                           
                    </Box>
                    <Typography>
                        <strong>Password: </strong> 
                    </Typography>
                    <Box>
                        {showPassword ? <Box sx={{ visibility: 'visible', ml: .5 }}><Typography>{password}</Typography></Box> :
                        <Box sx={{ visibility: 'hidden' }}><Typography>{password}</Typography></Box>}  
                    </Box>
                </Box>
                <Box className={classes.contentBox}>
                    <Box sx={{ pr: 1 }}>
                        <LocalPhoneIcon/>
                    </Box>
                    <Typography>
                        <strong>Phone:</strong> {phone}
                    </Typography>
                </Box>
                <Box sx={{ pb: 2, pt: 2 }}>
                    <img src={avatar} alt="" />
                </Box>
            </Grid>
        </motion.div>
    )
}

export default UserCard