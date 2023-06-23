import React, {useState, useEffect} from 'react';

function Greeting() {
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');

    useEffect(() => {
        localStorage.setItem('classFirstName', firstName);
        localStorage.setItem('classLastName', lastName);
    }, [firstName, lastName]);
    return (
        <div>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <p>

                <ul> Hello,{' '}
                    <li>{firstName} {lastName}</li>

                </ul>
            </p>
        </div>
    );
}

export default Greeting;