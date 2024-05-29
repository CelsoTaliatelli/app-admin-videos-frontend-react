import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    description: null | string;
  }

const category : Category = {
    "id": "1f0e0e4d-f1e1-40dd-a076-0f0693a5f170",
	"name": "Filmes",
	"description": "A categoria mais assistida",
	"is_active": true,
	"created_at": "2024-04-09T20:44:15.116159Z",
    "updated_at":"2024-04-09T20:44:15.116159",
	"deleted_at": null
};

export const initialState = [
    category,
    {...category, id:"1f0e0e5d-f1e1-40dd-a076-0f0693a5f170", name:"Peach"},
    {...category, id:"1f0e0e5d-f1e1-40dd-a076-0f0693a5f170", name:"Apple"},
    {...category, id:"1f0e0e5d-f1e1-40dd-a076-0f0693a5f170", name:"Banana"}
];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
           createCategory(state, action) {},
           updateCategory(state, action) {},
           deleteCategory(state, action) {},         
        },
});


//Selectors
export const SelectCategories = (state: RootState) => state.categories;


//export const {createCategory, updateCategory, deleteCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;