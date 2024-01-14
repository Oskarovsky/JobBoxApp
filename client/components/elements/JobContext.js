import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobsOfferFrontEndEntity, setJobsOfferFrontEndEntity] = useState(null);

    const setJobsOffer = (data) => {
        setJobsOfferFrontEndEntity(data);
        console.log("Data set in context:", data);
    };

    return (
        <JobContext.Provider value={{ jobsOfferFrontEndEntity, setJobsOffer }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => {
    return useContext(JobContext);
};
