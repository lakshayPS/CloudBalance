import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { AlignHorizontalCenter } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

const paginationModel = { page: 0, pageSize: 5 };

export default function ServicesTable({ rows, columns }) {
  return (
    <div className="flex items-center justify-center mx-auto my-6">
      <Paper
        sx={{
          display: "inline-block",
          p: 1,
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.resourceId}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          autoHeight
          disableColumnResize
          disableColumnSelector
          disableVirtualization
          disableRowSelectionOnClick
          sx={{
            border: 0,
            "& .MuiDataGrid-main": {
              width: "fit-content !important",
              minWidth: "fit-content !important",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#e8f1ff",
              color: "#3436b7",
              fontWeight: "bold",
              borderRadius: "6px 6px 0 0",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#e8f1ff",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          }}
        />
      </Paper>
    </div>
  );
}
