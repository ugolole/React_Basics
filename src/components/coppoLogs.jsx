import React, { useEffect, useState } from "react"

const UsingFetch = () => {
    const [coppologs, setCoppologs] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8070/CoppoLogs?count=3000")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCoppologs(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {coppologs.length > 0 && (
                <ul>
                    {coppologs.map(coppolog => (
                        <li key={coppolog.id}>{coppolog.message}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UsingFetch
