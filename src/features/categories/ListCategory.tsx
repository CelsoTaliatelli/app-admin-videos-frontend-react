import { Box, Typography, Button, IconButton } from "@mui/material"
import { useAppSelector } from "../../app/hooks";
import { SelectCategories } from "./categoriesSlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';  
import DeleteIcon from '@mui/icons-material/Delete';


const CreateCategory = () => {
    const categories = useAppSelector(SelectCategories);

    const rows: GridRowsProp = categories.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        is_active: category.is_active,
        created_at: new Date(category.created_at).toLocaleDateString('pt-BR') as string
    }));
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex:1},
        { field: 'name', headerName: 'Name', flex:1},
        { field: 'description', headerName: 'Description',flex:1 },
        { field: 'is_active', headerName: 'Active',flex:1, type: 'boolean', 
            renderCell: renderIsActiveCell
        },
        { field: 'created_at', headerName: 'Created At',flex:1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: renderActionsCell
        }
      ];

    function renderIsActiveCell(row: GridRenderCellParams){
        return (
            <Typography color={row.value ? 'primary': 'secondary'}>
                {row.value? 'Active' : 'Inactive'}
            </Typography>
        )
    }

    function renderActionsCell(row: GridRenderCellParams){
        return (
               <IconButton
                color="secondary"
                onClick={() => console.log('click')}
                aria-label="delete"
               >
                <DeleteIcon />
               </IconButton>
        )
    }

    return (
        <Box maxWidth="lg" sx={{mt:3, mb:4}}>
            <Box display="flex" justifyContent="flex-end">
                <Button 
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories/create"
                    style={{marginBottom:"1rem"}}
                >
                    New Category
                </Button>
            </Box>
            {/*<Typography variant="h3" component="h1">
                List Category: Page
                {categories.map((category) => (
               
                ))}
            </Typography>*/}
             <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
            </div>
        </Box>
    );
}

export default CreateCategory;