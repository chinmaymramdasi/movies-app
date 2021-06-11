import React,{Component} from "react";
import './Home.css';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import Header from "../../common/header/Header";
import moviesData from "../../common/moviesData";

export function SingleLineGridList(){
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <GridList className={classes.GridList} cols={6}>
                {
                    moviesData.map((tile)=>(
                        <GridListTile key={tile.id}>
                            <img src={tile.poster_url} alt={tile.title}/>
                            <GridListTileBar title={tile.title} classes={{root:classes.titleBar,title:classes.title}}/>
                        </GridListTile>

                    ))
                }
            </GridList>

        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (
            <>
            <div className="heading-container">
                <Header/>
            </div>
            <div className="container">
                <span className="heading">Upcoming Movies</span>
            </div>
            <div className="list-div">
                <SingleLineGridList/>
            </div>
            </>
          );
    }


}
 
export default Home;
