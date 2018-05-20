import React, { Component } from "react";
import Slider from './Slider';
import Arrow from './Arrow';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        urlimg : '',
        currentIndex: '0',
        actualSlide: '0',
        direction: '',
        glyph: '',
        keyS: '',
        numberofSlides: 2,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount () {


  }

  previousSlide (){
      if(this.state.actualSlide < this.state.numberofSlides - 1){
          this.setState({
          actualSlide: 0,
          currentIndex: 0,
      }) 
    }
    else {
      this.setState({
          actualSlide: this.state.currentIndex - 1,
          currentIndex: this.state.actualSlide,
      })
  }
  }

  nextSlide () {
      if(this.state.actualSlide > this.state.numberofSlides - 1){
          this.setState({
          actualSlide: this.state.numberofSlides - 1,
          currentIndex: this.state.numberofSlides - 1,
      }) 
    }
    else {
      this.setState({
          actualSlide: this.state.currentIndex + 1,
          currentIndex: this.state.actualSlide,
      })
    }
  }
  render(){
      return(
          <div className="slideshow">
              <Arrow
          direction="left"
          glyph="&#9664;" 
          clickFunction={ this.previousSlide }
          />

                <Slider 
                  currentIndex={this.state.currentIndex} 
                    urlimg="https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/31509977_878645965679252_4791515818074570752_o.jpg?_nc_cat=0&oh=7615c028ee61931d77ea4e78beef4fd9&oe=5B7AB69B"
                    actualSlide="0"
                 />

                  <Slider currentIndex={this.state.currentIndex} 
                    urlimg="https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/31441164_878658889011293_7064007255183589376_o.jpg?_nc_cat=0&oh=b0b2d129f9180ed4dcd860fcf554aebe&oe=5B8CE121"
                    actualSlide="1"
                 />

                 
                 

                  <Arrow
          direction="right"
         
          glyph="&#9654;"
           clickFunction={ this.nextSlide }
           />
         
              </div>
      );
  }
}
export default Slideshow;