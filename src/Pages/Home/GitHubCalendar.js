import React, { useEffect, useState } from 'react';

const GitHubCalendar = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
        script.async = true;
        script.onload = () => {
            setScriptLoaded(true);
        };
        script.onerror = () => {
            console.error('Failed to load GitHub calendar script');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (scriptLoaded && window.GitHubCalendar) {
            window.GitHubCalendar('.calendar', '1sagarthakur1');
            window.GitHubCalendar('.calendar', '1sagarthakur1', { responsive: true });
        }
    }, [scriptLoaded]);

    return (
        <div className="calendar_container">
            {scriptLoaded ? (
                <>
                    <div className="calendar">
                        Loading the data just for you.
                    </div>
                    <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
                </>
            ) : (
                <div>Loading GitHub calendar...</div>
            )}
        </div>
    );
};

export default GitHubCalendar;
