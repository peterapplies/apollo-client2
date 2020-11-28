import React from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import LINK_QUERY from "../graphql/queries/GetAllLinks";

// @Material-ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  header: {
    minHeight: "60vh",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "9px",
    paddingRight: "9px"
  }
});

export default function LinkList() {
  const classes = useStyles();
  return (
    <Query query={LINK_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const linksToRender = data.allLinks;

        return (
          <div className={classes.root}>
            <Typography>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                className={classes.header}
              >
                <div>
                  {linksToRender.map((link, index) => (
                    <Box m={3}>
                      <Link key={index} link={link} />
                    </Box>
                  ))}
                </div>
              </Grid>
            </Typography>
          </div>
        );
      }}
    </Query>
  );
}
