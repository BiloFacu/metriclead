'use client'
import React, { useState, useEffect } from 'react';

const Clients = () => {
    const [responseData, setResponseData] = useState(null);
    const [selectClient, setSelectClient] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data)
            setResponseData(data);
            setFilteredData(data);
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (selectClient && responseData) {
          const filtered = responseData.filter(item => item.id === selectClient);
          console.log(responseData)
          setFilteredData(filtered);
        }
      }, [selectClient, responseData]);

    const handleChange = (e) => {
        setSelectClient(parseInt(e.target.value, 10));
    }

    const handleDelete = () => {
        if (selectClient && responseData) {
          const updatedData = responseData.filter(item => item.id !== selectClient);
          setResponseData(updatedData);
          setFilteredData(updatedData);
          setSelectClient(null);
          console.log(filteredData)
        }
      };

    return(
        <div className="clients">
        <h1> Buscar clientes</h1>
        <div className="selectClient">
          <h4>Seleccione un cliente MCC</h4>
          <select onChange={(e) => handleChange(e)}>
            {responseData ? (
        responseData.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))
      ) : (
        <option value="">Cargando...</option>
      )}
          </select>
          <button className='delete' disabled={responseData && responseData.length === 1} onClick={(e) => handleDelete(e)}>
            x
          </button>
        </div>
        <h2>Datos del cliente</h2>
        <div className="dataClient">
          <div className="client">
            <h6>Nombre</h6>
            {filteredData.length > 0 ? (
          <h4 key={filteredData[0].id}>{filteredData[0].name}</h4>
      ) : (
        <h4 value="">Cargando...</h4>
      )}
          </div>
          <div className="client">
            <h6>Telefono</h6>
            {filteredData.length > 0 ? (
          <h4 key={filteredData[0].id}>{filteredData[0].phone}</h4>
      ) : (
        <h4 value="">Cargando...</h4>
      )}
          </div>
          <div className="client">
            <h6>Direccion</h6>
            {filteredData.length > 0 ? (
          <h4 key={filteredData[0].id}>{filteredData[0].address.city}</h4>
      ) : (
        <h4 value="">Cargando...</h4>
      )}
          </div>
          <div className="client">
            <h6>Correo</h6>
            {filteredData.length > 0 ? (
          <h4 key={filteredData[0].id}>{filteredData[0].email}</h4>
      ) : (
        <h4 value="">Cargando...</h4>
      )}
          </div>
        </div>
        <button className="confirmar"> CONFIRMAR </button>
      </div>
    )
}

export default Clients;