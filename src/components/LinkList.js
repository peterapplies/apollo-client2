import React from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import LINK_QUERY from "../graphql/queries/GetAllLinks";

// @Material-ui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function LinkList() {
  return (
    <Query query={LINK_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const linksToRender = data.allLinks;

        return (
          <Typography>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
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
        );
      }}
    </Query>
  );
}
