import React, { useState } from "react";

// GraphQL and Apollo
import CREATE_LINK from "../graphql/mutations/CreateLink";
import { Mutation } from "react-apollo";

// Material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  textfield: {
    margin: "9px"
  },
  button: {
    margin: "3px",
    width: "100vw"
  },
  container: {
    margin: "1px"
  }
});

export default function CreateLink() {
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const classes = useStyles();

  return (
    <Box mt={3}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <TextField
          required
          className={classes.textfield}
          id="outlined-required"
          label="Short description"
          variant="outlined"
          value={slug}
          onChange={(e) => setSlug({ slug: e.target.value })}
          type="text"
        />
        <TextField
          required
          className={classes.textfield}
          id="outlined-required"
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription({ description: e.target.value })}
          type="text"
        />
        <TextField
          required
          className={classes.textfield}
          id="outlined-required"
          label="URL"
          variant="outlined"
          value={link}
          onChange={(e) => setLink({ link: e.target.value })}
          type="text"
        />
        <Mutation
          mutation={CREATE_LINK}
          variables={{ slug, description, link }}
        >
          {(createLink) => (
            <Button
              className={classes.button}
              variant="outlined"
              onClick={createLink}
            >
              Submit
            </Button>
          )}
        </Mutation>
      </Grid>
    </Box>
  );
}
