import { Box, Typography, Button } from "@mui/material"
import { useAppSelector } from "../../app/hooks";
import { SelectCategories } from "./categoriesSlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';  

const CreateCategory = () => {
    const categories = useAppSelector(SelectCategories);

    const rows: GridRowsProp = categories.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description
    }));
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
      ];

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