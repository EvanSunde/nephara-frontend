'use client'
import React, { useState } from 'react';
import '../styles/ProfileComponent.css';

const ProfileComponent = () => {
  const [isEditing, setIsEditing] = useState(false);

  const fields = [
    { label: 'Full name', stateKey: 'fullName', value: 'Evan The Sunde' },
    { label: 'Phone number', stateKey: 'phoneNumber', value: '123-456-7890' },
    { label: 'Email', stateKey: 'email', value: 'example@example.com' },
    { label: 'Address', stateKey: 'address', value: '123 Main St' },
  ];

  const [formData, setFormData] = useState(() => {
    const data = {};
    fields.forEach((field) => {
      data[field.stateKey] = field.value;
    });
    return data;
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e, stateKey) => {
    setFormData({ ...formData, [stateKey]: e.target.value });
  };

  return (
    <>
      <section className='profileComponentContainer'>
        <p className='profileComponentContainerHeading'>Your Details</p>
        <img src='/Feedback2.jpg' alt='profile' />
        <p className='profileComponentContainerHeadingName'>{formData.fullName}</p>
        <form className='profileComponentContainerForm'>
          <div className='profileFormGrid'>
            {fields.map((field) => (
              <div key={field.label} >
                {isEditing ? (
                  <div className='profileComponentContainerFormLabels'>
                    <label>{field.label}:</label>
                    <input
                      type='text'
                      value={formData[field.stateKey]}
                      onChange={(e) => handleChange(e, field.stateKey)}
                    />
                  </div>
                ) : (
                  <>
                    <div className='profileComponentContainerFormLabels'>
                      <label>{field.label}:</label>
                      <input
                        type='text'
                        value={formData[field.stateKey]}
                        readOnly
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

          </div>
        </form>
        {isEditing ? (
          <>
            <button className='profileComponentContainerBlackButton' onClick={handleSaveClick}>Save</button>
            <button className='profileComponentContainerWhiteButton' onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button className='profileComponentContainerBlackButton' onClick={handleEditClick}>Edit Profile</button>
        )}
      </section>
    </>
  );
};

export default ProfileComponent;
