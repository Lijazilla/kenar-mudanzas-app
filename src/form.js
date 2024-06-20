import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import background from './image/WhatsApp Image 2024-06-19 at 6.14.56 AM.jpeg';

function Form() {
  const [formData, setFormData] = useState({
    fechaHora: '',
    unidadPrivativa: '',
    tipoResidente: 'Residente',
    nombreResidente: '',
    telefonoInquilino: '',
    caracteristicasCamion: '',
    empresaMudanza: '',
    datosChofer: '',
    notas: '',
    nombreCondominio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateImage = () => {
    const input = document.getElementById('capture');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = imgData;
      const fileName = `Autorizacion_Mudanza_${formData.nombreCondominio.toUpperCase()}_${formData.unidadPrivativa}.jpg`;
      link.download = fileName;
      link.click();
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Nombre del Condominio:</label>
          <input type="text" name="nombreCondominio" value={formData.nombreCondominio} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha y Hora:</label>
          <input type="text" name="fechaHora" value={formData.fechaHora} onChange={handleChange} />
        </div>
        <div>
          <label>Unidad Privativa:</label>
          <input type="text" name="unidadPrivativa" value={formData.unidadPrivativa} onChange={handleChange} />
        </div>
        <div>
          <label>Tipo de Residente:</label>
          <select name="tipoResidente" value={formData.tipoResidente} onChange={handleChange}>
            <option value="Residente">Residente</option>
            <option value="Inquilino">Inquilino</option>
          </select>
        </div>
        <div>
          <label>Nombre del Residente/Inquilino:</label>
          <input type="text" name="nombreResidente" value={formData.nombreResidente} onChange={handleChange} />
        </div>
        {formData.tipoResidente === 'Inquilino' && (
          <div>
            <label>Teléfono del Inquilino:</label>
            <input type="text" name="telefonoInquilino" value={formData.telefonoInquilino} onChange={handleChange} />
          </div>
        )}
        <div>
          <label>Características del Camión:</label>
          <textarea
            name="caracteristicasCamion"
            value={formData.caracteristicasCamion}
            onChange={handleChange}
            rows="2"
            style={{ resize: 'none', overflow: 'hidden', height: '40px' }}
          />
        </div>
        <div>
          <label>Empresa de Mudanza:</label>
          <input type="text" name="empresaMudanza" value={formData.empresaMudanza} onChange={handleChange} />
        </div>
        <div>
          <label>Datos del Chofer y Trabajadores:</label>
          <textarea
            name="datosChofer"
            value={formData.datosChofer}
            onChange={handleChange}
            rows="2"
            style={{ resize: 'none', overflow: 'hidden', height: '40px' }}
          />
        </div>
        <div>
          <label>Notas:</label>
          <textarea
            name="notas"
            value={formData.notas}
            onChange={handleChange}
            rows="2"
            style={{ resize: 'none', overflow: 'hidden', height: '40px' }}
          />
        </div>
        <button type="button" onClick={handleGenerateImage}>Generar Imagen</button>
      </form>
      <div id="capture" style={{ position: 'absolute', left:'-9999px', width: '800px', height: '1000px' }}>
        <img src={background} alt="Formato" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '430px', left: '275px', color: 'black', fontSize: '18px' }}>
          {formData.fechaHora}
        </div>
        <div style={{ position: 'absolute', top: '560px', left: '278px', color: 'black', fontSize: '18px' }}>
          {formData.unidadPrivativa}
        </div>
        <div style={{ position: 'absolute', top: '590px', left: '278px', color: 'black', fontSize: '18px' }}>
          {formData.nombreResidente}
        </div>
        {formData.tipoResidente === 'Inquilino' && (
          <div style={{ position: 'absolute', top: '590px', left: '550px', color: 'black', fontSize: '18px' }}>
            , Teléfono: {formData.telefonoInquilino}
          </div>
        )}
        <div style={{ position: 'absolute', top: '700px', left: '274px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formData.caracteristicasCamion}
        </div>
        <div style={{ position: 'absolute', top: '805px', left: '275px', color: 'black', fontSize: '18px' }}>
          {formData.empresaMudanza}
        </div>
        <div style={{ position: 'absolute', top: '850px', left: '275px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formData.datosChofer}
        </div>
        <div style={{ position: 'absolute', top: '930px', left: '275px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formData.notas}
        </div>
        <div style={{ position: 'absolute', top: '254px', left: '564px', color: 'white', fontSize: '48px', textTransform: 'uppercase' }}>
          {formData.nombreCondominio}
        </div>
      </div>
    </div>
  );
}

export default Form;
