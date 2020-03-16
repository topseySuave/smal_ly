import React, { useState } from "react";
import _ from 'lodash';
import Header from './Components/Header';
import Hero from './Components/Hero';
import InputSection from './Components/InputSection';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [openResbox, setOpenResbox] = useState(false);
    const [url, setUrl] = useState('');
    const [queryRes, setQueryRes] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOpenResbox(true);
        setLoading(true);

        const res = await fetch('/api/url/shorten', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                longUrl: url
            }),
        });

        const actualRes = await res.json();

        try {
            if (res.ok) {
                setLoading(false);
                setQueryRes(actualRes);
            }
            else {
                throw res.statusText;
            }
        } catch (error) {
            setLoading(false);
            setQueryRes(error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    };

    return (
        <div>
            <Header />
            <Hero />
            <InputSection
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                loading={loading}
                queryRes={queryRes}
                openResbox={openResbox}
            />
        </div>
    );
};

export default App;