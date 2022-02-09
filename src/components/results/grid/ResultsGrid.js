import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import columns from "./ResultsGridColumns";

const ResultsGrid = ({rows, isLoading, onCellClicked}) => {
    return <DataGrid
        columns={columns}
        rows={rows}
        disableColumnMenu={true}
        hideFooter={true}
        onCellClick={(params) => onCellClicked(params)}
        density="comfortable"
        loading={isLoading}
        sx={{borderColor: 'primary.light', borderRadius: 5, overflow: 'hidden'}}
        autoHeight
    />
};

export default ResultsGrid;
