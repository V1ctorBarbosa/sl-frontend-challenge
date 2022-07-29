import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({

    Global: {
        backgroundColor: "#A6A6A6",
        align: "center",
        minWidth: "100%"
    },

    gridBox: {
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        marginTop: "32px",
        borderRadius: '50px 20px',
        backgroundColor: "#F8F7FC",
        color: "#666666",
        textAlign: "center"
    },

    contentBox: {
        display: "flex",
        justifyContent: 'center',
        padding: "8px 0"
    },

    cardName: {
        padding: "12px 0",
        borderBottom: "1px solid"
    },

    password: {
        cursor: "pointer"
    }
})

export default useStyles