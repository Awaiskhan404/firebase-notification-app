// src/components/NotificationComponent.tsx
import React, { useState, useEffect } from 'react';
import {
  Button,
  Snackbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  createNotification,
  getNotifications,
  markNotificationRead,
  Notification,
} from '../services/NotificationService';
import GlassCardComponent from './GlassCard';

const NotificationComponent: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const handleCreateNotification = async (message: string) => {
    await createNotification(message);
    setSnackbarMessage(`Notification "${message}" created!`);
    fetchNotifications();
  };

  const fetchNotifications = async () => {
    const notifications = await getNotifications();
    setNotifications(notifications);
  };

  const handleMarkRead = async (id: string) => {
    await markNotificationRead(id);
    fetchNotifications();
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage(null);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <GlassCardComponent>
        <Typography variant="h5" style={{color:'black', fontWeight:'800'}} gutterBottom>
          Notifications
        </Typography>
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleCreateNotification('Notification 1')}
          >
            Notify 1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleCreateNotification('Notification 2')}
            style={{ marginLeft: '10px' }}
          >
            Notify 2
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleCreateNotification('Notification 3')}
            style={{ marginLeft: '10px' }}
          >
            Notify 3
          </Button>
        </div>
        <List>
          {notifications.map((notification) => (
            <ListItem
              key={notification.id}
              button
              onClick={() => handleMarkRead(notification.id!)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                marginBottom: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '10px 20px',
                color: 'black',
              }}
            >
              <ListItemText primary={notification.message} />
              <IconButton
                edge="end"
                onClick={() => handleMarkRead(notification.id!)}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </GlassCardComponent>
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

export default NotificationComponent;
