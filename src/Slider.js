import React, {Component} from 'react';
class Slider extends Component {
    render(){
        return (
            <div className="slider" >
                <img src={this.props.urlimg} alt="nuno" 
                className={"imgslider " + ( this.props.currentIndex == this.props.actualSlide ? 'show' : 'hidden')} 
                />
            </div>
        );
    }
}
export default Slider;