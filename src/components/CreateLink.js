import React, { useState } from "react";
import MakeSlug from "../algorithms/MakeSlug";

// GraphQL and Apollo
import CREATE_LINK from "../graphql/mutations/CreateLink";
import { Mutation } from "react-apollo";

// @Material-ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfield: {
    marginTop: "6px",
    marginBottom: "6px",
    width: "90vw"
  },
  button: {
    marginTop: "6px",
    marginBottom: "6px",
    width: "90vw"
  }
});

export default function CreateLink() {
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  let shortLink = null;
  const classes = useStyles();

  function setShortLink() {
    shortLink = `https://shink.com/${slug}`;
  }

  return (
    <Box mt="30px" mb="30px">
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <TextField
          required
          className={classes.textfield}
          id="outlined-required"
          label="Short description"
          inputProps={{ maxLength: 12 }}
          defaultValue={MakeSlug(4)}
          variant="outlined"
          onChange={(e) => {
            setSlug({ slug: e.target.value });
            setShortLink();
          }}
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
          variables={{ slug, description, link, shortLink }}
        >
          {(createLink) => (
            <Button
              className={classes.button}
              variant="outlined"
              onClick={createLink}
            >
              Shorten URL
            </Button>
          )}
        </Mutation>
      </Grid>
    </Box>
  );
}
