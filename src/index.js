import React from 'react';
import { render } from 'react-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';

const App = () => (
    <ReactiveBase
        app="car-store"
        credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
    >
        <div>Hey</div>
    </ReactiveBase>
);

render(<App />, document.getElementById('root'));
