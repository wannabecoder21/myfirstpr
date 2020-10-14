import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Contributors from "./contributors.json";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            HacktoberFest India 2020
          </ListSubheader>
        </GridListTile>
        {Contributors.map((contributor) => (
          <GridListTile key={contributor.github}>
            <img
              src={`/contributors/${contributor.avatar}`}
              alt={contributor.name}
            />
            <GridListTileBar
              title={contributor.name}
              subtitle={contributor.college}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
