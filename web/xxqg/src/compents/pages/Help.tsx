import React, {Component} from "react";
import {getAbout} from "../../utils/api";

class Help extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            about: ""
        };
    }

    componentDidMount() {
        getAbout().then((value)=>{
            this.setState({
                about:value.data

            })
        })

    }
    render() {
        return <>
            <h1 style={{color:"red",margin:10}}></h1><br/>
            <h2 style={{margin:10}}><a href=""></a></h2>
            <br/><h2 style={{margin:10}}>{this.state.about}</h2>
        </>
    }
}

export default Help
