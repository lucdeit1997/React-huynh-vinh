import React from 'react';


export default class Product extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props);
        this.state = {
            number : 2,
            arrayProduct : [
            { name : 'product 1', price:100 },
            { name : 'product 2', price:200 }
            ]
        };
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        console.log(this.state.number)
        if(this.state.number %2 === 0){
            return true;
        }
        return false;
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentWillReceiveProps (nextpro){
        console.log('componentWillReceiveProps')
    }
    fakeApi = () =>{
        setTimeout(() => {
            const data  = Math.floor(Math.random() * 10);
            this.setState({ number : data })
        },1000)
    };
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.fakeApi();
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        console.log('render');
        const  arrayProduct = this.state.arrayProduct;
        return(
            <div>
                <h1>{this.state.number}  ||| {this.props.number} </h1>
                <ul >
                    {
                        arrayProduct.map((product)=>{
                            return ( 
                                <li style = {{'backgroundColor':'green'}} key= {product.name}>
                                    <h3 onClick = {this.fakeApi} key= {product.name}>name : {product.name}</h3><br/>
                                    <h3 key = {product.price + product.name}>price : {product.price}</h3><br/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    };


}
