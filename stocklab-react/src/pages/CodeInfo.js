import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CodeSearch from '../components/CodeSearch';
import CodePrice from '../components/CodePrice';
import CodeChart from '../components/CodeChart';

const styles = {
    root: {
        flexGrow: 1,
        paper:{
            height:140,
            width:100,
        },
        control:{
            padding:2,
        },
    },
};

class CodeInfo extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps, prevState, snapshot){

    }
    handleSelectedCode = (SelectedCode) => {
        console.log("CodeImfo handleSelectedCode",SelectedCode);
        this.setState({selectedCode});
    }
    render(){
        return(
            <>
            <div>
                <CodeSearch/>
            </div>
            <div>
                <Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
            </div>
            </>
        )
    }

}