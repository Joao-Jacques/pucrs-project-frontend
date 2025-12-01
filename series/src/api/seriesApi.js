import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// GET /series → lista
export async function getAllSeries() {
  const response = await api.get('/series');
  return response.data;
}

// GET /series/:id → uma série
export async function getSeriesById(id) {
  const response = await api.get(`/series/${id}`);
  return response.data;
}

// POST /series → cria
export async function createSeries(serieData) {
  const response = await api.post('/series', serieData);
  return response.data;
}

// PUT /series → atualiza (assumindo que o back aceita { id, ... })
export async function updateSeries(serieData) {
  const response = await api.put('/series', serieData);
  return response.data;
}

// DELETE /series/:id → apaga
export async function deleteSeries(id) {
  const response = await api.delete(`/series/${id}`);
  return response.data;
}
