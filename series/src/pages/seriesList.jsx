// Series list page with edit/delete actions
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesList from '../components/seriesList/seriesList.jsx';
import Modal from '../components/modal/modal.jsx';
import SeriesForm from '../components/seriesForm/seriesForm.jsx';

const SeriesListPage = ({ series = [], onEditSeries, onDeleteSeries }) => {
    const navigate = useNavigate();

    const [editingIndex, setEditingIndex] = useState(null);
    const [confirmingIndex, setConfirmingIndex] = useState(null);

    const openEdit = (index) => {
        setEditingIndex(index);
    };

    const closeEdit = () => setEditingIndex(null);

    const handleEditSubmit = (updatedData) => {
        if (onEditSeries && editingIndex !== null) {
            onEditSeries(editingIndex, updatedData);
        }
        closeEdit();
    };

    const openConfirmDelete = (index) => setConfirmingIndex(index);

    const closeConfirm = () => setConfirmingIndex(null);

    const handleDelete = (index) => {
        if (onDeleteSeries) {
            onDeleteSeries(index);
        }
        closeConfirm();
    };

    return (
        <div className="series-list-page">
            <NavBar />
            <div className="series-list-header">
                <h2>Lista de Séries</h2>
                <button type="button" onClick={() => navigate('/register')}>
                    Registrar nova série
                </button>
            </div>
            <SeriesList series={series} onEditSeries={openEdit} onDeleteSeries={openConfirmDelete} />

            {editingIndex !== null && (
                <Modal title="Editar Série" onClose={closeEdit}>
                    <SeriesForm
                        initialData={series[editingIndex]}
                        onSubmit={handleEditSubmit}
                        onCancel={closeEdit}
                    />
                </Modal>
            )}

            {confirmingIndex !== null && (
                <Modal title="Confirmar exclusão" onClose={closeConfirm}>
                    <p>Tem certeza que deseja excluir a série "{series[confirmingIndex].title}"?</p>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                        <button onClick={() => handleDelete(confirmingIndex)} className="delete">
                            Excluir
                        </button>
                        <button onClick={closeConfirm} className="cancel">
                            Cancelar
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default SeriesListPage;
