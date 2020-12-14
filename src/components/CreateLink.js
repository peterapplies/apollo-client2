import React, { useState } from "react";

// GraphQL and Apollo
import CREATE_LINK from "../graphql/mutations/CreateLink";
import GET_LINKS from "../graphql/queries/GetAllLinks";
import { useMutation } from "@apollo/client";

// @Material-ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d3d3d3",
    paddingTop: "30px",
    paddingBottom: "30px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  textfield: {
    marginTop: "6px",
    marginBottom: "6px",
    [theme.breakpoints.down("sm")]: {
      width: "78vw"
    },
    [theme.breakpoints.up("md")]: {
      width: "25vw",
      margin: "9px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
      margin: "9px"
    }
  },
  button: {
    marginTop: "6px",
    marginBottom: "6px",
    height: "51px",
    background: "gray",
    "&:hover": {
      background: "gray"
    },
    [theme.breakpoints.down("sm")]: {
      width: "78vw"
    },
    [theme.breakpoints.up("md")]: {
      width: "15vw"
    },
    [theme.breakpoints.up("lg")]: {
      width: "9vw"
    }
  }
}));

export default function CreateLink() {
  const [state, setState] = useState({
    slug: "",
    description: "",
    link: ""
  });

  const classes = useStyles();

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const [createLink] = useMutation(CREATE_LINK);
  function handleSubmit(e) {
    e.preventDefault();
    createLink({
      variables: {
        slug: state.slug,
        description: state.description,
        link: state.link
      },
      update(cache, { data: { createLink } }) {
        cache.modify({
          fields: {
            allLinks(existingLinks = []) {
              const newLinkRef = cache.writeFragment({
                data: createLink,
                fragment: gql`
                  fragment NewLink on Link {
                    id
                    slug
                    description
                    link
                  }
                `
              });
              return [...existingLinks, newLinkRef];
            }
          }
        });
      }
    });
    setState({
      slug: "",
      description: "",
      link: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.root}>
        <TextField
          className={classes.textfield}
          inputProps={{ maxLength: 12 }}
          id="slug"
          name="slug"
          label="Link Alias"
          variant="outlined"
          type="text"
          value={state.slug}
          onChange={handleChange}
        />
        <TextField
          required
          className={classes.textfield}
          id="description"
          name="description"
          label="Description"
          variant="outlined"
          type="text"
          value={state.description}
          onChange={handleChange}
        />
        <TextField
          required
          className={classes.textfield}
          id="link"
          name="link"
          label="URL"
          variant="outlined"
          type="text"
          value={state.link}
          onChange={handleChange}
        />
        <Button variant="outlined" type="submit" className={classes.button}>
          Shonk your link
        </Button>
      </Box>
    </form>
  );
}
