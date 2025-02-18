import React from 'react'


const complaints = [
    {
      id: 1,
      name: "John Doe",
      date: "February 17, 2025",
      image: "https://via.placeholder.com/50",
      text: "I am facing an issue with the service provided. The response time is slow, and the quality is below expectations. Kindly look into this matter."
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "February 16, 2025",
      image: "https://via.placeholder.com/50",
      text: "The app keeps crashing whenever I try to submit my complaint. Please fix this as soon as possible."
    },
    {
      id: 3,
      name: "Michael Johnson",
      date: "February 15, 2025",
      image: "https://via.placeholder.com/50",
      text: "The service provider did not arrive on time. I had to wait for hours. This is unacceptable."
    }
  ];

const Viewcomplaint = () => {
  return (
    <>
     <style>
        {`
          body {
            background-color: #f4f7fc;
            font-family: Arial, sans-serif;
          }

          .complaints-container {
            width: 60%;
            margin: 50px auto;
          }

          .complaint-container {
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            background: #ffffff;
            margin-bottom: 20px;
          }

          .complaint-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }

          .user-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 15px;
          }

          .user-info {
            font-size: 16px;
            color: #333;
          }

          .complaint-text {
            font-size: 16px;
            color: #555;
            margin-bottom: 15px;
          }

          .reply-button {
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .reply-button:hover {
            background: #0056b3;
          }
        `}
      </style>
      <div className="complaints-container">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint-container">
            <div className="complaint-header">
              <img className="user-image" src={complaint.image} alt="User" />
              <div className="user-info">
                <strong>{complaint.name}</strong><br />
                <small>{complaint.date}</small>
              </div>
            </div>
            <p className="complaint-text">{complaint.text}</p>
            <button className="reply-button">Reply</button>
          </div>
        ))}
      </div>

    </>
  )
}

export default Viewcomplaint