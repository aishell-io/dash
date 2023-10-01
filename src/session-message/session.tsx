import { useMediaQuery } from '@mui/material';
import { Datagrid, EmailField, List, TextField, SimpleList } from 'react-admin';

export const SessionList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
              <SimpleList
                secondaryText={(record) => record.id}
                primaryText={(record) => record.title}
              />
            ) : (
              <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
              </Datagrid>
            )}
        </List>
    )
};

