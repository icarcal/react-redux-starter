import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const App = () =>
    <div>
        <SearchBar />
    </div>;

ReactDOM.render(<App />, document.querySelector('.container'));