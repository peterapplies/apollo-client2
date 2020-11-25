import React, { useState } from "react";

// GraphQL and Apollo
import CREATE_LINK from "../graphql/mutations/CreateLink";
import { Mutation } from "react-apollo";

// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  grid: {
    margin: "9px"
  },
  textfield: {
    margin: "3px"
  },
  button: {
    margin: "3px"
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
    <div>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <label>Short description</label>
        <TextField
          required
          className={classes.grid}
          id="outlined-required"
          label="Required"
          variant="outlined"
          value={slug}
          onChange={(e) => setSlug({ slug: e.target.value })}
          type="text"
        />
        <label>Description</label>
        <TextField
          required
          className={classes.grid}
          id="outlined-required"
          label="Required"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription({ description: e.target.value })}
          type="text"
        />
        <label>URL</label>
        <TextField
          required
          className={classes.grid}
          id="outlined-required"
          label="Required"
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
    </div>
  );
}
