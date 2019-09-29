import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData,deleteData} from "./../actions";
import './../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class WeatherCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            showIcon:false
        }
    }
    componentWillMount() {
        this.props.fetchData();
    }

    deleteData(e, index){
        e.preventDefault();
        this.props.deleteData(index);
    }

    handleButtonPress () {

    }

    handleButtonRelease () {

    }

    render(){
        if(!this.props.weather || !this.props.weather.data ){
            return(
                <div>
                    Loading....
                </div>
            )
        }
        return(
            <div>
                <h1>{this.props.weather.summary}</h1>
                {
                    this.props.weather.data.map((data,index)=>{
                        return (
                            <div key={index} className="container"
                                 onTouchStart={this.handleButtonPress}
                                 onTouchEnd={this.handleButtonRelease}
                                 onMouseDown={this.handleButtonPress}
                                 onMouseUp={this.handleButtonRelease}
                                 onMouseLeave={this.handleButtonRelease}>
                                <div className="details">
                                    <div>Summary: {data.summary}</div>
                                    <div>Temperature: {data.temperature}</div>
                                    <div>Humidity: {data.humidity}</div>
                                </div>
                                {this.state.showIcon &&
                                    <FontAwesomeIcon icon={faTrash} onClick={(e) => this.deleteData(e, index)}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    weather: state.weather.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: ()=>{dispatch(fetchData())},
        deleteData: index => dispatch(deleteData(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCart);