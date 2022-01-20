import React from 'react';

import HomepageHeader from './HomepageHeader';
import Presentation from './Presentation';
import News from './News';
import HomepageFooter from './HomepageFooter';

function Homepage(){
    return(
        <div>
            <HomepageHeader />
            <Presentation />
            <News />
            <HomepageFooter />
        </div>
    )
}

export default Homepage;