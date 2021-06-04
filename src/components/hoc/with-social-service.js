import React from 'react';
import SocialServiceContext from '../social-service-context';

const WithSocialService = () => (Wrapped) => {
    return (props) => {
        return (
            <SocialServiceContext.Consumer>
                {
                    (Reducer) => {
                        return <Wrapped {...props} Reducer={Reducer} />
                    }
                }
            </SocialServiceContext.Consumer>
        )
    }
};

export default WithSocialService;