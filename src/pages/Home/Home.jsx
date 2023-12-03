import { Component } from "react";
import { Builder, Footer, Header } from "../../containers";

class Home extends Component {
    state = {  } 
    render() { 
        return (
                <div className="Home">
                    <Header/>
                    <Builder/>
                    <Footer />
                </div>

        );
    }
}
 
export default Home;