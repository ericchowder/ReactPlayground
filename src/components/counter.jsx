import React, { Component } from 'react';

class Counter extends Component {
    // Kinda like a struct
    state = {
        count: 1,
        // random 200x200 image
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold" 
    }
    
    // React render
    render() { 
        return (
            // className is react keyword for "class" to bootstrap
            <div>
                <img src = {this.state.imageUrl} alt="random"/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-seondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        // create variable to store bootstrap
        let classes = "badge m-2 badge-";
        // append "warning" or "primary" depending on if 0 or not
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    // Function 
    formatCount() {
        /* 
        if(count == 0){
            print("zero")
        } else {
            print(this.state.count)
        }
        */
        // de-structure; store coutn in separate count variable
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        // Below works, however above is shorthand
        //return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}


 
export default Counter;