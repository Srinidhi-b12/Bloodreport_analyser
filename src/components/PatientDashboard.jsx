import React, { useState } from 'react';

const PatientDashboard = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, doctorName: 'Dr. Smith', diagnosis: 'Flu', prescription: 'Rest and fluids', remark: 'Follow up in a week' },
    { id: 2, doctorName: 'Dr. Johnson', diagnosis: 'Sprained ankle', prescription: 'Ice and elevation', remark: 'Avoid strenuous activity' },
  ]);

  const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    { id: 3, name: 'Dr. Williams' },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleSubmit = () => {
    if (selectedDoctor && uploadedFile) {
      alert(`Report submitted to ${selectedDoctor}`);
      // Here you would typically send the file to the server
      setSelectedDoctor('');
      setUploadedFile(null);
    } else {
      alert('Please select a doctor and upload a file');
    }
  };

  return (
    <div className="container mx-auto p-4 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-primary-600">Patient Dashboard</h1>
      <div className="card mb-8">
        <h2 className="text-xl font-semibold mb-4 text-primary-500">Upload Blood Report</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <select
            className="input md:w-1/3"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
            ))}
          </select>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="input md:w-1/3"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-primary md:w-1/3"
            disabled={!selectedDoctor || !uploadedFile}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold mb-4 text-primary-500">Prescriptions</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Prescription</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription) => (
                <tr key={prescription.id}>
                  <td>{prescription.doctorName}</td>
                  <td>{prescription.diagnosis}</td>
                  <td>{prescription.prescription}</td>
                  <td>{prescription.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;