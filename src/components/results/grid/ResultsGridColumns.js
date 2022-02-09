import {NavLink} from "react-router-dom";
import {Button, Chip} from "@mui/material";

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 1,
        sortable: false
    },
    {
        field: 'name',
        headerName: 'Exchange',
        align: 'right',
        headerAlign: 'right',
        flex: 3
    },
    {
        field: 'currency',
        headerName: 'Currency',
        align: 'right',
        headerAlign: 'right',
        sortable: false,
        flex: 2
    },
    {
        field: 'price',
        headerName: 'Price',
        align: 'right',
        headerAlign: 'right',
        flex: 2,
        renderCell: params => {
            const {row, field} = params;
            const value = row[field];

            return value ? <Button variant="text">1 {value} {row.quote}</Button> :
                <Chip label="Not available" variant="outlined"/>;
        }
    },
    {
        field: '',
        headerName: 'Actions',
        align: 'right',
        headerAlign: 'right',
        sortable: false,
        flex: 2,
        renderCell: params => {
            const {currency, quote, price} = params.row;
            const route = `/${currency.toLowerCase()}-${quote.toLowerCase()}/details`;

            return price ? <NavLink to={route} style={{textDecoration: 'none'}}>
                <Button variant='contained'>Details</Button>
            </NavLink> : '';
        }
    }
];

export default columns;
