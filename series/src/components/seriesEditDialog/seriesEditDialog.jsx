import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SeriesForm from '../seriesForm/seriesForm.jsx';

const SeriesEditDialog = ({
  open,
  serie,
  onClose,
  onSubmit = () => Promise.resolve(),
  errorMessage = ''
}) => {
  const handleSubmit = async (formValues) => {
    if (!serie) return;
    await onSubmit({ ...serie, ...formValues });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar série</DialogTitle>
      <DialogContent dividers sx={{ py: 3 }}>
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}
        {serie ? (
          <SeriesForm
            initialValues={serie}
            onSubmit={handleSubmit}
            submitLabel="Salvar alterações"
            savingLabel="Salvando..."
            titleText="Atualize os dados da série"
          />
        ) : (
          <Typography color="text.secondary">Selecione uma série para editar.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SeriesEditDialog;
