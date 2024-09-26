import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyStyledDiv = () => {
    return (
        <div style={{
            position: "relative",
            backgroundColor: "#e0f7e9",
            padding: "10px",
            marginBottom: "14%",
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img
                src="/images/GEN1.jpg" // Ensure the image path is correct
                style={{
                    width: "100%",
                    height: "auto",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    marginBottom: 15
                }}
                alt="Map"
            />
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "4rem",
                fontWeight: "bold",
                textShadow: "8px 4px 8px rgba(0, 0, 0, 0.7)",
                textAlign: 'center',
                zIndex: 1
            }}>
                CONNECTOUR
                <h2 style={{ fontSize: '1.5rem', marginTop: '10px', color: 'white' }}>
                    "Empowering Travel - Embracing Diversity"
                </h2>
            </div>
        </div>
    );
};

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/places');
                setPlaces(response.data);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            textAlign: 'center',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
        },
        placeItem: {
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            textAlign: 'center',
            padding: '10px',
            transition: 'transform 0.2s',
        },
        placeImage: {
            width: '100%',
            height: 'auto',
        },
        heading: {
            textAlign: 'center',
            padding: '50px 0', // Adjusted to separate the heading from the image
            fontSize: '2.5rem',
            color: '#333',
        },
        placeTitle: {
            fontSize: '1.5rem',
            color: '#555',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <MyStyledDiv />
            <h1 style={styles.heading}>Explore Our Destinations</h1> {/* Heading aligned below the image */}
            <div style={styles.grid}>
                {places.map((place) => (
                    <div key={place._id} style={styles.placeItem}>
                        <Link to={`/place-details/${place._id}`}>
                            <img src={place.src} alt={place.alt} style={styles.placeImage} />
                            <h2 style={styles.placeTitle}>{place.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Places;