import React from 'react';

class ImageCard  extends React.Component{
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);

    }
 
    render(){
        const {description,urls}=this.props.image;

        return(
            <div>
                <img style={{width:"300px", height:"300px"}} ref={this.imageRef}  alt={description}  src={urls.regular}  />
            </div>
        );

    }
}
export default ImageCard;