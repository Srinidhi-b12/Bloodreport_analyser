import React, { useState } from 'react';

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', abnormalities: 'High white blood cell count, Low hemoglobin', diagnosis: '', prescription: '', remark: '' },
    { id: 2, name: 'Jane Smith', abnormalities: 'Elevated liver enzymes, Low platelet count', diagnosis: '', prescription: '', remark: '' },
    { id: 3, name: 'Bob Johnson', abnormalities: 'High cholesterol, Low vitamin D', diagnosis: '', prescription: '', remark: '' },
  ]);

  const [alert, setAlert] = useState({ show: false, message: '', isError: false });

  const handleInputChange = (id, field, value) => {
    setPatients(patients.map(patient =>
      patient.id === id ? { ...patient, [field]: value } : patient
    ));
  };

  const handleSubmit = (id) => {
    const patient = patients.find(p => p.id === id);
    if (patient) {
      if (patient.diagnosis.trim() === '' && patient.prescription.trim() === '' && patient.remark.trim() === '') {
        setAlert({ show: true, message: 'Please fill at least one field before submitting.', isError: true });
      } else {
        console.log('Submitting data for patient:', patient);
        setAlert({ show: true, message: `Prescription sent to ${patient.name}`, isError: false });
      }
      setTimeout(() => setAlert({ show: false, message: '', isError: false }), 3000);
    }
  };

  return (
    <div className="container mx-auto p-4 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-primary-600">Doctor Dashboard</h1>
      {alert.show && (
        <div className={`p-4 mb-6 rounded ${alert.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {alert.message}
        </div>
      )}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Report Abnormalities</th>
              <th>Diagnosis</th>
              <th>Prescription</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.abnormalities}</td>
                <td>
                  <input
                    type="text"
                    className="input"
                    value={patient.diagnosis}
                    onChange={(e) => handleInputChange(patient.id, 'diagnosis', e.target.value)}
                    placeholder="Enter diagnosis"
                  />
                </td>
                <td>
                  <textarea
                    className="input"
                    value={patient.prescription}
                    onChange={(e) => handleInputChange(patient.id, 'prescription', e.target.value)}
                    placeholder="Enter prescription"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input"
                    value={patient.remark}
                    onChange={(e) => handleInputChange(patient.id, 'remark', e.target.value)}
                    placeholder="Enter remark"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleSubmit(patient.id)}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;