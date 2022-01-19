import React from 'react';
import HomepageHeader from './HomepageHeader';
import News from './News';
import HomepageFooter from './HomepageFooter';

function Homepage(){
    return(
        <div>
            <HomepageHeader />
            <News />
            <HomepageFooter />
        </div>
    )
}

export default Homepage;