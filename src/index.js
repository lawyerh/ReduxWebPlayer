import React from 'react'; //import React library
import ReactDOM from 'react-dom'; //import ReactDOM library

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCyxFPrnhsxFCQX0mJcvl2KTYN0Myd8HD0';



//Create new components. Components are reusable blocks of code that produce HTML.

const App = () =>  //This is a class. 
{
    return  (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container')); // .render() needs an instance of a class to render. Passing the entire class itself is not valid.

